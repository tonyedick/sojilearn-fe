import { Link } from 'react-router-dom';

const reviews = [
    { user: 'Roy M. Cardona', role: 'Google Founder', stars: 4.9, imgSrc: 'assets/img/user-3.jpg', logoSrc: 'assets/img/c-3.png', comment: 'Sojilearn has obviously taken the time to understudy the needs of students and created the best solution to cater for it through this portal'},
    { user: 'Dorothy K. Shipton', role: 'Linkedin Leader', stars: 4.7, imgSrc: 'assets/img/user-4.jpg', logoSrc: 'assets/img/c-4.png', comment: 'Demo comment'},
    { user: 'Robert P. McKissack', role: 'CEO, Leader', stars: 4.7, imgSrc: 'assets/img/user-5.jpg', logoSrc: 'assets/img/c-5.png', comment: 'Demo comment'},
    { user: 'Susan D. Murphy', role: 'CEO, Leader', stars: 4.7, imgSrc: 'assets/img/user-1.jpg', logoSrc: 'assets/img/c-1.png', comment: 'Demo comment'},
    { user: 'Maxine E. Gagliardi', role: 'Apple CEO', stars: 4.5, imgSrc: 'assets/img/user-2.jpg', logoSrc: 'assets/img/c-2.png', comment: 'Demo comment'},
];

export default function Reviews() {
  return (
    <div>
      <section className="white">
        <div className="container">

            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-8">
                    <div className="sec-heading center">
                        <h2>Our <span className="theme-cl">Reviews</span></h2>
                        <p>Here's what our students and partner institutions have to say about our service delivery.</p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-sm-12">

                    <div className="reviews-slide space slick-initialized slick-slider">
                        <button type="button" data-role="none" className="slick-prev slick-arrow" aria-label="Previous">Previous</button>

                        <div aria-live="polite" className="slick-list draggable">
                          <div className="slick-track">
                            {reviews.map((review, index) => (
                              <div
                                key={index}
                                className="single_items lios_item slick-slide slick-current slick-active"
                                style={{ width: "390px" }}
                              >
                                <div className="_testimonial_wrios shadow_none">
                                  <div className="_testimonial_flex">
                                    <div className="_testimonial_flex_first">
                                      <div className="_tsl_flex_thumb">
                                        <img src={review.imgSrc} className="img-fluid" alt=""/>
                                      </div>
                                      <div className="_tsl_flex_capst">
                                        <h5>{review.user}</h5>
                                        <div className="_ovr_posts"><span>{review.role}</span></div>
                                      </div>
                                    </div>
                                    <div className="_testimonial_flex_first_last">
                                      <div className="_tsl_flex_thumb">
                                        <div className="_ovr_rates"><span><i className="fa fa-star"></i></span>{review.stars}</div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="facts-detail text-center">
                                    <p>{review.comment}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next">Next</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-8">
                    <div className="sec-heading center">
                        <h2>Frequently Asked <span className="theme-cl">Questions</span></h2>
                        <p>You can find some answers to most frequently occuring questions our users/students have asked with answers below.</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                    <div id="accordionExample" className="accordion">

                        <div className="card">
                            <div id="headingOne" className="card-header bg-white shadow-sm border-0">
                            <h6 className="mb-0 accordion_title"><Link to="/" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="d-block position-relative text-dark collapsible-link py-2 collapsed">How Much Is Your Processing Fee for Admission?</Link></h6>
                            </div>
                            <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample" className="collapse">
                            <div className="card-body pl-3 pr-3 pt-0">
                                <p>Admissions counselling service to these universities is <strong>FREE</strong> for students. As their official partners, we receive a student advisory fee from universities. </p>
                                <p>Here, at Sojilearn, we take pride in ensuring every student gets their desired course and can focus on achieving their dreams without distractions.</p>
                            </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingTwo" className="card-header bg-white shadow-sm border-0">
                            <h6 className="mb-0 accordion_title"><Link to="/" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="d-block position-relative text-dark collapsible-link py-2 collapsed">How Do I Track My Application?</Link></h6>
                            </div>
                            <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" className="collapse">
                            <div className="card-body pl-3 pr-3 pt-0">
                                <p>Once your account has been created, and your documents have been evaluated, you will have access to Real-Time Updates on your Applications through your personalized dashboard.</p>
                                <p>Login to your dashboard to seamlessly track your application progress and receive real-time updates on offers.</p>
                            </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingTwo" className="card-header bg-white shadow-sm border-0">
                            <h6 className="mb-0 accordion_title"><Link to="/" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="d-block position-relative text-dark collapsible-link py-2 collapsed">Can I Have Multiple Applications At The Same Time?</Link></h6>
                            </div>
                            <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" className="collapse">
                            <div className="card-body pl-3 pr-3 pt-0">
                                <p>Sure, after your documents have been evaluated, we apply to at least five (5) universities on your behalf. To enable you stand a chance at getting an admission.</p>
                                <p>Each application has a unique tracking number you can use to track the progress.</p>
                            </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingThree" className="card-header bg-white shadow-sm border-0">
                            <h6 className="mb-0 accordion_title"><Link to="/" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="d-block position-relative collapsed text-dark collapsible-link py-2">Is There A Dedicated Staff That Can Guide Me Through My Application?</Link></h6>
                            </div>
                            <div id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample" className="collapse">
                            <div className="card-body pl-3 pr-3 pt-0">
                                <p>Our Support Staff are available 24/7 to guide you through your application process. </p>
                                <p>We provide counseling and support for undergraduate application, post graduate application, English Test, fee payment, visa, travel and accommodation needs.</p>
                            </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingFour" className="card-header bg-white shadow-sm border-0">
                            <h6 className="mb-0 accordion_title"><Link to="/" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" className="d-block position-relative collapsed text-dark collapsible-link py-2">What Countries Do You Work With?</Link></h6>
                            </div>
                            <div id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample" className="collapse">
                            <div className="card-body pl-3 pr-3 pt-0">
                                <p>Currently, our partner universities are situated in UK, Canada, USA, Dubai and Ireland. </p>
                                <p>We have over 650+ partner universities across various countries.</p>
                            </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingFour" className="card-header bg-white shadow-sm border-0">
                            <h6 className="mb-0 accordion_title"><Link to="/" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" className="d-block position-relative collapsed text-dark collapsible-link py-2">Do You Provide Support For English Language Tests?</Link></h6>
                            </div>
                            <div id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample" className="collapse">
                            <div className="card-body pl-3 pr-3 pt-0">
                                <p>Yes, we have partner centers across various countries that can provide professional services for your English Tests. </p>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
