import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/scroll.css';
import uk from "../assets/img/law.png";
import canada from "../assets/img/canada.png";
import usa from "../assets/img/usa.png";
import ireland from "../assets/img/ireland.png";
import dubai from "../assets/img/dubai.png";

const testimonials = [
    {
        "image": uk,
        "destination": "UK",
        "link": "/study-in-uk"
    },
    {
        "image": canada,
        "destination": "Canada",
        "link": "/study-in-canada"
    },
    {
        "image": usa,
        "destination": "USA",
        "link": "/study-in-usa"
    },
    {
        "image": ireland,
        "destination": "Ireland",
        "link": "/study-in-ireland"
    },
    {
        "image": dubai,
        "destination": "Dubai",
        "link": "/study-in-dubai"
    }
  ]

const CustomScroll = () => {
  return (
    <section className="gray">
    <div className="container">
        <div className="row justify-content-left">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="sec-heading center">
                    <h2>Explore More Destinations</h2>
                </div>
                <Container>
                    <ul className="cards">
                    {testimonials.map(({ image, destination, link }) => (
                        <li key={destination} className="card">
                            <div>
                                <img src={image} alt="Testimonial" className="text-center" style={{position: "relative", top: "14px", borderRadius: '9px'}}/>
                                <div className="card-content text-center">
                                    <h4>{destination}</h4>
                                    <Link to={link}>Explore Now {">"}</Link>
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>
                </Container>
            </div>
        </div>
    </div>
</section>
    
    );
};

export default CustomScroll;
