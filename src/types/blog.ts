
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image_url?: string;
  author_name: string;
  author_avatar_url?: string;
  published_date: string;
  updated_date: string;
  category: 'Canada' | 'UK' | 'USA' | 'France' | 'Germany' | 'Ireland' | 'Malta';
  tags?: string[];
  filter_type?: 'Undergraduate' | 'Postgraduate' | 'Visa' | 'SOPs' | 'Scholarships';
  is_published: boolean;
  reading_time_minutes?: number;
  seo_title?: string;
  seo_description?: string;
  created_at: string;
}
