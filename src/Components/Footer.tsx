import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="light-footer skin-light-footer style-2">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
        
                        <div className="col-lg-5 col-md-5">
                            <div className="footer_widget">
                                <img src="assets/img/logo-dark.png" className="img-footer small mb-2" alt="" />
                                <p className="mt-2">Sojilearn helps students figure what they should do and where they should be at - wherever that be in the world - to realise their full potential.</p>
                                <p><strong>Address:</strong> 21 Agbaje Akio Street, Okeafo GRA, Iwo, Osun State</p>
                                <p><strong>Phone:</strong> +234 813 780 6643</p>
                                <p><strong>Email:</strong> sojilearn@gmail.com</p>
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
                                            <li><Link to="/study-in-uk">Study in UK<span className="new">New</span></Link></li>
                                            <li><Link to="/study-in-canada">Study in Canada</Link></li>
                                            <li><Link to="/study-in-usa">Study in USA<span className="new">New</span></Link></li>
                                            <li><Link to="/">Study in Ireland</Link></li>
                                            <li><Link to="/">Study in Dubai</Link></li>
                                        </ul>
                                    </div>
                                </div>
        
                                <div className="col-lg-4 col-md-4">
                                    <div className="footer_widget">
                                        <h4 className="widget_title">Company</h4>
                                        <ul className="footer-menu">
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/">Blog<span className="new">Coming Soon</span></Link></li>
                                            <li><Link to="http://127.0.0.1:8000/register" target="_blank">Join Us</Link></li>
                                            <li><Link to="http://127.0.0.1:8000" target="_blank">Login</Link></li>
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
                            <p className="mb-0">© 2024 Sojilearn. All Rights Reserved<Link to="https://sojilearn.com"> Sojilearn</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}