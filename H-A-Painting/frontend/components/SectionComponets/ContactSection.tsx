import '../../css/ContactSection.css';
import { Link } from 'react-router-dom';

export default function ContactSection() {
  return (
    <section className="home-contact-section">
      <div className="home-contact-wrapper">
        <div className="home-contact-header">
          <h2 className="home-contact-heading">READY TO GET STARTED?</h2>
          <p className="home-contact-subtext">
            Let's discuss your project. We provide free quotes and professional consultations.
          </p>
        </div>
        
        <div className="home-contact-info-grid">
          <div className="home-contact-card">
            <div className="home-contact-icon">📞</div>
            <h3 className="home-contact-label">CALL US</h3>
            <a href="tel:941-223-6254" className="home-contact-link">941-223-6254</a>
          </div>

          <div className="home-contact-card">
            <div className="home-contact-icon">✉️</div>
            <h3 className="home-contact-label">EMAIL US</h3>
            <a href="mailto:hapaintservicesllc@gmail.com" className="home-contact-link">hapaintservicesllc@gmail.com</a>
          </div>

          <div className="home-contact-card">
            <div className="home-contact-icon">📍</div>
            <h3 className="home-contact-label">SERVICE AREA</h3>
            <p className="home-contact-text">Sarasota, Venice, North Port</p>
          </div>
        </div>
        
        <div className="home-contact-cta">
          <Link to="/contact" className="home-contact-quote-button">REQUEST A QUOTE</Link>
        </div>
      </div>
    </section>
  );
}