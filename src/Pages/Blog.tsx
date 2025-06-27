import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import Moment from "moment";
import { dateFormat } from "../Helpers/types";
import avatar from "../assets/img/dick.jpg";
import toast from 'react-hot-toast';
import post1 from "../assets/img/b-6.png";
import { fetchBlogById } from '../state/blogs/blogSlice';
import { fetchCategories, selectCategoriesState } from '../state/blogs/categoriesSlice';
import BlogLayout from '../Components/Layouts/BlogLayout';
import { fetchPosts } from '../state/blogs/post';

type FormValues = {
    blog_id: number;
    name: string;
    email: string;
    comment: string;
  };

export default function Blog() {

    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { blog, featuredImage, image } = useSelector(
        (state: RootState) => state.blog);
    const { categories, loading: categoriesLoading, error: categoriesError } = useSelector(selectCategoriesState);
    const { posts } = useSelector(
        (state: RootState) => state.posts
    );

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    const submit = async (data: FormValues) => {
        try {
          const apiUrl = `${process.env.REACT_APP_BASEURL}/api/comment`;
          
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                blog_id: Number(id), 
            }),
          });
    
          const result = await response.json();
    
          if (response.ok) {
            toast.success('Comment received! Waiting for admin approval');
            reset();
          } else {
            const errorMessage = result?.message?.content?.[0] || 'Something went wrong, please try again!';
            toast.error(errorMessage);
          }
        } catch (error) {
          console.error('An unexpected error occurred:', error);
          toast.error('An unexpected error occurred, please try again!');
        }
      };

    useEffect(() => {
        dispatch(fetchBlogById(Number(id)));
        dispatch(fetchCategories());
        dispatch(fetchPosts());
    }, [dispatch, id]);
    
//     if (!blog || !blog.title || !blog.detailsOne) {
//     return <div>Loading...</div>;
//   }

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
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="blg_grid_box">
                                            <div className="blg_grid_thumb">
                                                <a href="blog-detail.html"><img src="assets/img/b-1.png" className="img-fluid" alt=""/></a>
                                            </div>
                                            <div className="blg_grid_caption">
                                                <div className="blg_tag"><span>Marketing</span></div>
                                                <div className="blg_title"><h4><a href="blog-detail.html">How To Register &amp; Enrolled on SkillUp Step by Step?</a></h4></div>
                                                <div className="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div>
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
                                                                <li><div className="elsio_ic"><i className="fa fa-eye text-success"></i></div><div className="elsio_tx">10k Views</div></li>
                                                                <li><div className="elsio_ic"><i className="fa fa-clock text-warning"></i></div><div className="elsio_tx">10 July 2021</div></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
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
