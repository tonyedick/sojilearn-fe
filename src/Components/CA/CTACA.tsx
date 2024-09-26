import React from 'react';
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <div>
        <div className="clearfix"></div>

        <section className="theme-bg call_action_wrap-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="call_action_wrap">
                            <div className="call_action_wrap-head">
                                <h3>Make Your Dream To Study in The Canada</h3>
                                <h3 style={{textShadow: "8px 8px 8px gray"}}>A Reality With Our Experts!</h3>
                            </div>
                            <Link to="/contact" className="btn btn-call_action_wrap">Contact Us Today</Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
