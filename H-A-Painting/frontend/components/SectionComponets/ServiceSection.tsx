export default function ServiceSection() {
  return (
    <section className="service-section">
      <div className="service-content">
        <h2 className="service-title">OUR SERVICES</h2>
        <p className="service-description">
          H & A Painting offers a wide range of painting services for residential and commercial properties in Sarasota, Venice, and North Port. Our services include interior and exterior painting, cabinet refinishing, and more.
        </p>
        <div className="service-grid">
          <div className="service-item">
            <h3 className="service-item-title">Interior Painting</h3>
            <p className="service-item-description">
              Transform your home's interior with our professional painting services. We ensure a smooth and flawless finish for every room.
            </p>
          </div>
          <div className="service-item">
            <h3 className="service-item-title">Exterior Painting</h3>
            <p className="service-item-description">
              Enhance your home's curb appeal with our exterior painting services. We use high-quality paints and techniques to withstand the elements.
            </p>
          </div>
          <div className="service-item">
            <h3 className="service-item-title">Cabinet Refinishing</h3>
            <p className="service-item-description">
              Give your cabinets a fresh new look with our cabinet refinishing services. We provide a durable and beautiful finish that revitalizes your space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}