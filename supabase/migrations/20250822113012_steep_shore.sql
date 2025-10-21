/*
# Create study_abroad_applications table for Sojilearn customer application page

1. New Tables
  - `study_abroad_applications` - Stores students' information from the multi-step form
    - Personal information (name, email, phone)
    - Education background and preferences
    - Timeline and budget information
    - Metadata for tracking

2. Security
  - Enable RLS on `study_abroad_applications` table
  - Add policy for anonymous form submissions
*/

CREATE TABLE IF NOT EXISTS public.study_abroad_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  current_level text NOT NULL,
  institution text,
  graduation_year text NOT NULL,
  preferred_country text NOT NULL,
  preferred_program text NOT NULL,
  field_of_study text NOT NULL,
  preferred_university text,
  intended_start_date text NOT NULL,
  has_passport boolean DEFAULT false,
  has_degree boolean DEFAULT false,
  has_transcript boolean DEFAULT false,
  previous_application boolean DEFAULT false,
  budget_range text NOT NULL,
  additional_questions text,
  stage text DEFAULT 'draft',
  source text DEFAULT 'landing_page',
  admin_notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.study_abroad_applications ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the contact form)
CREATE POLICY "Allow anonymous form submissions"
  ON public.study_abroad_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Optional: Allow reading own submissions if you implement user auth later
CREATE POLICY "Users can read own submissions"
  ON public.study_abroad_applications
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);