import React from 'react';
import '../css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Contact Information */}
          <div className="footer-section">
            <h3 className="footer-title">CONTACT</h3>
            <div className="footer-divider"></div>
            <div className="footer-info">
              <a href="tel:941-223-6254" className="footer-link">
                <span className="footer-label">Phone:</span>
                <span className="footer-value">941-223-6254</span>
              </a>
              <a href="mailto:info@hapainting.com" className="footer-link">
                <span className="footer-label">Email:</span>
                <span className="footer-value">info@hapainting.com</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="footer-section">
            <h3 className="footer-title">HOURS</h3>
            <div className="footer-divider"></div>
            <div className="footer-info">
              <div className="footer-text">
                <span className="footer-label">Monday - Friday</span>
                <span className="footer-value">12 PM - 6 PM</span>
              </div>
              <div className="footer-text">
                <span className="footer-label">Weekend</span>
                <span className="footer-value">By Appointment</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="footer-section">
            <h3 className="footer-title">SERVICE AREAS</h3>
            <div className="footer-divider"></div>
            <div className="footer-info">
              <div className="footer-locations">
                <span className="location-item">Sarasota</span>
                <span className="location-item">Venice</span>
                <span className="location-item">North Port</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} H&A Painting. All rights reserved. | Licensed | Insured | LLC
          </p>
        </div>
      </div>
    </footer>
  );
}