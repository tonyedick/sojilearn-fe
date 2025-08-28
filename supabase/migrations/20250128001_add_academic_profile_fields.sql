-- Add academic profile fields to profiles table
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS academic_background text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS preferred_countries text[];
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS degree_level text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS interests text[];

-- Add check constraints for degree level
ALTER TABLE public.profiles ADD CONSTRAINT degree_level_check 
  CHECK (degree_level IS NULL OR degree_level IN ('undergraduate', 'masters', 'doctorate', 'diploma'));

-- Update the handle_new_user function to set default role
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data ->> 'full_name', ''),
    'student'  -- Default role for new users
  );
  RETURN new;
END;
$$;