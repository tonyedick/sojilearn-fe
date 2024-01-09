import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/scroll.css';
import uk from "../assets/img/uk_ico.webp";
import canada from "../assets/img/canada_ico.webp";
import usa from "../assets/img/usa_ico.webp";

const CustomScroll = () => {
  return (
    <section className="gray">
        <div className="container">
            <div className="row justify-content-left">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="sec-heading center">
                        <h2>Explore More Destinations</h2>
                    </div>
                    <div className="grid">
                        <div className="grid__item">
                            <div className="card">
                                <img className="card__img" src={uk} alt="Snowy Mountains" />
                                <div className="card__content">
                                    <h6 className="card__header">Ireland</h6>
                                    <Link to="/study-in-ireland" className="h3 theme-cl" style={{fontWeight: 'bold'}}>Explore <span>&rarr;</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid__item">
                            <div className="card">
                                <img className="card__img" src={canada} alt="Desert" />
                                <div className="card__content">
                                    <h6 className="card__header">Canada</h6>
                                    <Link to="/study-in-canada" className="h3 theme-cl" style={{fontWeight: 'bold'}}>Explore <span>&rarr;</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid__item">
                            <div className="card">
                                <img className="card__img" src={usa} alt="Canyons" />
                                <div className="card__content">
                                    <h6 className="card__header">USA</h6>
                                    <Link to="/study-in-usa" className="h3 theme-cl" style={{fontWeight: 'bold'}}>Explore <span>&rarr;</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    </section>
    );
};

export default CustomScroll;
