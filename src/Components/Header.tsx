import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
      <div className="header header-light dark-text">
          <div className="container">
              <nav id="navigation" className="navigation navigation-landscape">
                  <div className="nav-header">
                      <Link className="nav-brand" to="#">
                          <img src="assets/img/logo-dark.png" className="logo" alt="" />
                      </Link>
                      <div className="nav-toggle"></div>
                      <div className="mobile_nav">
                          <ul>
                              <li>
                                  <Link to="http://127.0.0.1:8000" data-toggle="modal" data-target="#login" className="crs_yuo12">
                                      <span className="embos_45"><i className="fas fa-sign-in-alt"></i></span>
                                  </Link>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="nav-menus-wrapper">
                      <ul className="nav-menu">
                          <li className={activeLink === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
                          <li className={activeLink === '/about' ? 'active' : ''}><Link to="/about">About</Link></li>
                          <li className={activeLink === '/contact' ? 'active' : ''}><Link to="/contact">Contact Us</Link></li>
                          <li className={activeLink === '/study-in-uk' ? 'active' : ''}><Link to="/study-in-uk">Study in UK</Link></li>
                          <li className={activeLink === '/study-in-canada' ? 'active' : ''}><Link to="/study-in-canada">Study in Canada</Link></li>
                          <li className={activeLink === '/study-in-usa' ? 'active' : ''}><Link to="/study-in-usa">Study in USA</Link></li>
                      </ul>

                      <ul className="nav-menu nav-menu-social align-to-right">
                          <li>
                              <Link to="http://127.0.0.1:8000" className="alio_green" >
                                  <i className="fas fa-sign-in-alt mr-1"></i><span className="dn-lg">Sign In</span>
                              </Link>
                          </li>

                          <li className="add-listing theme-bg">
                              <Link to="http://127.0.0.1:8000/register" className="text-white">Get Started</Link>
                          </li>

                      </ul>
                  </div>
              </nav>
          </div>
      </div>

  );
}
