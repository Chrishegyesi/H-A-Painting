import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer__inner container">
        <div className="footer__grid">
          <div className="footer__col">
            <div className="footer__brand">
              <img
                src="/H&APaintinglogo.png"
                alt="H&A Painting"
                className="footer__logo"
              />
              <div className="footer__brandText">
                <h3 className="footer__title">H&A Painting</h3>
                <p className="footer__muted">Licensed | Insured | LLC</p>
              </div>
            </div>
            <p className="footer__about">
              Professional painting services with pride, craftsmanship, and consistency.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Services</h4>
            <nav aria-label="Services quick links">
              <ul className="footer__links" role="list">
                <li>
                  <Link to="/services" className="footer__link">Services</Link>
                </li>
                <li>
                  <Link to="/gallery" className="footer__link">Gallery</Link>
                </li>
                <li>
                  <Link to="/reviews" className="footer__link">Reviews</Link>
                </li>
                <li>
                  <Link to="/contact" className="footer__link">Request Quote</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <div className="footer__stack">
              <a className="footer__link" href="tel:941-223-6254">941-223-6254</a>
              <div className="footer__meta">
                <div className="footer__metaLabel">Service Areas</div>
                <div className="footer__metaValue">Sarasota · Venice · North Port</div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} H&A Painting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}