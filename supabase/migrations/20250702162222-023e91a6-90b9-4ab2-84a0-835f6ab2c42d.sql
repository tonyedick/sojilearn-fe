
-- Add new categories to the blog_posts table
-- We'll update the category column to support the new categories
-- and ensure countries become tags instead

-- First, let's see what we're working with and make the necessary changes
ALTER TABLE blog_posts 
DROP CONSTRAINT IF EXISTS blog_posts_category_check;

-- Update existing posts to move country categories to tags
UPDATE blog_posts 
SET 
  tags = CASE 
    WHEN tags IS NULL THEN ARRAY[category]
    ELSE array_append(tags, category)
  END,
  category = 'Study Abroad'
WHERE category IN ('Canada', 'UK', 'USA', 'France', 'Germany', 'Ireland', 'Malta');

-- Add a check constraint for the new categories
ALTER TABLE blog_posts 
ADD CONSTRAINT blog_posts_category_check 
CHECK (category IN ('Study Abroad', 'Scholarships', 'Success Stories', 'Visa and Immigration', 'Scholarships and Grants', 'SOP'));
