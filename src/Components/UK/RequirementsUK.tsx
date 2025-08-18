import React from 'react';
import copy from "../../assets/img/copy.webp";
import gmat from "../../assets/img/gmat.webp";
import lor from "../../assets/img/lor.webp";
import cv from "../../assets/img/cv.webp";
import toefl from "../../assets/img/toefl.webp";
import portfolio from "../../assets/img/portfolio.webp";
import statement from "../../assets/img/statement.webp";

export default function RequirementsUK() {
  return (
    <section>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-12 col-md-8">
                <div className="sec-heading center">
                    <h2>Admission Requirements for <span className="theme-cl">UK</span></h2>
                    <p className="h6">Here are the major requirements to study in UK which you need to ensure while applying to a UK university:</p>
                </div>
            </div>
        </div>
        <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="lmp_caption">
                    <div className="mb-4 mt-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                            <div className="list_crs_img">
                                <img src={copy} className="img-fluid" alt="UK admission requirements" />
                            </div>
                            <h5 className="mb-0 ml-3">Copy of a valid passport</h5>
                        </div>
                    </div>
                    <div className="mb-4 mt-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                            <div className="list_crs_img">
                                <img src={gmat} className="img-fluid" alt="UK admission requirements" />
                            </div>
                            <h5 className="mb-0 ml-3">GMAT/GRE scores for PG programs (optional)</h5>
                        </div>
                    </div>
                    <div className="mb-4 mt-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                            <div className="list_crs_img">
                                <img src={lor} className="img-fluid" alt="UK admission requirements" />
                            </div>
                            <h5 className="mb-0 ml-3">Letter of Recommendations (LORs)</h5>
                        </div>
                    </div>
                    <div className="mb-4 mt-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                            <div className="list_crs_img">
                                <img src={cv} className="img-fluid" alt="UK admission requirements" />
                            </div>
                            <h5 className="mb-0 ml-3">A CV (compulsory)</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="lmp_caption">
                    <div className="mb-4 mt-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                            <div className="list_crs_img">
                                <img src={toefl} className="img-fluid" alt="UK admission requirements" />
                            </div>
                            <h5 className="mb-0 ml-3">TOEFL/IELTS/English Test (optional)</h5>
                        </div>
                    </div>
                    <div className="mb-4 mt-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                            <div className="list_crs_img">
                                <img src={gmat} className="img-fluid" alt="UK admission requirements" />
                            </div>
                            <h5 className="mb-0 ml-3">Academic Transcripts (student copy to start the process)</h5>
                        </div>
                    </div>
                    <div className="mb-4 mt-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                            <div className="list_crs_img">
                                <img src={portfolio} className="img-fluid" alt="UK admission requirements" />
                            </div>
                            <h5 className="mb-0 ml-3">Portfolio (for specific courses)</h5>
                        </div>
                    </div>
                    <div className="mb-4 mt-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                            <div className="list_crs_img">
                                <img src={statement} className="img-fluid" alt="UK admission requirements" />
                            </div>
                            <h5 className="mb-0 ml-3">Statement of Purpose (SOP)</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
