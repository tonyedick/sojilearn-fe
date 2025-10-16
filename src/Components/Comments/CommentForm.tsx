import React, { useState } from 'react';
import { CommentFormData } from '../../types/comment';
import { useAuth } from '../../hooks/useAuth';
import toast from "react-hot-toast";

interface CommentFormProps {
  onSubmit: (data: CommentFormData) => Promise<boolean>;
  parentId?: string;
  onCancel?: () => void;
  compact?: boolean;
}

export const CommentForm: React.FC<CommentFormProps> = ({ 
  onSubmit, 
  parentId, 
  onCancel, 
  compact = false 
}) => {
  const [formData, setFormData] = useState<CommentFormData>({
    author_name: '',
    author_email: '',
    content: '',
    parent_id: parentId,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, profile } = useAuth();

  React.useEffect(() => {
    if (user && profile) {
      setFormData(prev => ({
        ...prev,
        author_name: profile.full_name || '',
        author_email: profile.email || '',
      }));
    }
  }, [user, profile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.content.trim()) {
      toast.error('Please enter a comment.', {
        duration: 5000,
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.author_name.trim() || !formData.author_email.trim()) {
      toast.error('Please enter your name and email.', {
        duration: 5000,
      });
      setIsSubmitting(false);
      return;
    }

    const success = await onSubmit(formData);
    
    if (success) {
      toast.success('Comment submitted successfully! It will appear after approval.', {
				duration: 5000,
			});
      setFormData({
        author_name: user && profile ? (profile.full_name || '') : '',
        author_email: user && profile ? (profile.email || '') : '',
        content: '',
        parent_id: parentId,
      });
      if (onCancel) onCancel();
    } else {
      toast.error('Failed to submit comment. Please try again.', {
				duration: 5000,
			});
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (field: keyof CommentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        {!compact && (
          <h3 className="reply-title">
            {parentId ? 'Reply to comment' : 'Leave a comment'}
          </h3>
        )}
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="author_name">Name *</label>
                <input 
                    id="author_name"
                    type="text" 
                    className="form-control" 
                    value={formData.author_name}
                    onChange={(e) => handleChange('author_name', e.target.value)}
                    required
                    disabled={!!user}
                />
              </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="author_email">Email *</label>
                <input 
                    id="author_email"
                    type="email"
                    className="form-control" 
                    value={formData.author_email}
                    onChange={(e) => handleChange('author_email', e.target.value)}
                    required
                    disabled={!!user}
                />
              </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="form-group">
                  <label htmlFor="content">Comment *</label>
                  <textarea 
                        name="comment" 
                        className="form-control" 
                        id="content"
                        value={formData.content}
                        onChange={(e) => handleChange('content', e.target.value)}
                        placeholder="Write your comment here..."
                        rows={compact ? 3 : 4}
                        required
                        >
                  </textarea>
              </div>
          </div>
          
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="form-group">
              <button 
                className="btn theme-bg text-white float-left"
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : (parentId ? 'Reply' : 'Submit')}
              </button>
              {onCancel && (
                <button 
                    className="btn theme-bg text-white float-right"
                    type="button" 
                    onClick={onCancel}
                >
                Cancel
              </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
