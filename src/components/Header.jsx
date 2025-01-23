import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from '../assets/logo.png'; // Replace with the actual path to your logo
import loginIcon from '../assets/login_icon.png'; // Replace with the actual path to your login icon

function Header() {
  return (
    <>
      <header>
        <div className="left-header">
          {/* Update the logo path to point to the static asset */}
          <img src={logo} alt="MOON LOOKS Logo" className="logo" />
          <h1>MOON LOOKS</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/designs">Designs</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/designs/villas-floor-plans">Villas Floor Plans</Link>
                </li>
                <li>
                  <Link to="/designs/flats-floor-plans">Flats Floor Plans</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="sub-nav-bar">
        <nav className="sub-nav">
          <ul>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            <li>
              <Link to="/login">
                {/* Update the login icon path to point to the static asset */}
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
