import React, { useState, useEffect } from 'react';
import { supabase } from '../../integrations/supabase/client';
import { useAuth } from '../../hooks/useAuth';
import { Comment, CommentFormData } from '../../types/comment';
import { CommentForm } from './CommentForm';
import { CommentItem } from './CommentItem';

interface CommentSectionProps {
  blogPostId: string;
}

export const CommentSection: React.FC<CommentSectionProps> = ({ blogPostId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchComments();
  }, [blogPostId]);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
      // @ts-ignore
        .from('comments')
        .select('*')
        .eq('blog_post_id', blogPostId)
        .eq('is_approved', true)
        .is('parent_id', null)
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Fetch replies for each comment
      const commentsWithReplies = await Promise.all(
        (data || []).map(async (comment) => {
          const { data: replies, error: repliesError } = await supabase
          // @ts-ignore
            .from('comments')
            .select('*')
            .eq('parent_id', comment.id)
            .eq('is_approved', true)
            .order('created_at', { ascending: true });

          if (repliesError) {
            console.error('Error fetching replies:', repliesError);
            return { ...comment, replies: [] };
          }

          return { ...comment, replies: replies || [] };
        })
      );

      // @ts-ignore
      setComments(commentsWithReplies);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCommentSubmit = async (formData: CommentFormData) => {
    try {
      const { error } = await supabase
      // @ts-ignore
        .from('comments')
        .insert({
          // @ts-ignore
          blog_post_id: blogPostId,
          user_id: user?.id || null,
          author_name: formData.author_name,
          author_email: formData.author_email,
          content: formData.content,
          parent_id: formData.parent_id || null,
        });

      if (error) throw error;

      // Refresh comments after submission
      await fetchComments();
      return true;
    } catch (error) {
      console.error('Error submitting comment:', error);
      return false;
    }
  };

  if (loading) {
    return (
      <div className="article_detail_wrapss single_article_wrap format-standard">
         <div className="comment-area">
          <div className="text-center py-4">Loading comments...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="article_detail_wrapss single_article_wrap format-standard">
      <div className="comment-area">
        <CommentForm onSubmit={handleCommentSubmit} />
        <hr className="mt-4" />
        {comments.length > 0 ? (
          <div className="space-y-6">
            {comments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                onReply={handleCommentSubmit}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 theme-cl">
            No comments yet. Be the first to comment!
          </div>
        )}
      </div>
    </div>
  );
};
