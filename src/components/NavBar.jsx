import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Tawakkal Rice Mill home">
          <div className="logo-text">
            <span className="brand">Tawakkal Rice Mill</span>
            <span className="tagline">Premium Quality • Finest Milled</span>
          </div>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/branches" className="nav-link">Branches</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;