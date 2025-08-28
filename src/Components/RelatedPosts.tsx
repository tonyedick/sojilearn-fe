import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { supabase } from '../integrations/supabase/client';
import { BlogPost } from '../types/blog';

interface RelatedPostsProps {
  currentPost: BlogPost | null;
}

export const RelatedPosts = ({ currentPost }: RelatedPostsProps) => {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);


  const fetchRelatedPosts = useCallback(async () => {
    try {
      // Fetch posts with same category or filter_type, excluding current post
      const { data, error } = await supabase
        .from('blog_posts' as any)
        .select('*')
        .eq('is_published', true)
        .neq('id', currentPost?.id)
        .or(`category.eq.${currentPost?.category},filter_type.eq.${currentPost?.filter_type}`)
        .order('published_date', { ascending: false })
        .limit(3);

      if (error) throw error;
      setRelatedPosts((data as any[]) || []);
    } catch (error) {
      console.error('Error fetching related posts:', error);
    } finally {
      setLoading(false);
    }
  }, [currentPost]);

  useEffect(() => {
    fetchRelatedPosts();
  }, [fetchRelatedPosts]);

  if (loading || relatedPosts.length === 0) {
    return null;
  }

  const dateFormat = "MMM DD, YYYY";

  return (
    <div className="single_widgets widget_thumb_post">
      <h4 className="title">You May Also Like</h4>
      <ul>
        {relatedPosts.map(post => (
          <li key={post.id}>
            {post.featured_image_url && (
              <>
                <span className="left">
                  <img
                    src={post.featured_image_url}
                    alt={post.title}
                    className=""
                  />
                </span>
                <span className="right">
                  <Link className="feed-title" to={`/blog/${post?.slug}`} target="_blank">
                    {post?.title.slice(0, 24)}...
                  </Link>
                  <span className="post-date">
                    <i className="ti-calendar"></i>
                    {moment(post?.created_at).format(dateFormat)}
                  </span>
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
