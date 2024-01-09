import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Moment from "moment";
import { dateFormat } from "../Helpers/types";
import avatar from "../assets/img/dick.jpg";
import post1 from "../assets/img/b-6.png";
import { AppDispatch, RootState } from '../state/store';
import { fetchBlogById } from '../state/blogs/blogSlice';
import { fetchCategories, selectCategoriesState } from '../state/blogs/categoriesSlice';
import AppLayout from '../Components/Layouts/AppLayout';
import { fetchPosts } from '../state/blogs/post';

export default function BlogDetail() {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { blog, featuredImage, image } = useSelector(
        (state: RootState) => state.blog);
    const { categories, loading: categoriesLoading, error: categoriesError } = useSelector(selectCategoriesState);
    const { posts } = useSelector(
        (state: RootState) => state.posts
    );

    useEffect(() => {
        dispatch(fetchBlogById(Number(id)));
        dispatch(fetchCategories());
        dispatch(fetchPosts());
    }, [dispatch, id]);
    
    if (!blog || !blog.title || !blog.detailsOne) {
    return <div>Loading...</div>;
  }

  return (
    <AppLayout>
        <>
        <section className="page-title gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        
                        <div className="breadcrumbs-wrap">
                            <h1 className="breadcrumb-title">{blog.title}</h1>
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
                            
                                <div className="article_featured_image">
                                    {featuredImage && featuredImage && (
                                        <img  className="img-fluid"src={featuredImage} alt={blog.title} />
                                    )}
                                </div>
                                
                                <div className="article_top_info">
                                    <ul className="article_middle_info">
                                        <li><Link to="/"><span className="icons"><i className="ti-user"></i></span>by Dick Tonye</Link></li>
                                        <li><Link to="/"><span className="icons"><i className="ti-comment-alt"></i></span>45 Comments</Link></li>
                                    </ul>
                                </div>
                                <h2 className="post-title">{blog.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: blog.detailsOne}}></div>
                                <div dangerouslySetInnerHTML={{ __html: blog.detailsTwo}}></div>
                                <br />
                                {image && image && (
                                    <img src={image} width="520" height="440" alt={blog.title} />
                                )}
                                {blog.detailsThree ? (
                                <div dangerouslySetInnerHTML={{ __html: blog.detailsThree }} />
                                ) : (
                                <div>No details available</div>
                                )}
                            </div>
                        </div>
                        
                        <div className="article_detail_wrapss single_article_wrap format-standard">
                            
                            <div className="article_posts_thumb">
                                <span className="img"><img className="img-fluid" src={avatar} alt="" /></span>
                                <h3 className="pa-name">Dick Tonye</h3>
                                <ul className="social-links">
                                    <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-behance"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-youtube"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                                <p className="pa-text">Mr. Tonye is a Software Enegineer and Educational Consultant, using his God-given talent to inspire students in Africa and globally. He is driven by a passion to help students access quality education anywhere in the world. </p>
                            </div>
                            
                        </div>
                        
                        <div className="article_detail_wrapss single_article_wrap format-standard">
                            <div className="comment-area">
                                <div className="comment-box submit-form">
                                    <h3 className="reply-title">Post Comment</h3>
                                    <div className="comment-form">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Your Email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <textarea name="comment" className="form-control" cols={30} rows={6} placeholder="Type your comments...."></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <Link to="/" className="btn theme-bg text-white">Submit Now</Link>
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
                        
                        <div className="single_widgets widget_search">
                            <h4 className="title">Search</h4>
                            <form action="#" className="sidebar-search-form">
                                <input type="search" name="search" placeholder="Search.." />
                                <button type="submit"><i className="ti-search"></i></button>
                            </form>
                        </div>

                        <div className="single_widgets widget_category">
                            <h4 className="title">Categories</h4>
                            <ul>
                                {categoriesLoading ? (
                                <li>Loading categories...</li>
                                ) : categoriesError ? (
                                    <li>Error fetching categories...</li>
                                ) : (
                                <ul>
                                    {Object.entries(categories).map(([category]) => (
                                    <li key={category}>
                                        <Link to="/">{category} <span>1</span></Link>
                                    </li>
                                    ))}
                                </ul>
                                )}
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
    </AppLayout>
  )
}
