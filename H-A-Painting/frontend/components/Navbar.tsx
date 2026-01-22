import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img 
            src="/H&APaintinglogo.png" 
            alt="H&A Painting Logo - Licensed, Insured, LLC" 
            className="logo-image"
          />
        </Link>
      </div>

      <button
        type="button"
        className="navbar-hamburger"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        aria-controls="navbar-links"
        onClick={() => setIsMenuOpen((v) => !v)}
      >
        <span className="navbar-hamburger-line" />
        <span className="navbar-hamburger-line" />
        <span className="navbar-hamburger-line" />
      </button>

      <div
        id="navbar-links"
        className={`navbar-links ${isMenuOpen ? 'is-open' : ''}`}
      >
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
        <Link to="/reviews" className="nav-link">Reviews</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </nav>
  );
}