import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Reviews.css';

export default function Reviews() {
  const heroBg = '/H&APaintinglogo.png';

  const reviews = [
    {
      name: 'Local Homeowner',
      rating: 5,
      text: 'On time, clean, and professional. The finished paint looks incredible.',
    },
    {
      name: 'Sarasota Client',
      rating: 5,
      text: 'Excellent prep and attention to detail. Would absolutely hire again.',
    },
    {
      name: 'Venice Resident',
      rating: 5,
      text: 'Friendly team and the results exceeded expectations. Great experience.',
    },
    {
      name: 'North Port Customer',
      rating: 5,
      text: 'Quality work, great communication, and a clean jobsite throughout.',
    },
    {
      name: 'Repeat Customer',
      rating: 5,
      text: 'Smooth finish, crisp lines, and everything was protected properly.',
    },
    {
      name: 'Commercial Client',
      rating: 5,
      text: 'Reliable scheduling and professional results. Highly recommend.',
    },
  ];

  const stars = (rating: number) => '★★★★★'.slice(0, rating) + '☆☆☆☆☆'.slice(0, 5 - rating);

  return (
    <div className="reviews">
      <section className="hero reviews-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero__overlay" />
        <div className="hero__content container">
          <h1 className="hero__title">Reviews</h1>
          <p className="hero__subtitle">Read what our satisfied customers have to say about our work.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2>Customer Feedback</h2>
            <p>Short reviews shown as placeholders—swap in real ones anytime.</p>
          </div>

          <div className="grid grid--3">
            {reviews.map((r) => (
              <div key={`${r.name}-${r.text}`} className="card review-card">
                <div className="card__body">
                  <div className="review-card__top">
                    <h3 className="review-card__name">{r.name}</h3>
                    <div className="review-card__stars" aria-label={`${r.rating} out of 5 stars`}>
                      {stars(r.rating)}
                    </div>
                  </div>
                  <p className="review-card__text">“{r.text}”</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reviews-cta">
        <div className="container">
          <div className="reviews-cta__inner">
            <div>
              <h2 className="reviews-cta__title">Want results like these?</h2>
              <p className="reviews-cta__text">Request a quote and we’ll follow up to schedule a walkthrough.</p>
            </div>
            <Link to="/contact" className="btn btn--primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}