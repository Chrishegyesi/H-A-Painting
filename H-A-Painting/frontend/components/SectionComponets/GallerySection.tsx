import '../../css/GallerySection.css';

export default function GallerySection() {
  return (
    <section className="home-gallery-section">
      <div className="home-gallery-wrapper">
        <div className="home-gallery-header">
          <h2 className="home-gallery-heading">PROJECT GALLERY</h2>
          <p className="home-gallery-subtext">
            Explore our portfolio of completed projects showcasing quality craftsmanship.
          </p>
        </div>
        
        <div className="home-gallery-grid">
          <div className="home-gallery-card">
            <div className="home-gallery-number">01</div>
            <div className="home-gallery-image">
              <img src="/gallery1.jpg" alt="Interior Painting Project" />
            </div>
            <h3 className="home-gallery-title">INTERIOR TRANSFORMATION</h3>
          </div>
          
          <div className="home-gallery-card">
            <div className="home-gallery-number">02</div>
            <div className="home-gallery-image">
              <img src="/gallery2.jpg" alt="Exterior Painting Project" />
            </div>
            <h3 className="home-gallery-title">EXTERIOR EXCELLENCE</h3>
          </div>
          
          <div className="home-gallery-card">
            <div className="home-gallery-number">03</div>
            <div className="home-gallery-image">
              <img src="/gallery3.jpg" alt="Cabinet Refinishing Project" />
            </div>
            <h3 className="home-gallery-title">CABINET REFINISHING</h3>
          </div>
        </div>
      </div>
    </section>
  );
}