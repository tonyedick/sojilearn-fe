import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [activeLink, setActiveLink] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  // Empty dependency array ensures that this effect runs once on mount

  useEffect(() => {
    setActiveLink(location.pathname);
    setMobileNavOpen(false);
  }, [location.pathname]);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const handleNavLinkClick = () => {
    if (isMobileNavOpen) {
      setMobileNavOpen(false);
    }
  };

  return (
    <div className={`header header-light dark-text ${isMobileNavOpen ? 'mobile-nav-open' : ''}`}>
      <div className="container">
        <nav id="navigation" className={`navigation navigation-landscape ${activeLink === '/' ? 'active' : ''}`}>
          <div className="nav-header">
            <Link className="nav-brand" to="/">
              <img src="assets/img/logo-dark.png" className="logo" alt="" />
            </Link>
            {isMobile && (
              <div className="nav-toggle" onClick={toggleMobileNav}></div>
            )}
            <div className={`mobile_nav ${isMobileNavOpen ? 'show' : ''}`}>
              <ul>
                <li>
                  <Link to="http://127.0.0.1:8000"  target="_blank" data-toggle="modal" data-target="#login" className="crs_yuo12">
                    <span className="embos_45"><i className="fas fa-sign-in-alt"></i></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-menus-wrapper">
            <ul className="nav-menu">
                <li className={activeLink === '/' ? 'active' : ''}>
                    <Link to="/" onClick={handleNavLinkClick}>Home</Link>
                </li>
                <li className={activeLink === '/search' ? 'active' : ''}>
                    <Link to="/search" onClick={handleNavLinkClick}>Find Course</Link>
                </li>
                <li className={activeLink === '/about' ? 'active' : ''}>
                    <Link to="/about" onClick={handleNavLinkClick}>About Us</Link>
                </li>
                <li className={activeLink === '/contact' ? 'active' : ''}>
                    <Link to="/contact" onClick={handleNavLinkClick}>Contact Us</Link>
                </li>
                <li className={activeLink === '/blog' ? 'active' : ''}>
                    <Link to="/blog" onClick={handleNavLinkClick}>Blog</Link>
                </li>
            </ul>
            <ul className="nav-menu nav-menu-social align-to-right">
              <li>
                <Link to="http://127.0.0.1:8000/"  target="_blank" className="alio_green">
                  <i className="fas fa-sign-in-alt mr-1"></i>
                  <span className="dn-lg">Sign In</span>
                </Link>
              </li>
              <li className="add-listing theme-bg">
                <Link to="http://127.0.0.1:8000/register"  target="_blank" className="text-white">Get Started</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
