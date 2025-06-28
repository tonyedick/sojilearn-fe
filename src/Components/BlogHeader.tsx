import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/img/logo-dark.png";
// import './nav.css';

export default function BlogHeader() {
  const [activeLink, setActiveLink] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navMenusWrapperStyle = {
    transitionProperty: isNavOpen ? 'left' : 'none',
  };
  

  return (
      <div className="header header-light dark-text">
          <div className="container">
              <nav id="navigation" className={`navigation ${isMobile ? 'navigation-portrait' : 'navigation-landscape'}`}>
                  <div className="nav-header">
                      <Link className="nav-brand" to="/">
                          <img src={logo} className="logo" alt="" />
                      </Link>
                      <div className="nav-toggle" onClick={toggleNav}></div>
                      {/* <div className="mobile_nav">
                          <ul>
                              <li>
                                  <Link to="https://portal.sojilearn.com" data-toggle="modal" data-target="#login" className="crs_yuo12">
                                      <span className="embos_45"><i className="fas fa-sign-in-alt"></i></span>
                                  </Link>
                              </li>
                          </ul>
                      </div> */}
                  </div>
                  <div className={`nav-menus-wrapper ${isNavOpen ? 'nav-menus-wrapper-open' : ''}`} style={navMenusWrapperStyle}>
                      <ul className="nav-menu">
                          <li className={activeLink === '/' ? 'active' : ''}><Link to="/">Study Abroad</Link></li>
                          <li className={activeLink === '/' ? 'active' : ''}><Link to="/">Scholarships</Link></li>
                          <li className={activeLink === '/' ? 'active' : ''}><Link to="/">Success Stories</Link></li>
                          <li className={activeLink === '/' ? 'active' : ''}><Link to="/">Visa and Immigration</Link></li>
                          <li className={activeLink === '/' ? 'active' : ''}><Link to="/">Scholarships and Grants</Link></li>
                          <li className={activeLink === '/' ? 'active' : ''}><Link to="/">SOP</Link></li>
                      </ul>

                      <ul className="nav-menu nav-menu-social align-to-right">
                          {/* <li>
                              <Link to="https://portal.sojilearn.com" className="alio_green" >
                                  <i className="fas fa-sign-in-alt mr-1"></i><span className="dn-lg">Sign In</span>
                              </Link>
                          </li> */}

                          <li className="add-listing theme-bg">
                              <button
                                className="btn theme-bg text-white btn-login btn btn-theme btn-inverse"
                                onClick={() => {
                                    const section = document.getElementById('newsletter');
                                    if (section) {
                                        section.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                Subscribe <i className="fas fa-sign-in-alt pre"></i>
                            </button>
                          </li>

                      </ul>
                  </div>
                  <div className={`nav-overlay-panel ${isNavOpen ? 'nav-overlay-panel-visible' : ''}`} />
              </nav>
          </div>
      </div>

  );
}
