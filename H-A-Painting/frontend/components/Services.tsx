import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Services.css';

export default function Services() {
  const heroBg = '/H&APaintinglogo.png';

  const services = [
    {
      title: 'Interior Painting',
      description: 'Walls, ceilings, trim, and doors with clean lines and careful protection.',
    },
    {
      title: 'Exterior Painting',
      description: 'Long-lasting coatings with thorough prep for Florida weather.',
    },
    {
      title: 'Surface Prep & Repairs',
      description: 'Patch, sand, caulk, prime—prep done right for a finish that lasts.',
    },
    {
      title: 'Cabinet Refinishing',
      description: 'A durable, smooth cabinet finish that transforms kitchens and baths.',
    },
    {
      title: 'Pressure Washing',
      description: 'Remove dirt and buildup to improve adhesion and curb appeal.',
    },
    {
      title: 'Commercial Painting',
      description: 'Reliable scheduling and a clean jobsite for businesses and properties.',
    },
    {
      title: 'Trim & Detail Work',
      description: 'Crisp edges and careful finishes on baseboards, crown, and accents.',
    },
    {
      title: 'Touch-Ups & Refresh',
      description: 'Small projects and refreshes to keep your space looking sharp.',
    },
  ];

  const process = [
    {
      title: '1) Walkthrough & Quote',
      description: 'We review the scope, prep needs, and timeline—then provide a clear quote.',
    },
    {
      title: '2) Prep & Protect',
      description: 'We protect surfaces, prep properly, and set up for a clean jobsite.',
    },
    {
      title: '3) Paint & Final Review',
      description: 'We deliver a smooth finish and do a final walkthrough before we leave.',
    },
  ];

  return (
    <div className="services">
      <section className="hero services-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero__overlay" />
        <div className="hero__content container">
          <h1 className="hero__title">Our Services</h1>
          <p className="hero__subtitle">
            Explore the range of painting services we offer to meet your needs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2>What We Do</h2>
            <p>Residential and commercial painting with a focus on prep, quality, and consistency.</p>
          </div>

          <div className="grid grid--3">
            {services.map((s) => (
              <div key={s.title} className="card">
                <div className="card__body">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2>Our Process</h2>
            <p>Simple, professional, and focused on results.</p>
          </div>

          <div className="grid grid--3">
            {process.map((step) => (
              <div key={step.title} className="card">
                <div className="card__body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-cta">
        <div className="container">
          <div className="services-cta__inner">
            <div>
              <h2 className="services-cta__title">Want a Free Quote?</h2>
              <p className="services-cta__text">Tell us about your project and we’ll follow up within 24 hours.</p>
            </div>
            <Link to="/contact" className="btn btn--primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}