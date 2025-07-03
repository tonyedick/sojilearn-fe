
-- Add featured column to blog_posts table
ALTER TABLE public.blog_posts 
ADD COLUMN featured BOOLEAN NOT NULL DEFAULT false;

-- Create index for featured posts lookups
CREATE INDEX idx_blog_posts_featured ON public.blog_posts(featured);
