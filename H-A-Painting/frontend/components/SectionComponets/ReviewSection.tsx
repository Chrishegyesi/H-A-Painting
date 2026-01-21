export default function ReviewSection() {
  return (
    <section className="review-section">
      <div className="review-content">
        <h2 className="review-title">REVIEWS</h2>
        <p className="review-description">
          See what our satisfied customers have to say about our painting services in Sarasota, Venice, and North Port.
        </p>
        <div className="review-grid">
          <div className="review-item">
            <p className="review-text">"H & A Painting did an amazing job on our home. The team was professional and the results were outstanding!"</p>
            <p className="review-author">- John D.</p>
          </div>
          <div className="review-item">
            <p className="review-text">"Highly recommend H & A Painting. They transformed our living room with their attention to detail and quality work."</p>
            <p className="review-author">- Sarah K.</p>
          </div>
          <div className="review-item">
            <p className="review-text">"Excellent service and beautiful results. H & A Painting exceeded our expectations!"</p>
            <p className="review-author">- Michael B.</p>
          </div>
        </div>
      </div>
    </section>
  );
}