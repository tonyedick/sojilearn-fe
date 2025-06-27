import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bakimageLarge from "../../assets/img/malta_banner.png";
import bakimageSmall from "../../assets/img/malta_banner_small.png"; 
import flag from "../../assets/img/uk_icon.webp";

export default function BannerStudyInMalta() {
    const [backgroundImage, setBackgroundImage] = useState(bakimageLarge);

    useEffect(() => {
      const handleResize = () => {
        setBackgroundImage(window.innerWidth <= 768 ? bakimageSmall : bakimageLarge);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
  return (
    <>    
        <div
            className="hero_banner image-cover image_bottom h6_bg pt-0"
            style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center center",
            backgroundSize: window.innerWidth <= 768 ? "contain" : "cover",
            backgroundColor: "black",
            minHeight: "600px", // Set a minimum height
            height: "400px",    // Set a fixed or max height as needed
            maxHeight: "50vh",  // Optional: limit to half the viewport height
            overflow: "hidden"  // Prevent content overflow
            }}
        >
          <div className="container" >
              <div className="row align-items-center">
                    <div className="simple-search-wrap">
                        <div className="hero_search-2">
                            <h1 className="banner_title mb-4 text-white" style={{textShadow: "8px 8px 8px gray"}} 
                            ><span><img src={flag} alt="" height="45" width="60" /></span> Study in Malta<br />Hidden Gem of Europe</h1>
                            <div className="inline_btn">
                                <Link to="https://forms.gle/wCbcYWJ9PPzfxCZR8" target="_blank" className="btn theme-bg text-white">Online Form</Link>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
        </div>
          {/* // <!-- ============================ Hero Banner End ================================== --> */}
        <section className="p-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="crp_box fl_color ovr_top">
                            <div className="row align-items-center">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="dro_140">
                                        <div className="dro_141 de"><i className="fa fa-journal-whills"></i></div>
                                        <div className="dro_142">
                                            <h6>AFTER 12TH / UG</h6>
                                            <p><strong>How to Apply: </strong>All UG Applications are submitted through UCAS.</p>
                                            <p><strong>Cost Estimate: </strong>£9,000 - 30,000 per year</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="dro_140">
                                        <div className="dro_141 de"><i className="fa fa-business-time"></i></div>
                                        <div className="dro_142">
                                            <h6>MASTERS</h6>
                                            <p><strong>How to Apply: </strong>PG applications are directly sent via online or offline modes.</p>
                                            <p><strong>Cost Estimate: </strong>£15,000 - 35,000 per year</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="dro_140">
                                        <div className="dro_141 de"><i className="fa fa-user-shield"></i></div>
                                        <div className="dro_142">
                                            <h6>MBA</h6>
                                            <p><strong>How to Apply: </strong>MBA applications are submitted directly to the universities.</p>
                                            <p><strong>Cost Estimate: </strong>£12,000 - 80,000 per year</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}
