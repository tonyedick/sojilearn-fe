import { useState, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client';
import { usePageTracking, useConversionTracking } from '../utils/websiteAnalytics';
import { Link, useParams } from 'react-router-dom';
import { BlogPost as BlogPostType } from '../types/blog';
import Moment from "moment";
import { dateFormat } from "../Helpers/types";
import { BlogContentRenderer, TableOfContents } from '../Components/BlogContent';
import BlogLayout from '../Components/Layouts/BlogLayout';
import { RelatedPosts } from '../Components/RelatedPosts';
import { CommentSection } from '../Components/Comments';

export default function BlogDetail() {
    const { slug } = useParams();
    const [post, setPost] = useState<BlogPostType | null>(null);
    const [posts, setPosts] = useState<BlogPostType[]>([]);

    const { trackConversion } = useConversionTracking();

    useEffect(() => {
        const fetchPosts = async () => {
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .eq('is_published', true)
                .order('created_at', { ascending: false });
            if (!error && Array.isArray(data)) {
                   // @ts-ignore
                setPosts(data as BlogPostType[]);
                  // @ts-ignore
                setFilteredPosts(data as BlogPostType[]);
            }
        };
        fetchPosts();
    }, []);

    // Fetch single post by slug
    useEffect(() => {
        if (slug) {
            fetchPost(slug);
        }
    }, [slug]);
    usePageTracking(post?.id || slug);

    // Fetch single post
    const fetchPost = async (postSlug: string) => {
        try {
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .eq('slug', postSlug)
                .eq('is_published', true)
                .single();

            if (error) throw error;
            const postData = data && typeof data === 'object' ? (data as BlogPostType) : null;
            setPost(postData);

            // Update document title and meta description for SEO
            if (postData) {
                document.title = postData.seo_title || postData.title;
                const metaDescription = document.querySelector('meta[name="description"]');
                if (metaDescription) {
                    metaDescription.setAttribute('content', postData.seo_description || postData.excerpt || '');
                }
            }
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    };

    const formatDate = (dateString?: string) => {
        if (!dateString) return '';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (!post) {
        return (
            <BlogLayout>
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <h2>Loading...</h2>
                </div>
            </BlogLayout>
        );
    }

    return (
        <BlogLayout>
            <>
                <section className="page-title gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="breadcrumbs-wrap">
                                    <h1 className="breadcrumb-title">{post?.title}</h1>
                                    <nav className="transparent">
                                        <ol className="breadcrumb p-0">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item active theme-cl" aria-current="page">Blog Detail</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="article_detail_wrapss single_article_wrap format-standard">
                                    <div className="article_body_wrap">
                                        <h4 className="mb-3 text-dark">{post?.excerpt}</h4>

                                        <div className="article_top_info mb-4">
                                            <ul className="article_middle_info">
                                                <li><i className="fa fa-user-circle text-secondary"></i>{" "}{post?.author_name}</li>
                                                <li><i className="fa fa-calendar text-secondary"></i>{" "}{formatDate(post?.published_date)}</li>
                                                {post?.reading_time_minutes && (
                                                    <li><i className="fa fa-clock text-secondary"></i>{" "}{post?.reading_time_minutes} min</li>
                                                )}
                                            </ul>
                                        </div>

                                         <div className="article_top_info mb-4">
                                            <ul
                                                className="article_middle_info"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '1rem',
                                                    listStyle: 'none',
                                                    paddingLeft: 0,
                                                    flexWrap: 'wrap', // allow wrapping on small screens
                                                }}
                                            >
                                                <li style={{ fontWeight: 500 }}>
                                                    <i className="fa fa-share-alt" aria-hidden="true"></i> Share:
                                                </li>
                                                <li>
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary btn-sm"
                                                        style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', whiteSpace: 'nowrap' }}
                                                        onClick={() => {
                                                            const url = encodeURIComponent(window.location.href);
                                                            const text = encodeURIComponent(post?.title || '');
                                                            window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'noopener,noreferrer');
                                                        }}
                                                    >
                                                        <i className="fab fa-twitter" aria-hidden="true"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary btn-sm"
                                                        style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', whiteSpace: 'nowrap' }}
                                                        onClick={() => {
                                                            const url = encodeURIComponent(window.location.href);
                                                            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener,noreferrer');
                                                        }}
                                                    >
                                                        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary btn-sm"
                                                        style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', whiteSpace: 'nowrap' }}
                                                        onClick={() => {
                                                            const url = encodeURIComponent(window.location.href);
                                                            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'noopener,noreferrer');
                                                        }}
                                                    >
                                                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                            <style>
                                                {`
                                                    @media (max-width: 600px) {
                                                        .article_middle_info {
                                                            gap: 0.5rem !important;
                                                            font-size: 0.95rem;
                                                        }
                                                        .article_middle_info li {
                                                            margin-bottom: 0.25rem;
                                                        }
                                                    }
                                                `}
                                            </style>
                                        </div>

                                        {/* Featured Image */}
                                        <div className="article_featured_image">
                                            {post && post.featured_image_url && (
                                                <img className="img-fluid" src={post.featured_image_url} alt={post.title} />
                                            )}
                                        </div>

                                        {/* Table of Contents */}
                                        <TableOfContents content={post.content} />
                                        
                                        {/* Blog Content Renderer */}
                                        <BlogContentRenderer content={post.content} />

                                        {/* Tags */}
                                        {post.tags && post.tags.length > 0 && (
                                            <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                                                <h5 style={{ marginBottom: '1rem' }}>Tags</h5>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                    {post.tags.map(tag => (
                                                        <span 
                                                            key={tag} 
                                                            style={{
                                                                backgroundColor: '#f1f5f9',
                                                                color: '#475569',
                                                                padding: '0.25rem 0.75rem',
                                                                borderRadius: '1rem',
                                                                fontSize: '0.875rem',
                                                                border: '1px solid #e2e8f0'
                                                            }}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/* <div className="article_detail_wrapss single_article_wrap format-standard">
                                    <div className="article_posts_thumb">
                                        <span className="img"><img className="img-fluid" src={post?.author_avatar_url} alt={post?.author_name} /></span>
                                        <h3 className="pa-name">{post?.author_name}</h3>
                                        <ul className="social-links">
                                            <li><Link to="https://x.com/dev_dicktonye"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="https://linkedin.com/in/dicktonye"><i className="fab fa-linkedin-in"></i></Link></li>
                                        </ul>
                                        <p className="pa-text">Mr. Tonye is a Software Engineer and Educational Consultant, using his God-given talent to inspire students in Africa and globally. He is driven by a passion to help students access quality education anywhere in the world. </p>
                                    </div>
                                    
                                </div> */}

                                 {/* <div className="article_detail_wrapss single_article_wrap format-standard">
                                    <div className="comment-area">
                                        <div className="comment-box submit-form">
                                            
                                            <h3 className="reply-title">Leave a Comment</h3>
                                            <div className="comment-form">
                                                <form 
                                                    action="."
                                                    method="post"
                                                    autoComplete="off"
                                                    encType="multipart/form-data" 
                                                >
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="form-group">
                                                                <input 
                                                                type="text" name="name" className="form-control" placeholder="Your Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="form-group">
                                                                <input 
                                                                type="email" name="email" className="form-control" placeholder="Your Email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                                            <div className="form-group">
                                                                <textarea 
                                                                name="comment" className="form-control" cols={30} rows={6} placeholder="Type your comments...."></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                                            <div className="form-group">
                                                                <button className="btn theme-bg text-white">Submit Now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <CommentSection blogPostId={post?.id} trackConversion={trackConversion} />
                            </div>
                            
                            {/* Sidebar */}
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                <RelatedPosts currentPost={post} />
                                <div className="single_widgets widget_thumb_post">
                                    <h4 className="title">All Posts</h4>
                                    <ul>
                                    {posts && posts.length > 0 ? (
                                    posts.map(post => (
                                        <li key={post?.id}>
                                            <span className="left">
                                                <img src={post?.featured_image_url} alt="" className="" />
                                            </span>
                                            <span className="right">
                                                <Link className="feed-title" to={`/blog/${post?.slug}`} target="_blank">{post?.title.slice(0, 24)}...</Link> 
                                                <span className="post-date"><i className="ti-calendar"></i>
                                                    {Moment(post?.created_at).format(dateFormat)}
                                                </span>
                                            </span>
                                        </li>
                                    ))
                                    ) : (
                                        <li>No Posts Available</li>
                                    )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </BlogLayout>
    );
}
