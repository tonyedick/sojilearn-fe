import React from 'react'
import { Link } from 'react-router-dom'

export default function StudyInUkCom() {
  return (
    <div>
        <section className="white">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-8">
                    <div className="sec-heading center">
                        <h2>Study in the <span className="theme-cl">UK</span></h2>
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-between mt-5">
                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                    <div className="side_block extream_img">
                        <img src="assets/img/uk.jpg" className="img-fluid rounded" alt="" />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-3">
                    <div className="lmp_caption">
                        <h2 className="mb-3">Why Study in United Kingdom?</h2>
                        <p>The United Kingdom is home to the world's most esteemed universities and is among the popular destinations for studying abroad. Ranked as the best education systems in the world, the British Education System provides a plethora of courses in various subjects including Business, Engineering, Medicine, Arts, and Design delivered through exceptional teaching styles. </p>
                        <p>The curriculum is designed in a flexible way which helps students customize their courses depending on their unique interests.</p>
                    </div>

                    <div className="inline_btn">
                        <Link to="/study-in-uk" className="btn theme-bg text-white">Read More</Link>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </div>
  )
}
