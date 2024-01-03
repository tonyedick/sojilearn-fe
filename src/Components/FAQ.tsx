import React from 'react'
import { Link } from 'react-router-dom'

export default function FAQ() {
  return (
    
    <section>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-8">
                    <div className="sec-heading center">
                        <h2>Frequently Asked <span className="theme-cl">Questions</span></h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                    <div id="accordionExample" className="accordion">

                        <div className="card">
                            <div id="headingOne" className="card-header bg-white shadow-sm border-0">
                            <h6 className="mb-0 accordion_title"><a href="/" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="d-block position-relative text-dark collapsible-link py-2 collapsed">How much does it cost to study in UK?</a></h6>
                            </div>
                            <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample" className="collapse">
                            <div className="card-body pl-3 pr-3 pt-0">
                                <p>The fees for courses vary across different universities in the UK. The average cost of UG courses in UK range from £9,000- 30,000. The fees for PG courses is around £15,000-35,000. MBA courses in UK cost around £12,000- 80,000.</p>
                            </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingTwo" className="card-header bg-white shadow-sm border-0">
                            <h6 className="mb-0 accordion_title"><a href="/" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="d-block position-relative text-dark collapsible-link py-2 collapsed">Learn Web Designing in Basic Level</a></h6>
                            </div>
                            <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" className="collapse">
                            <div className="card-body pl-3 pr-3 pt-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                            </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingThree" className="card-header bg-white shadow-sm border-0">
                            <h6 className="mb-0 accordion_title"><a href="/" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="d-block position-relative collapsed text-dark collapsible-link py-2">Learn Web Designing in Advance Level</a></h6>
                            </div>
                            <div id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample" className="collapse">
                            <div className="card-body pl-3 pr-3 pt-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                            </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingFour" className="card-header bg-white shadow-sm border-0">
                            <h6 className="mb-0 accordion_title"><a href="/" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" className="d-block position-relative collapsed text-dark collapsible-link py-2">How To Become Succes in Designing &amp; Development?</a></h6>
                            </div>
                            <div id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample" className="collapse">
                            <div className="card-body pl-3 pr-3 pt-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="foot-news-last mt-4">
                    <div className="inline_btn">
                        <Link to="http://127.0.0.1:8000" className="btn theme-bg text-white">Talk to an Expert Counsellor for FREE</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
