import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import loginIcon from '../assets/login_icon.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header>
        <div className="left-header">
          <img src={logo} alt="MOON LOOKS Logo" className="logo" />
          <h1>MOON LOOKS</h1>
        </div>

        {/* Hamburger (mobile only via CSS) */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={menuOpen ? 'active' : ''}>
          <ul>
            {/* Main nav links */}
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li>
              <Link to="/design" onClick={() => setMenuOpen(false)}>Design</Link>
              <ul className="dropdown">
                <li><Link to="/villas-floor-plans" onClick={() => setMenuOpen(false)}>Villas Floor Plans</Link></li>
                <li><Link to="/flats-floor-plans" onClick={() => setMenuOpen(false)}>Flats Floor Plans</Link></li>
              </ul>
            </li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>

            {/* Extra links ONLY in mobile hamburger */}
            {isMobile && (
              <>
                <li><Link to="/team" onClick={() => setMenuOpen(false)}>Our Team</Link></li>
                {isLoggedIn && (
                  <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
                )}
                <li>
                  <Link to="/login" onClick={() => setMenuOpen(false)}>
                    <img src={loginIcon} alt="Login Icon" style={{ width: '20px', height: '20px' }} />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>

      {/* Sub-nav bar ONLY in desktop */}
      {!isMobile && (
        <div className="sub-nav-bar">
          <nav className="sub-nav">
            <ul>
              <li><Link to="/team">Our Team</Link></li>
              {isLoggedIn && (
                <li><Link to="/dashboard">Dashboard</Link></li>
              )}
              <li>
                <Link to="/login">
                  <img src={loginIcon} alt="Login Icon" style={{ width: '20px', height: '20px' }} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
