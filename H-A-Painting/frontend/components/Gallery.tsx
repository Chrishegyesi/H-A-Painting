import React from 'react';
import '../css/Gallery.css';

export default function Gallery() {
  const heroBg = '/H&APaintinglogo.png';

  const items = [
    { label: 'Exterior Repaint' },
    { label: 'Interior Refresh' },
    { label: 'Trim & Detail' },
    { label: 'Cabinet Finish' },
    { label: 'Stucco / Prep Work' },
    { label: 'Commercial Space' },
    { label: 'Living Room' },
    { label: 'Front Door & Entry' },
    { label: 'Before / After' },
    { label: 'Accent Wall' },
    { label: 'Garage Door' },
    { label: 'Lanai / Patio' },
  ];

  return (
    <div className="gallery">
      <section className="hero gallery-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero__overlay" />
        <div className="hero__content container">
          <h1 className="hero__title">Gallery</h1>
          <p className="hero__subtitle">
            A look at recent work and finishes. (Placeholder tiles for now.)
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2>Recent Projects</h2>
            <p>Swap placeholders with real photos anytime—layout stays the same.</p>
          </div>

          <div className="grid gallery-grid">
            {items.map((it, idx) => (
              <div key={`${it.label}-${idx}`} className="card gallery-tile">
                <div className="card__media gallery-tile__media" aria-hidden="true">
                  <div className="gallery-tile__placeholder" />
                </div>
                <div className="card__body">
                  <h3 className="gallery-tile__title">{it.label}</h3>
                  <p className="gallery-tile__meta">Photo coming soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}