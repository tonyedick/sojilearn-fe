import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <>
        <div className="hero_banner image-cover image_bottom h6_bg pt-0">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="simple-search-wrap text-left">
                          <div className="hero_search-2">
                              <div className="elsio_tag yellow">LISTEN TO OUR LATEST PODCAST</div>
                              <h1 className="banner_title mb-4">Dreaming of <br />Studying Abroad?<br /><span className="light">Start planning today!</span></h1>
                              <p className="font-lg mb-4">The Most Comprehensive & Personalised Study Abroad Plan. <br />Obsessed with Student Success.</p>
                              <div className="inline_btn">
                                  <Link to="https://portal.sojilearn.com/register" target="_blank" className="btn theme-bg text-white">Get Started</Link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="side_block extream_img">
                          <div className="list_crs_img">
                              <img src="assets/img/ic-1.png" className="img-fluid cirl animate-fl-y" alt="" />
                              <img src="assets/img/ic-2.png" className="img-fluid arrow animate-fl-x" alt="" />
                              <img src="assets/img/ic-3.png" className="img-fluid moon animate-fl-x" alt="" />
                          </div>
                          <img src="assets/img/side-2.png" className="img-fluid" alt="" />
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
        </section>
    </>
  )
}
