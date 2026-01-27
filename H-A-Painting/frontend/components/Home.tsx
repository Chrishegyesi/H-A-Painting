import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

export default function Home() {
  const heroBg = '/chrispic.jpeg';

  return (
    <div className="home">
      <section
        className="hero home-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero__overlay" />
        <div className="hero__content container">
          <h1 className="hero__title">H &amp; A Painting</h1>
          <p className="hero__subtitle">
            Premium painting services for Sarasota, Venice, and North Port.
          </p>
          <div className="home-hero__actions">
            <Link to="/contact" className="btn btn--primary">
              Get a Free Quote
            </Link>
            <Link to="/gallery" className="btn btn--secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2>Why Choose H&amp;A</h2>
            <p>
              Licensed and insured professionals delivering exceptional results
              with meticulous attention to detail.
            </p>
          </div>

          <div className="grid grid--3">
            <div className="card">
              <div className="card__body">
                <h3>Professional Excellence</h3>
                <p>
                  Licensed and insured professionals delivering exceptional
                  results with meticulous attention to detail.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card__body">
                <h3>Expert Craftsmanship</h3>
                <p>
                  Decades of combined experience in residential and commercial
                  painting projects.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card__body">
                <h3>Guaranteed Satisfaction</h3>
                <p>
                  Trusted throughout Sarasota, Venice, and North Port for
                  quality that exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2>Our Services</h2>
            <p>Explore the range of painting services we offer to meet your needs.</p>
          </div>

          <div className="grid grid--3">
            <div className="card">
              <div className="card__body">
                <h3>Interior Painting</h3>
                <p>Clean lines, smooth finishes, and careful protection of your home.</p>
              </div>
            </div>

            <div className="card">
              <div className="card__body">
                <h3>Exterior Painting</h3>
                <p>Durable coatings and thorough prep built for Florida conditions.</p>
              </div>
            </div>

            <div className="card">
              <div className="card__body">
                <h3>Prep &amp; Repairs</h3>
                <p>Sanding, patching, caulking, and priming for a long-lasting finish.</p>
              </div>
            </div>

            <div className="card">
              <div className="card__body">
                <h3>Cabinets</h3>
                <p>Upgrade kitchens and bathrooms with a professional cabinet finish.</p>
              </div>
            </div>

            <div className="card">
              <div className="card__body">
                <h3>Commercial</h3>
                <p>Reliable scheduling and clean workspaces for businesses and properties.</p>
              </div>
            </div>

            <div className="card">
              <div className="card__body">
                <h3>Pressure Washing</h3>
                <p>Surface cleaning to improve adhesion and refresh curb appeal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2>Recent Reviews</h2>
            <p>Read what our satisfied customers have to say about our work.</p>
          </div>

          <div className="grid grid--3">
            <div className="card">
              <div className="card__body">
                <h3>Great Communication</h3>
                <p>
                  “On time, clean, and professional. The finished paint looks
                  incredible.”
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card__body">
                <h3>Quality Work</h3>
                <p>
                  “Excellent prep and attention to detail. Would absolutely
                  hire again.”
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card__body">
                <h3>Highly Recommend</h3>
                <p>
                  “Friendly team and the results exceeded expectations. Great
                  experience.”
                </p>
              </div>
            </div>
          </div>

          <div className="home-reviews__cta">
            <Link to="/reviews" className="btn btn--secondary">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}