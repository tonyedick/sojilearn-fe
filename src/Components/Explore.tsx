import React from 'react'
import { Link } from 'react-router-dom'

export default function Explore() {
  return (
    <div>
        <section className="min">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center mb-4">
                            <h2>Explore Top <span className="theme-cl">Courses</span></h2>
                            <p>We are bridging the gap between dreams and universities, one student at a time.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="edu_cat_2 cat-1">
                            <div className="edu_cat_icons">
                                <Link className="pic-main" to="/"><img src="assets/img/content.png" className="img-fluid" alt="" /></Link>
                            </div>
                            <div className="edu_cat_data">
                                <h4 className="title"><Link to="/">Engineering</Link></h4>
                                <ul className="meta">
                                    <li className="video"><i className="ti-video-clapper"></i>250+ Universities</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="edu_cat_2 cat-2">
                            <div className="edu_cat_icons">
                                <Link className="pic-main" to="/"><img src="assets/img/briefcase.png" className="img-fluid" alt="" /></Link>
                            </div>
                            <div className="edu_cat_data">
                                <h4 className="title"><Link to="/">Health Sciences</Link></h4>
                                <ul className="meta">
                                    <li className="video"><i className="ti-video-clapper"></i>58+ Universities</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="edu_cat_2 cat-3">
                            <div className="edu_cat_icons">
                                <Link className="pic-main" to="/"><img src="assets/img/career.png" className="img-fluid" alt="" /></Link>
                            </div>
                            <div className="edu_cat_data">
                                <h4 className="title"><Link to="/">Accounting</Link></h4>
                                <ul className="meta">
                                    <li className="video"><i className="ti-video-clapper"></i>74+ Universities</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="edu_cat_2 cat-4">
                            <div className="edu_cat_icons">
                                <Link className="pic-main" to="/"><img src="assets/img/python.png" className="img-fluid" alt="" /></Link>
                            </div>
                            <div className="edu_cat_data">
                                <h4 className="title"><Link to="/">IT &amp; Computer Science</Link></h4>
                                <ul className="meta">
                                    <li className="video"><i className="ti-video-clapper"></i>65+ Universities</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="edu_cat_2 cat-10">
                            <div className="edu_cat_icons">
                                <Link className="pic-main" to="/"><img src="assets/img/designer.png" className="img-fluid" alt="" /></Link>
                            </div>
                            <div className="edu_cat_data">
                                <h4 className="title"><Link to="/">Arts &amp; Design</Link></h4>
                                <ul className="meta">
                                    <li className="video"><i className="ti-video-clapper"></i>43+ Universities</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="edu_cat_2 cat-6">
                            <div className="edu_cat_icons">
                                <Link className="pic-main" to="/"><img src="assets/img/speaker.png" className="img-fluid" alt="" /></Link>
                            </div>
                            <div className="edu_cat_data">
                                <h4 className="title"><Link to="/">Business & Marketing</Link></h4>
                                <ul className="meta">
                                    <li className="video"><i className="ti-video-clapper"></i>82+ Universities</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="edu_cat_2 cat-7">
                            <div className="edu_cat_icons">
                                <Link className="pic-main" to="/"><img src="assets/img/photo.png" className="img-fluid" alt="" /></Link>
                            </div>
                            <div className="edu_cat_data">
                                <h4 className="title"><Link to="/">Law</Link></h4>
                                <ul className="meta">
                                    <li className="video"><i className="ti-video-clapper"></i>250+ Universities</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="edu_cat_2 cat-8">
                            <div className="edu_cat_icons">
                                <Link className="pic-main" to="/"><img src="assets/img/yoga.png" className="img-fluid" alt="" /></Link>
                            </div>
                            <div className="edu_cat_data">
                                <h4 className="title"><Link to="/">Physiotherapy</Link></h4>
                                <ul className="meta">
                                    <li className="video"><i className="ti-video-clapper"></i>103 Universities</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="edu_cat_2 cat-9">
                            <div className="edu_cat_icons">
                                <Link className="pic-main" to="/"><img src="assets/img/health.png" className="img-fluid" alt="" /></Link>
                            </div>
                            <div className="edu_cat_data">
                                <h4 className="title"><Link to="/">Counseling</Link></h4>
                                <ul className="meta">
                                    <li className="video"><i className="ti-video-clapper"></i>38+ Universities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}
