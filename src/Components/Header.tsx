import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/img/logo-dark.png";
// import './nav.css';

export default function Header() {
  const [activeLink, setActiveLink] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsNavOpen(false); // Close nav when switching to desktop
      }
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
                          <li className={activeLink === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
                          <li className={activeLink === '/about' ? 'active' : ''}><Link to="/about">About</Link></li>
                          <li className={activeLink === '/study-in-uk' ? 'active' : ''}><Link to="/study-in-uk">Study in UK</Link></li>
                          <li className={activeLink === '/study-in-canada' ? 'active' : ''}><Link to="/study-in-canada">Study in Canada</Link></li>
                          <li className={activeLink === '/study-in-usa' ? 'active' : ''}><Link to="/study-in-usa">Study in USA</Link></li>
                          <li className={activeLink === '/study-in-germany' ? 'active' : ''}><Link to="/study-in-germany">Study in Germany</Link></li>
                          <li className={activeLink === '/study-in-malta' ? 'active' : ''}><Link to="/study-in-malta">Study in Malta</Link></li>
                          <li className={activeLink === '/contact' ? 'active' : ''}><Link to="/contact">Contact Us</Link></li>
                      </ul>

                      <ul className="nav-menu nav-menu-social align-to-right">
                          {/* <li>
                              <Link to="https://portal.sojilearn.com" className="alio_green" >
                                  <i className="fas fa-sign-in-alt mr-1"></i><span className="dn-lg">Sign In</span>
                              </Link>
                          </li> */}

                            <li className="add-listing theme-bg">
                              <Link to="/blog" target="_blank" className="text-white">Visit our Blog</Link>
                            </li>
                        </ul>
                    </div>
                  <div
                    className={`nav-overlay-panel ${isNavOpen ? 'nav-overlay-panel-visible' : ''}`}
                    onClick={() => setIsNavOpen(false)}
                  >
                    {isMobile && isNavOpen && (
                      <button
                        className="nav-close-btn"
                        aria-label="Close navigation"
                        onClick={() => setIsNavOpen(false)}
                        style={{
                          position: 'absolute',
                          top: 20,
                          right: 20,
                          background: 'none',
                          border: 'none',
                          fontSize: 32,
                          color: '#333',
                          cursor: 'pointer',
                          zIndex: 1001,
                        }}
                      >
                        &times;
                      </button>
                    )}
                  </div>
                  <div className={`nav-overlay-panel ${isNavOpen ? 'nav-overlay-panel-visible' : ''}`} />
              </nav>
          </div>
      </div>

  );
}
