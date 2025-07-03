import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../integrations/supabase/client';
import { Link, useSearchParams, useParams } from 'react-router-dom';
import { BlogPost as BlogPostType } from '../types/blog';
import Moment from "moment";
import { dateFormat } from "../Helpers/types";
import post1 from "../assets/img/b-6.png";
import BlogLayout from '../Components/Layouts/BlogLayout';
import { RelatedPosts } from '../Components/RelatedPosts';

export default function BlogDetail() {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<BlogPostType | null>(null);
    const [posts, setPosts] = useState<BlogPostType[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<BlogPostType[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter] = useState('all'); // Remove setSelectedFilter since it's unused
    const [selectedCountry, setSelectedCountry] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams] = useSearchParams();
    const postsPerPage = 9;

    // const countries = ['Canada', 'UK', 'USA', 'France', 'Germany', 'Ireland', 'Malta'];
    // const filters = ['Undergraduate', 'Postgraduate', 'Visa', 'SOPs', 'Scholarships'];

    // Fetch all posts for sidebar and filtering
    useEffect(() => {
        const fetchPosts = async () => {
            const { data, error } = await supabase
                .from('blog_posts' as any)
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
        // eslint-disable-next-line
    }, [slug]);

    // Filtering logic
    const filterPosts = useCallback(() => {
        let filtered = [...posts];

        // Filter by category from URL params
        const categoryParam = searchParams.get('category');
        if (categoryParam && categoryParam !== 'all') {
            filtered = filtered.filter((post: BlogPostType) => post.category === categoryParam);
        }

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter((post: BlogPostType) =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.tags?.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // Filter by country (now tags)
        if (selectedCountry !== 'all') {
            filtered = filtered.filter((post: BlogPostType) =>
                post.tags?.includes(selectedCountry)
            );
        }

        // Filter by filter type
        if (selectedFilter !== 'all') {
            filtered = filtered.filter((post: BlogPostType) => post.filter_type === selectedFilter);
        }

        setFilteredPosts(filtered);
        setCurrentPage(1);
    }, [posts, searchTerm, selectedCountry, selectedFilter, searchParams]);

    useEffect(() => {
        filterPosts();
    }, [posts, searchTerm, selectedCountry, selectedFilter, searchParams, filterPosts]);

    // Fetch single post
    const fetchPost = async (postSlug: string) => {
        try {
            const { data, error } = await supabase
                .from('blog_posts' as any)
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
            // Optionally handle error UI
        }
    };

    // Pagination
    // const paginatedPosts = filteredPosts.slice(
    //     (currentPage - 1) * postsPerPage,
    //     currentPage * postsPerPage
    // );

    // const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

     const formatDate = (dateString?: string) => {
        if (!dateString) return '';
        return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        });
    };

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
                                        <li><i className="fa fa-user-circle text-primary"></i>{" "}{post?.author_name}</li>
                                        <li><i className="fa fa-calendar text-primary"></i>{" "}{formatDate(post?.published_date)}</li>
                                        {post?.reading_time_minutes && (
                                            <li><i className="fa fa-clock text-primary"></i>{" "}{post?.reading_time_minutes} min</li>
                                        )}
                                        {/* <li><Link to="/"><span className="icons"><i className="ti-comment-alt"></i></span>45 Comments</Link></li> */}
                                    </ul>
                                </div>

                                <div className="article_featured_image">
                                    {post && post.featured_image_url && (
                                        <img className="img-fluid" src={post.featured_image_url} alt={post.title} />
                                    )}
                                </div>
                                
                                <p>{post?.content}</p>
                                {/* <div dangerouslySetInnerHTML={{ __html: blog.detailsTwo}}></div> */}
                                <br />
                                {/* {post?.detailsThree ? (
                                <div dangerouslySetInnerHTML={{ __html: blog.detailsThree }} />
                                ) : (
                                <div>No details available</div>
                                )} */}
                            </div>
                        </div>
                        
                        <div className="article_detail_wrapss single_article_wrap format-standard">
                            
                            <div className="article_posts_thumb">
                                <span className="img"><img className="img-fluid" src={post?.author_avatar_url} alt={post?.author_name} /></span>
                                <h3 className="pa-name">{post?.author_name}</h3>
                                <ul className="social-links">
                                    <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-behance"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-youtube"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                                <p className="pa-text">Mr. Tonye is a Software Engineer and Educational Consultant, using his God-given talent to inspire students in Africa and globally. He is driven by a passion to help students access quality education anywhere in the world. </p>
                            </div>
                            
                        </div>
                        
                        <div className="article_detail_wrapss single_article_wrap format-standard">
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
                            
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <RelatedPosts currentPost={post}/>

                        <div className="single_widgets widget_thumb_post">
                            <h4 className="title">All Posts</h4>
                            <ul>
                            {posts && posts.length > 0 ? (
                            posts.map((item: any) => (
                                <li key={item?.id}>
                                    <span className="left">
                                        <img src={item?.featured_image_url} alt="" className="" />
                                    </span>
                                    <span className="right">
                                        <Link className="feed-title" to={`/blog-detail/${item?.id}`} target="_blank">{item?.title.slice(0, 24)}...</Link> 
                                        <span className="post-date"><i className="ti-calendar"></i>
                                            {Moment(item?.created_at).format(dateFormat)}
                                        </span>
                                    </span>
                                </li>
                            ))
                            ) : (
                                <li>No Posts Available</li>
                            )}
                            </ul>
                        </div>
                                                       
                        <div className="single_widgets widget_tags">
                            <h4 className="title">Advertise Here</h4>
                            <ul>
                                <img className="img-fluid" src={post1} alt="" />
                            </ul>
                        </div>
                        
                    </div>
                </div>				
                
            </div>
		</section>
        </>
    </BlogLayout>
  )
}
