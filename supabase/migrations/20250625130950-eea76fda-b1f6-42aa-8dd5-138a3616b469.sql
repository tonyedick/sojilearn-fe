
-- Create user profiles table
CREATE TABLE public.profiles (
  id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  email text,
  full_name text,
  role text DEFAULT 'user',
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  PRIMARY KEY (id)
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile" 
  ON public.profiles 
  FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles 
  FOR UPDATE 
  USING (auth.uid() = id);

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data ->> 'full_name', '')
  );
  RETURN new;
END;
$$;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM public.profiles 
    WHERE id = user_id AND role = 'admin'
  );
$$;

-- Update blog_posts policies to allow admin access
DROP POLICY IF EXISTS "Anyone can view published posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Only authenticated users can insert posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Only authenticated users can update posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Only authenticated users can delete posts" ON public.blog_posts;

-- Create new policies for blog_posts
CREATE POLICY "Anyone can view published posts" 
  ON public.blog_posts 
  FOR SELECT 
  USING (is_published = true OR public.is_admin(auth.uid()));

CREATE POLICY "Admins can insert posts" 
  ON public.blog_posts 
  FOR INSERT 
  WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update posts" 
  ON public.blog_posts 
  FOR UPDATE 
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete posts" 
  ON public.blog_posts 
  FOR DELETE 
  USING (public.is_admin(auth.uid()));

-- Insert a default admin user (you'll need to change this email to your actual email)
-- First, you need to sign up with this email, then run this update
-- UPDATE public.profiles SET role = 'admin' WHERE email = 'admin@sojilearn.com';
