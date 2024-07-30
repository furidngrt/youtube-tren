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
<<<<<<< HEAD
=======
        <div className="navbar-menu">
          {/* Hapus tautan About, Contact, dan Privacy */}
        </div>
>>>>>>> origin/master
      </div>
    </nav>
  );
};

export default Navbar;
