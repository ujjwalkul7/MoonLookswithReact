import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import loginIcon from '../assets/login_icon.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  return (
    <>
      <header>
        <div className="left-header">
          <img src={logo} alt="MOON LOOKS Logo" className="logo" />
          <h1>MOON LOOKS</h1>
        </div>

        {/* Hamburger (only on mobile) */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={menuOpen ? 'active' : ''}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li>
              <Link to="/design" onClick={() => setMenuOpen(false)}>Design</Link>
              <ul className="dropdown">
                <li><Link to="villas-floor-plans" onClick={() => setMenuOpen(false)}>Villas Floor Plans</Link></li>
                <li><Link to="flats-floor-plans" onClick={() => setMenuOpen(false)}>Flats Floor Plans</Link></li>
              </ul>
            </li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </nav>
      </header>

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
    </>
  );
}

export default Header;
