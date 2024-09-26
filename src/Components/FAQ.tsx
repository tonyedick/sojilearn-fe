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
                            <h6 className="mb-0 accordion_title"><a href="/" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="d-block position-relative text-dark collapsible-link py-2 collapsed">How much does it cost to process admission for a student?</a></h6>
                            </div>
                            <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample" className="collapse">
                            <div className="card-body pl-3 pr-3 pt-0">
                                <p>Sojilearn does not charge students any fee to process undergraduate or post graduate admission. Except in cases where the university requests payment for admission form, like Canada or few universities in the UK.</p>
                            </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingTwo" className="card-header bg-white shadow-sm border-0">
                            <h6 className="mb-0 accordion_title"><a href="/" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="d-block position-relative text-dark collapsible-link py-2 collapsed">Can I have multiple applications at the same time?</a></h6>
                            </div>
                            <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" className="collapse">
                            <div className="card-body pl-3 pr-3 pt-0">
                                <p>Yes, when we submit your application, we apply to at least 5 universities for you, your applications can be tracked in your dashboard.</p>
                            </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingThree" className="card-header bg-white shadow-sm border-0">
                            <h6 className="mb-0 accordion_title"><a href="/" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="d-block position-relative collapsed text-dark collapsible-link py-2">How can I track my applications?</a></h6>
                            </div>
                            <div id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample" className="collapse">
                            <div className="card-body pl-3 pr-3 pt-0">
                                <p>Login to your dashboard or Create an Account to track your applications at any time with notifications available. </p>
                            </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingFour" className="card-header bg-white shadow-sm border-0">
                            <h6 className="mb-0 accordion_title"><a href="/" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" className="d-block position-relative collapsed text-dark collapsible-link py-2">Are there benefits for referring students to Sojilearn?</a></h6>
                            </div>
                            <div id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample" className="collapse">
                            <div className="card-body pl-3 pr-3 pt-0">
                                <p>Yes, when you refer a student to Sojilearn to stand a chance of earning from $20 to $200.</p>
                            </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingFive" className="card-header bg-white shadow-sm border-0">
                            <h6 className="mb-0 accordion_title"><a href="/" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" className="d-block position-relative collapsed text-dark collapsible-link py-2">What are the countries you process admission for?</a></h6>
                            </div>
                            <div id="collapseFive" aria-labelledby="headingFive" data-parent="#accordionExample" className="collapse">
                            <div className="card-body pl-3 pr-3 pt-0">
                                <p>Currently, our partner universities are in UK, USA, Canada, Ireland and Dubai.</p>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <div className="foot-news-last mt-4">
                    <div className="inline_btn">
                        <Link to="https://portal.sojilearn.com/register" className="btn theme-bg text-white">Get Started</Link>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
  )
}
