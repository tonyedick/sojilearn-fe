import { Link } from 'react-router-dom'
import logo from "../assets/img/logo-dark.png";

export default function Footer() {
    return (
        <footer className="light-footer skin-light-footer style-2">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
        
                        <div className="col-lg-5 col-md-5">
                            <div className="footer_widget">
                                <img src={logo} className="img-footer small mb-2" alt="" />
                                <p className="mt-2">Sojilearn helps students figure what they should do and where they should be at - wherever that be in the world - to realise their full potential.</p>
                                <p><strong>Head Office:</strong> 9, Miller Close, off Cecilia Road, Rumuolumeni, <br/>Port Harcourt, Rivers State.</p>
                                <p><strong>Office:</strong> 21 Agbaje Akio Street, Okeafo GRA, Iwo, Osun State.</p>
                                <p><strong>Phone:</strong> +234 813 780 6643</p>
                                <p><strong>Email:</strong> sojilearn@gmail.com, info@sojilearn.com</p>
                            </div>
                        </div>
        
                        <div className="col-lg-6 col-md-7 ml-auto">
                            <div className="row">
        
                                <div className="col-lg-4 col-md-4">
                                    <div className="footer_widget">
                                        <h4 className="widget_title">Sojilearn</h4>
                                        <ul className="footer-menu">
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About US</Link></li>
                                            <li><Link to="/contact">Contact Page</Link></li>
                                        </ul>
                                    </div>
                                </div>
        
                                <div className="col-lg-4 col-md-4">
                                    <div className="footer_widget">
                                        <h4 className="widget_title">Destinations</h4>
                                        <ul className="footer-menu">
                                            <li><Link to="/study-in-uk">Study in UK</Link></li>
                                            <li><Link to="/study-in-canada">Study in Canada</Link></li>
                                            <li><Link to="/study-in-usa">Study in USA<span className="new">New</span></Link></li>
                                            <li><Link to="/study-in-germany">Study in Germany</Link></li>
                                            <li><Link to="/study-in-malta">Study in Malta<span className="new">New</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
        
                                <div className="col-lg-4 col-md-4">
                                    <div className="footer_widget">
                                        <h4 className="widget_title">Company</h4>
                                        <ul className="footer-menu">
                                            <li><Link to="/blog" target="_blank">Blog</Link></li>
                                            <li className="font-weight-bold"><Link to="https://forms.gle/Lu3kEE3SsxdkVbrU7" target="_blank">APPLY NOW</Link></li>
                                        </ul>
                                    </div>
                                </div>
        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12 text-center">
                            <p className="mb-0">© 2022 - 2025 Sojilearn. All Rights Reserved<Link to="https://sojilearn.com"> Sojilearn Optimum Solutions Ltd</Link>.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-center">
                             <ul className="nav-menu">
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                                <li><Link to="/terms">Terms of Use</Link></li>
                                <li><Link to="/data">Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-12 sol-sm-12 text-center">
                            <ul className="social-links">
                                <li><Link to="https://facebook.com/sojilearn"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="https://x.com/sojilearn"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link to="https://instagram.com/sojilearn"><i className="fab fa-instagram"></i></Link></li>
                                <li><Link to="https://linkedin.com/sojilearn"><i className="fab fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
