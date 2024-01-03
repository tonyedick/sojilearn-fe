import React from 'react'
import AppLayout from '../Components/Layouts/AppLayout'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <AppLayout>
        <>
        <section className="page-title gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        
                        <div className="breadcrumbs-wrap">
                            <h1 className="breadcrumb-title">Let' Start New Design in Adobe Photoshop</h1>
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
                                    <img className="img-fluid" src="assets/img/b-7.png" alt="" />
                                </div>
                                
                                <div className="article_top_info">
                                    <ul className="article_middle_info">
                                        <li><Link to="/"><span className="icons"><i className="ti-user"></i></span>by Rosalina Doe</Link></li>
                                        <li><Link to="/"><span className="icons"><i className="ti-comment-alt"></i></span>45 Comments</Link></li>
                                    </ul>
                                </div>
                                <h2 className="post-title">Lorem ipsum dolor sit amet, cons pisicing elit, sed do.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem. <br /><br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                                <blockquote>
                                    <span className="icon"><i className="fas fa-quote-left"></i></span>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tem
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo onsequat.</p>
                                    <h5 className="name">- Rosalina Pong</h5>
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                                    dolorem. <br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
                                    iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                            </div>
                        </div>
                        
                        <div className="article_detail_wrapss single_article_wrap format-standard">
                            
                            <div className="article_posts_thumb">
                                <span className="img"><img className="img-fluid" src="assets/img/user-1.jpg" alt="" /></span>
                                <h3 className="pa-name">Rosalina William</h3>
                                <ul className="social-links">
                                    <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-behance"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-youtube"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                                <p className="pa-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
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
                                <li><Link to="/">Lifestyle <span>09</span></Link></li>
                                <li><Link to="/">Travel <span>12</span></Link></li>
                                <li><Link to="/">Fashion <span>19</span></Link>
                                </li><li><Link to="/">Branding <span>17</span></Link></li>
                                <li><Link to="/">Music <span>10</span></Link></li>
                            </ul>
                        </div>
                        
                        <div className="single_widgets widget_thumb_post">
                            <h4 className="title">Trending Posts</h4>
                            <ul>
                                <li>
                                    <span className="left">
                                        <img src="assets/img/b-1.png" alt="" className="" />
                                    </span>
                                    <span className="right">
                                        <Link className="feed-title" to="/">Alonso Kelina Falao Asiano Pero</Link> 
                                        <span className="post-date"><i className="ti-calendar"></i>10 Min ago</span>
                                    </span>
                                </li>
                                <li>
                                    <span className="left">
                                        <img src="assets/img/b-2.png" alt="" className="" />
                                    </span>
                                    <span className="right">
                                        <Link className="feed-title" to="/">It is a long established fact that a reader</Link> 
                                        <span className="post-date"><i className="ti-calendar"></i>2 Hours ago</span>
                                    </span>
                                </li>
                                <li>
                                    <span className="left">
                                        <img src="assets/img/b-3.png" alt="" className="" />
                                    </span>
                                    <span className="right">
                                        <Link className="feed-title" to="/">Many desktop publish packages and web</Link> 
                                        <span className="post-date"><i className="ti-calendar"></i>4 Hours ago</span>
                                    </span>
                                </li>
                                <li>
                                    <span className="left">
                                        <img src="assets/img/b-4.png" alt="" className="" />
                                    </span>
                                    <span className="right">
                                        <Link className="feed-title" to="/">Various versions have evolved over the years</Link> 
                                        <span className="post-date"><i className="ti-calendar"></i>7 Hours ago</span>
                                    </span>
                                </li>
                                <li>
                                    <span className="left">
                                        <img src="assets/img/b-5.png" alt="" className="" />
                                    </span>
                                    <span className="right">
                                        <Link className="feed-title" to="/">Photo booth anim 8-bit PBR 3 wolf moon.</Link> 
                                        <span className="post-date"><i className="ti-calendar"></i>3 Days ago</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="single_widgets widget_tags">
                            <h4 className="title">Tags Cloud</h4>
                            <ul>
                                <li><Link to="/">Lifestyle</Link></li>
                                <li><Link to="/">Travel</Link></li>
                                <li><Link to="/">Fashion</Link></li>
                                <li><Link to="/">Branding</Link></li>
                                <li><Link to="/">Music</Link></li>
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
