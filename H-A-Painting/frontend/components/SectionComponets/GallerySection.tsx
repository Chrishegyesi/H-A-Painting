export default function GallerySection() {
  return (
    <section className="gallery-section">
      <div className="gallery-content">
        <h2 className="gallery-title">GALLERY</h2>
        <p className="gallery-description">
          Explore our portfolio of completed painting projects in Sarasota, Venice, and North Port. We take pride in delivering high-quality results that transform spaces.
        </p>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/gallery1.jpg" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
            <img src="/gallery2.jpg" alt="Gallery Image 2" />
          </div>
          <div className="gallery-item">
            <img src="/gallery3.jpg" alt="Gallery Image 3" />
          </div>
        </div>
      </div>
    </section>
  );
}