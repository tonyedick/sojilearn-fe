-- Create comments table
CREATE TABLE public.comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_post_id UUID NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  content TEXT NOT NULL,
  is_approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  parent_id UUID REFERENCES public.comments(id) ON DELETE CASCADE,
  
  -- Add foreign key constraint to blog_posts
  CONSTRAINT fk_comments_blog_post 
    FOREIGN KEY (blog_post_id) 
    REFERENCES public.blog_posts(id) 
    ON DELETE CASCADE
);

-- Create index for better query performance
CREATE INDEX idx_comments_blog_post_id ON public.comments(blog_post_id);
CREATE INDEX idx_comments_parent_id ON public.comments(parent_id);
CREATE INDEX idx_comments_created_at ON public.comments(created_at);

-- Enable Row Level Security
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view approved comments
CREATE POLICY "Anyone can view approved comments" 
  ON public.comments 
  FOR SELECT 
  USING (is_approved = true);

-- Policy: Anyone can insert comments (for guest commenting)
CREATE POLICY "Anyone can create comments" 
  ON public.comments 
  FOR INSERT 
  WITH CHECK (true);

-- Policy: Users can edit their own comments
CREATE POLICY "Users can edit their own comments" 
  ON public.comments 
  FOR UPDATE 
  USING (
    (auth.uid() IS NOT NULL AND auth.uid() = user_id) 
    OR is_admin(auth.uid())
  );

-- Policy: Admins can manage all comments
CREATE POLICY "Admins can manage all comments" 
  ON public.comments 
  FOR ALL 
  USING (is_admin(auth.uid()));

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_comments_updated_at 
  BEFORE UPDATE ON public.comments 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
