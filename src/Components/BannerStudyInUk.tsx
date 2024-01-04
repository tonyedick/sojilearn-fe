import { Link } from 'react-router-dom';
import bakimage from "../assets/img/uk_banner.jpg"; 
import flag from "../assets/img/uk_icon.webp";

export default function BannerStudyInUk() {
  return (
    <>    
        <div className="hero_banner image-cover image_bottom h6_bg pt-0" style={{backgroundImage: `url(${bakimage})`, backgroundPosition: "center center", backgroundSize: "cover", backgroundColor: "black"}}>
          <div className="container" >
              <div className="row align-items-center">
                    <div className="simple-search-wrap">
                        <div className="hero_search-2">
                            <h1 className="banner_title mb-4 text-white" style={{textShadow: "4px gray"}} 
                            ><span><img src={flag} alt="" height="45" width="60" /></span> Study in UK<br /></h1>
                            <div className="inline_btn">
                                <Link to="http://127.0.0.1:8000/register" target="_blank" className="btn theme-bg text-white">Talk to an Expert Counsellor for FREE</Link>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
        </div>
          {/* // <!-- ============================ Hero Banner End ================================== --> */}
        {/* <section className="p-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="crp_box fl_color ovr_top">
                            <div className="row align-items-center">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="dro_140">
                                        <div className="dro_141 de"><i className="fa fa-journal-whills"></i></div>
                                        <div className="dro_142">
                                            <h6>Research & Discovery</h6>
                                            <p>Dive into a world of diverse destinations, prestigious universities, and exciting courses.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="dro_140">
                                        <div className="dro_141 de"><i className="fa fa-business-time"></i></div>
                                        <div className="dro_142">
                                            <h6>Shortlisting</h6>
                                            <p>Share your profile, and let us recommend the best-matched universities and courses for you.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="dro_140">
                                        <div className="dro_141 de"><i className="fa fa-user-shield"></i></div>
                                        <div className="dro_142">
                                            <h6>Applications & Offers</h6>
                                            <p>Stay Ahead with Real-Time Updates on your Applications from our partner universities</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section> */}
    </>
  )
}
