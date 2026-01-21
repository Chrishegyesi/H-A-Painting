import React from 'react';
import '../css/About.css';

export default function About() {
  return (
    <div className="about">
      {/* Hero Section with Logo */}
      <section className="about-hero">
        <div className="about-logo">
          <img 
            src="/H&APaintinglogo.png" 
            alt="H&A Painting Logo" 
            className="about-logo-image"
          />
        </div>
        <h1 className="about-title">ABOUT H&A PAINTING</h1>
        <div className="title-divider"></div>
      </section>

      {/* Main Content Section */}
      <section className="about-content">
        <div className="content-container">
          <div className="intro-text">
            <p className="lead-paragraph">
              H&A Painting is a small, detail-driven team built on pride, craftsmanship, and consistency.
            </p>
          </div>

          {/* Team Members */}
          <div className="team-info">
            <div className="team-member">
              <div className="member-details">
                <h2 className="member-name">Johnny Abul</h2>
                <div className="member-line"></div>
                <p className="member-bio">
                  Originally from Romania, Johnny brings 28 years of hands-on experience in construction, 
                  tiling, and professional painting. His commitment to quality and attention to detail 
                  forms the foundation of every project we undertake.
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-details">
                <h2 className="member-name">Christopher Hegyesi</h2>
                <div className="member-line"></div>
                <p className="member-bio">
                  Christopher has been painting since he was young and now, at 20 years old, continues 
                  that passion with a sharp eye for detail and a commitment to doing things right. His 
                  dedication to the craft ensures every finish meets the highest standards.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="philosophy-section">
            <h2 className="philosophy-title">OUR APPROACH</h2>
            <div className="philosophy-divider"></div>
            <p className="philosophy-text">
              We treat every home like it's our own—showing up on time, keeping the jobsite clean, 
              and delivering a finish you'll be proud of. Whether it's a full exterior repaint or a 
              single room refresh, we focus on quality prep, clean lines, and results that last.
            </p>
          </div>

          {/* Values */}
          <div className="values-grid">
            <div className="value-card">
              <h3 className="value-title">PRIDE</h3>
              <p className="value-description">Every project reflects our commitment to excellence</p>
            </div>
            <div className="value-card">
              <h3 className="value-title">CRAFTSMANSHIP</h3>
              <p className="value-description">Decades of experience in every brushstroke</p>
            </div>
            <div className="value-card">
              <h3 className="value-title">CONSISTENCY</h3>
              <p className="value-description">Reliable results you can count on</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photos Section */}
      <section className="team-photos">
        <h2 className="photos-title">MEET THE TEAM</h2>
        <div className="photos-divider"></div>
        <div className="photos-grid">
          <div className="photo-placeholder">
            <div className="photo-frame">
              <span className="photo-label">Johnny Abul</span>
              {/* Replace with actual image: <img src="/path-to-johnny-photo.jpg" alt="Johnny Abul" /> */}
            </div>
          </div>
          <div className="photo-placeholder">
            <div className="photo-frame">
              <span className="photo-label">Christopher Hegyesi</span>
              <img src="/chrispic.jpeg" alt="Christopher Hegyesi" /> 
            </div>
          </div>
        </div>
        <p className="photos-note">Add your team photos to /public/ folder and update the image sources above</p>
      </section>
    </div>
  );
}