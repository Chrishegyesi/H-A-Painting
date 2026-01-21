import React from 'react';
import '../css/Home.css';
import ContactSection from './SectionComponets/ContactSection';
import GallerySection from './SectionComponets/GallerySection';
import ServiceSection from './SectionComponets/ServiceSection';
import ReviewSection from './SectionComponets/ReviewSection';
import AboutSection from './SectionComponets/AboutSection';
export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">H & A PAINTING</h1>
          <div className="hero-divider"></div>
          <p className="hero-subtitle">Premium Painting Services</p>
          <p className="hero-tagline">LICENSED | INSURED | LLC</p>
          <div className="hero-cta">
            <a href="tel:941-223-6254" className="cta-button primary">941-223-6254</a>
            <a href="/contact" className="cta-button secondary">Request Quote</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-number">01</div>
            <h3 className="feature-title">Professional Excellence</h3>
            <p className="feature-description">Licensed and insured professionals delivering exceptional results with meticulous attention to detail.</p>
          </div>
          <div className="feature-card">
            <div className="feature-number">02</div>
            <h3 className="feature-title">Expert Craftsmanship</h3>
            <p className="feature-description">Decades of combined experience in residential and commercial painting projects.</p>
          </div>
          <div className="feature-card">
            <div className="feature-number">03</div>
            <h3 className="feature-title">Guaranteed Satisfaction</h3>
            <p className="feature-description">Trusted throughout Sarasota, Venice, and North Port for quality that exceeds expectations.</p>
          </div>
        </div>
      </section>
    <ServiceSection />
      <ContactSection />
      <GallerySection />
      <ReviewSection />
      <AboutSection />
    </div>
  );
}