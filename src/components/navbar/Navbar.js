import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          YouTube Trending
        </Link>
        <div className="navbar-menu">
          <Link to="/about" className="navbar-item">
            About
          </Link>
          <Link to="/contact" className="navbar-item">
            Contact
          </Link>
          <Link to="/privacy" className="navbar-item">
            Privacy
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
