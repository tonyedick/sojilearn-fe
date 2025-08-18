import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import logo from "../assets/img/logo-dark.png";
// import './nav.css';

const categories = [
  { name: 'All Posts', slug: 'all' },
  { name: 'Study Abroad', slug: 'Study Abroad' },
  { name: 'Scholarships', slug: 'Scholarships' },
  { name: 'Success Stories', slug: 'Success Stories' },
  { name: 'Visa and Immigration', slug: 'Visa and Immigration' },
  { name: 'Scholarships and Grants', slug: 'Scholarships and Grants' },
  { name: 'SOP', slug: 'SOP' }
];

export default function ConstructionHeader() {
  const [activeLink, setActiveLink] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const currentCategory = searchParams.get('category') || 'all';

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
                          <img src={logo} className="logo" alt="Sojilearn main website logo" loading="lazy"/>
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
                  
                    </ul>

                      <ul className="nav-menu nav-menu-social align-to-right">
                 

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
