import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar() {
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
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}