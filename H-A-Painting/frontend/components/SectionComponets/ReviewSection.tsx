import '../../css/ReviewSection.css';

export default function ReviewSection() {
  return (
    <section className="home-review-section">
      <div className="home-review-wrapper">
        <div className="home-review-header">
          <h2 className="home-review-heading">CLIENT TESTIMONIALS</h2>
          <p className="home-review-subtext">
            See what our satisfied customers have to say about our work.
          </p>
        </div>
        
        <div className="home-review-grid">
          <div className="home-review-card">
            <div className="home-review-number">01</div>
            <p className="home-review-text">
              "H & A Painting did an amazing job on our home. The team was professional and the results were outstanding!"
            </p>
            <p className="home-review-author">JOHN D.</p>
          </div>
          
          <div className="home-review-card">
            <div className="home-review-number">02</div>
            <p className="home-review-text">
              "Highly recommend H & A Painting. They transformed our living room with their attention to detail and quality work."
            </p>
            <p className="home-review-author">SARAH K.</p>
          </div>
          
          <div className="home-review-card">
            <div className="home-review-number">03</div>
            <p className="home-review-text">
              "Excellent service and beautiful results. H & A Painting exceeded our expectations!"
            </p>
            <p className="home-review-author">MICHAEL B.</p>
          </div>
        </div>
      </div>
    </section>
  );
}