import React from 'react';
import { Link } from 'react-router-dom';
import '../css/About.css';

export default function About() {
  const heroBg = '/H&APaintinglogo.png';

  return (
    <div className="about">
      <section className="hero about-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero__overlay" />
        <div className="hero__content container">
          <h1 className="hero__title">About H&amp;A Painting</h1>
          <p className="hero__subtitle">
            H&amp;A Painting is a small, detail-driven team built on pride, craftsmanship, and consistency.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2>Our Story</h2>
            <p>
              We’re a small team that takes pride in clean work, consistent results, and doing things the right way.
            </p>
          </div>

          <div className="grid grid--2 about-story__grid">
            <div className="card">
              <div className="card__body">
                <h3>Johnny Abul</h3>
                <p>
                  Originally from Romania, Johnny brings 28 years of hands-on experience in construction,
                  tiling, and professional painting. His commitment to quality and attention to detail
                  forms the foundation of every project we undertake.
                </p>

                <h3>Christopher Hegyesi</h3>
                <p>
                  Christopher has been painting since he was young and now, at 20 years old, continues
                  that passion with a sharp eye for detail and a commitment to doing things right. His
                  dedication to the craft ensures every finish meets the highest standards.
                </p>

                <h3>Our Approach</h3>
                <p>
                  We treat every home like it's our own—showing up on time, keeping the jobsite clean,
                  and delivering a finish you'll be proud of. Whether it's a full exterior repaint or a
                  single room refresh, we focus on quality prep, clean lines, and results that last.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card__media about-story__media">
                <img src="/chrispic.jpeg" alt="Christopher Hegyesi" />
              </div>
              <div className="card__body">
                <p className="about-story__caption">Meet the team behind H&amp;A Painting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2>Our Values</h2>
            <p>What you can expect on every job—start to finish.</p>
          </div>

          <div className="grid grid--3">
            <div className="card">
              <div className="card__body">
                <h3>PRIDE</h3>
                <p>Every project reflects our commitment to excellence</p>
              </div>
            </div>
            <div className="card">
              <div className="card__body">
                <h3>CRAFTSMANSHIP</h3>
                <p>Decades of experience in every brushstroke</p>
              </div>
            </div>
            <div className="card">
              <div className="card__body">
                <h3>CONSISTENCY</h3>
                <p>Reliable results you can count on</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="container">
          <div className="about-cta__inner">
            <div>
              <h2 className="about-cta__title">Ready to get started?</h2>
              <p className="about-cta__text">Request a quote and we’ll follow up to schedule a walkthrough.</p>
            </div>
            <Link to="/contact" className="btn btn--primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}