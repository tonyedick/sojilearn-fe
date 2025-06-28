import React, { useEffect, useState } from 'react';
import { supabase } from '../integrations/supabase/client';
import { useForm } from 'react-hook-form';
import { Link, useSearchParams, useParams } from 'react-router-dom';
import Moment from "moment";
import { dateFormat } from "../Helpers/types";
import avatar from "../assets/img/dick.jpg";
import toast from 'react-hot-toast';
import post1 from "../assets/img/b-6.png";
import BlogLayout from '../Components/Layouts/BlogLayout';
import { Search, Calendar, User, Clock } from 'lucide-react';
import { BlogPost } from '../types/blog';

type FormValues = {
    blog_id: number;
    name: string;
    email: string;
    comment: string;
};

interface BlogSidebarProps {
  currentPost?: BlogPost;
}

export default function Blog() {

    const { id } = useParams<{ id: string }>();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams] = useSearchParams();
    const postsPerPage = 9;

    const categories = ['Canada', 'UK', 'USA', 'France', 'Germany', 'Ireland', 'Malta'];
    const filters = ['Undergraduate', 'Postgraduate', 'Visa', 'SOPs', 'Scholarships'];

    useEffect(() => {
        fetchPosts();
        
        // Check for category parameter in URL
        const categoryParam = searchParams.get('category');
        if (categoryParam && categories.includes(categoryParam)) {
        setSelectedCategory(categoryParam);
        }
    }, [searchParams]);

    useEffect(() => {
        filterPosts();
    }, [posts, searchTerm, selectedCategory, selectedFilter]);

    const fetchPosts = async () => {
        try {
        const { data, error } = await supabase
            .from('blog_posts' as any)
            .select('*')
            .eq('is_published', true)
            .order('published_date', { ascending: false });

        if (error) throw error;
        setPosts((data as any[]) || []);
        } catch (error) {
        console.error('Error fetching posts:', error);
        } finally {
        setLoading(false);
        }
    };

    const filterPosts = () => {
        let filtered = posts;

        if (searchTerm) {
        filtered = filtered.filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        }

        if (selectedCategory !== 'all') {
        filtered = filtered.filter(post => post.category === selectedCategory);
        }

        if (selectedFilter !== 'all') {
        filtered = filtered.filter(post => post.filter_type === selectedFilter);
        }

        setFilteredPosts(filtered);
        setCurrentPage(1);
    };

    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        });
    };

    if (loading) {
        return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-7xl mx-auto">
            <div className="text-center">Loading blog posts...</div>
            </div>
        </div>
        );
    }

  return (
        <BlogLayout>
            <>
                <section className="page-title bg-cover" style={{background: "url(assets/img/banner-3.jpg)no-repeat"}} data-overlay="8">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="breadcrumbs-wrap">
                                    <h1 className="breadcrumb-title text-light">Study Abroad Blogs</h1>
                                    <nav className="transparent">
                                        <ol className="breadcrumb p-0">
                                            <li className="breadcrumb-item"><a href="/" className="text-light">Home</a></li>
                                            <li className="breadcrumb-item active theme-cl" aria-current="page">Blogs</li>
                                        </ol>
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="min">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="row">
                                    {paginatedPosts.length > 0 ? (
                                    paginatedPosts.map(post => (
                                    <div  key={post.id} className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="blg_grid_box">
                                            <div className="blg_grid_thumb">
                                                {post.featured_image_url && (
                                                    <Link to="blog-detail.html">
                                                        <img 
                                                            src={post.featured_image_url}
                                                            alt={post.title}
                                                            className="img-fluid"
                                                            loading="lazy"
                                                            />
                                                    </Link>
                                                )}
                                            </div>
                                            <div className="blg_grid_caption">
                                                <div className="blg_tag"><span>{post.category}</span></div>{" "}
                                                    {post.filter_type && (
                                                        <div className="blg_tag">{post.filter_type}</div>
                                                    )}
                                                <div className="blg_title"><h4><Link to={`/blog/${post.slug}`}>{post.title}</Link></h4></div>
                                                <div className="blg_desc"><p>{post.excerpt}</p></div>
                                            </div>
                                            <div className="crs_grid_foot">
                                                <div className="crs_flex">
                                                    <div className="crs_fl_first">
                                                        <div className="crs_tutor">
                                                            <div className="crs_tutor_thumb"><a href="instructor-detail.html"><img src="assets/img/team-5.jpg" className="img-fluid circle" alt=""/></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="crs_fl_last">
                                                        <div className="foot_list_info">
                                                            <ul>
                                                                {post.reading_time_minutes && (
                                                                    <li><div className="elsio_ic"><i className="fa fa-clock text-success"></i></div><div className="elsio_tx">{post.reading_time_minutes} min</div></li>
                                                                )}
                                                                    <li><div className="elsio_ic"><i className="fa fa-calendar text-warning"></i></div><div className="elsio_tx">{formatDate(post.published_date)}</div></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        ))
                                        ) : (
                                            <div className="col-12 text-center py-8">No posts founds.</div>
                                    )}
                                </div>
                            </div>

                            {/* Beginning */}
                           

                            {/* End */}

                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        
                                <div className="single_widgets widget_search">
                                    <h4 className="title">Search</h4>
                                    <form action="#" className="sidebar-search-form">
                                        <input 
                                            type="search" 
                                            name="search" 
                                            placeholder="Search blog posts..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="pl-10"
                                        />
                                        <button type="submit"><i className="ti-search"></i></button>
                                    </form>
                                </div>

                                <div className="single_widgets widget_category">
                                    <h4 className="title">Categories</h4>
                                    <ul>
                                        {categories.map(category => (
                                            <li key={category}>
                                                <button
                                                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                                    onClick={() => setSelectedCategory(category)}
                                                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: selectedCategory === category ? '#4a90e2' : undefined }}
                                                >
                                                    {category}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                 
                                
                                <div className="single_widgets widget_thumb_post">
                                    <h4 className="title">All Posts</h4>
                                    <ul>
                                    {posts && posts.length > 0 ? (
                                    posts.map((item: any) => (
                                        <li key={item?.id}>
                                            <span className="left">
                                                <img src={item?.featuredImage} alt="" className="" />
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
                        
                                {/* <div className="single_widgets widget_tags">
                                    <h4 className="title">Advertise Here</h4>
                                    <ul>
                                        <img className="img-fluid" src={post1} alt="" />
                                    </ul>
                                </div> */}
                        
                            </div>

                        </div>

                    </div>
                </section>
                <div className="clearfix"></div>

                <section className="theme-bg call_action_wrap-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">

                                <div className="call_action_wrap">
                                    <div className="call_action_wrap-head">
                                        <h3>Do You Have Questions ?</h3>
                                        <span>We'll help you to grow your career and growth.</span>
                                    </div>
                                    <a href="{{Route('contact')}}" className="btn btn-call_action_wrap">Contact Us Today</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </>
        </BlogLayout>
  )
}
