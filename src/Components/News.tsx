import React from 'react';
import { Link } from 'react-router-dom';

export default function News() {
  return (
    <div>
        <section className="min gray">
        <div className="container">

            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-8">
                    <div className="sec-heading center">
                        <h2>Latest News &amp; <span className="theme-cl">Articles</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="blg_grid_box">
                        <div className="blg_grid_thumb">
                            <Link to="blog-detail.html"><img src="assets/img/b-7.png" className="img-fluid" alt="" /></Link>
                        </div>
                        <div className="blg_grid_caption">
                            <div className="blg_tag dark"><span>Marketing</span></div>
                            <div className="blg_title"><h4><Link to="blog-detail.html">How To Improove Digital Marketing for Fast SEO</Link></h4></div>
                            <div className="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div>
                            <div className="blg_more"><Link to="blog-detail.html">Reading Continues</Link></div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="blg_grid_box">
                        <div className="blg_grid_thumb">
                            <Link to="blog-detail.html"><img src="assets/img/b-8.png" className="img-fluid" alt="" /></Link>
                        </div>
                        <div className="blg_grid_caption">
                            <div className="blg_tag dark"><span>Marketing</span></div>
                            <div className="blg_title"><h4><Link to="blog-detail.html">How To Improove Digital Marketing for Fast SEO</Link></h4></div>
                            <div className="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div>
                            <div className="blg_more"><Link to="blog-detail.html">Reading Continues</Link></div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="blg_grid_box">
                        <div className="blg_grid_thumb">
                            <Link to="blog-detail.html"><img src="assets/img/b-9.png" className="img-fluid" alt="" /></Link>
                        </div>
                        <div className="blg_grid_caption">
                            <div className="blg_tag dark"><span>Marketing</span></div>
                            <div className="blg_title"><h4><Link to="blog-detail.html">How To Improove Digital Marketing for Fast SEO</Link></h4></div>
                            <div className="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div>
                            <div className="blg_more"><Link to="blog-detail.html">Reading Continues</Link></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
    </div>
  )
}
