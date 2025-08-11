import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import loginIcon from '../assets/login_icon.png';

function Header() {
  // Check login status from localStorage (adjust 'token' key to your actual key)
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  return (
    <>
      <header>
        <div className="left-header">
          <img src={logo} alt="MOON LOOKS Logo" className="logo" />
          <h1>MOON LOOKS</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/design">Design</Link>
              <ul className="dropdown">
                <li><Link to="villas-floor-plans">Villas Floor Plans</Link></li>
                <li><Link to="flats-floor-plans">Flats Floor Plans</Link></li>
              </ul>
            </li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <div className="sub-nav-bar">
        <nav className="sub-nav">
          <ul>
            <li><Link to="/team">Our Team</Link></li>

            {/* Show Dashboard only if logged in */}
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
