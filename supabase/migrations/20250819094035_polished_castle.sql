/*
  # Study Abroad Applications Schema

  1. New Tables
    - `study_abroad_applications`
      - Core application data (email, budget, countries, etc.)
      - Multi-step form data storage
      - Status tracking (draft, submitted, under_review, approved, rejected)
    
    - `application_documents`
      - File uploads (passport, transcripts, certificates)
      - Document metadata and validation
    
    - `application_referrals`
      - Referral tracking when users mention friends

  2. Security
    - Enable RLS on all tables
    - Users can only see their own applications
    - Admins can see all applications

  3. Features
    - Auto-timestamps for created/updated
    - JSON fields for flexible data storage
    - File upload support with metadata
*/

-- Study Abroad Applications Table
CREATE TABLE IF NOT EXISTS study_abroad_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Basic Information (Step 1)
  email text NOT NULL,
  budget text, -- 'below_4500', '4500_6500', '6600_11500', '11500_21500', '21500_above', 'not_applicable'
  interested_countries text[], -- ['UK', 'Canada', 'USA', 'Germany', 'Ireland']
  preferred_university text,
  previously_applied_university boolean DEFAULT false,
  knows_visa_payment boolean DEFAULT false,
  knows_accommodation_payment boolean DEFAULT false,
  
  -- UK Interest & Marketing (Step 2)
  interested_in_uk boolean DEFAULT false,
  how_heard_about_us text, -- 'friend', 'instagram', 'twitter', 'facebook', 'whatsapp', 'random_search', 'ad', 'flyer', 'linkedin', 'tiktok', 'other'
  referral_friend_name text,
  
  -- Academic Information (Step 3)
  degree_applying_for text, -- 'undergraduate', 'diploma', 'graduate_certificate', 'masters', 'mres_travel_dependents', 'doctorate'
  first_choice_study text,
  second_choice_study text,
  waec_neco_year text,
  most_recent_qualification text, -- 'waec_neco_ssce', 'diploma_hnd', 'bachelors', 'masters', 'other'
  
  -- Application Status
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'submitted', 'under_review', 'approved', 'rejected')),
  current_step integer DEFAULT 1 CHECK (current_step >= 1 AND current_step <= 4),
  
  -- Metadata
  form_data jsonb DEFAULT '{}', -- Store any additional form data
  admin_notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Document Uploads Table
CREATE TABLE IF NOT EXISTS application_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id uuid REFERENCES study_abroad_applications(id) ON DELETE CASCADE,
  document_type text NOT NULL, -- 'passport_photo', 'government_id', 'waec_result', 'sss3_transcript', 'ond_hnd_degree', 'bachelors_transcript', 'masters_degree', 'masters_transcript'
  file_name text NOT NULL,
  file_path text NOT NULL,
  file_size integer NOT NULL,
  mime_type text NOT NULL,
  upload_status text DEFAULT 'uploaded' CHECK (upload_status IN ('uploaded', 'processing', 'verified', 'rejected')),
  created_at timestamptz DEFAULT now()
);

-- Referrals Table (for tracking friend referrals)
CREATE TABLE IF NOT EXISTS application_referrals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id uuid REFERENCES study_abroad_applications(id) ON DELETE CASCADE,
  referrer_name text NOT NULL,
  referrer_contact text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'converted')),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE study_abroad_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE application_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE application_referrals ENABLE ROW LEVEL SECURITY;

-- RLS Policies for study_abroad_applications
CREATE POLICY "Users can view their own applications"
  ON study_abroad_applications
  FOR SELECT
  TO authenticated
  USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Users can create their own applications"
  ON study_abroad_applications
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own applications"
  ON study_abroad_applications
  FOR UPDATE
  TO authenticated
  USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- RLS Policies for application_documents
CREATE POLICY "Users can view their own documents"
  ON application_documents
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM study_abroad_applications 
      WHERE study_abroad_applications.id = application_documents.application_id 
      AND (
        study_abroad_applications.user_id = auth.uid() OR
        EXISTS (
          SELECT 1 FROM profiles 
          WHERE profiles.id = auth.uid() 
          AND profiles.role = 'admin'
        )
      )
    )
  );

CREATE POLICY "Users can upload documents for their applications"
  ON application_documents
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM study_abroad_applications 
      WHERE study_abroad_applications.id = application_documents.application_id 
      AND study_abroad_applications.user_id = auth.uid()
    )
  );

-- RLS Policies for application_referrals
CREATE POLICY "Users can view referrals for their applications"
  ON application_referrals
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM study_abroad_applications 
      WHERE study_abroad_applications.id = application_referrals.application_id 
      AND (
        study_abroad_applications.user_id = auth.uid() OR
        EXISTS (
          SELECT 1 FROM profiles 
          WHERE profiles.id = auth.uid() 
          AND profiles.role = 'admin'
        )
      )
    )
  );

CREATE POLICY "Users can create referrals for their applications"
  ON application_referrals
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM study_abroad_applications 
      WHERE study_abroad_applications.id = application_referrals.application_id 
      AND study_abroad_applications.user_id = auth.uid()
    )
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_study_abroad_applications_user_id ON study_abroad_applications(user_id);
CREATE INDEX IF NOT EXISTS idx_study_abroad_applications_status ON study_abroad_applications(status);
CREATE INDEX IF NOT EXISTS idx_study_abroad_applications_created_at ON study_abroad_applications(created_at);
CREATE INDEX IF NOT EXISTS idx_application_documents_application_id ON application_documents(application_id);
CREATE INDEX IF NOT EXISTS idx_application_referrals_application_id ON application_referrals(application_id);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_study_abroad_applications_updated_at
    BEFORE UPDATE ON study_abroad_applications
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();