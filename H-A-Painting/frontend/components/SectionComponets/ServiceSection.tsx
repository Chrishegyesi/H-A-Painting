import '../../css/ServiceSection.css';

export default function ServiceSection() {
  return (
    <section className="home-service-section">
      <div className="home-service-wrapper">
        <div className="home-service-header">
          <h2 className="home-service-heading">OUR SERVICES</h2>
          <p className="home-service-subtext">
            Professional painting services for residential and commercial properties.
          </p>
        </div>
        
        <div className="home-service-grid">
          <div className="home-service-card">
            <div className="home-service-number">01</div>
            <h3 className="home-service-title">INTERIOR PAINTING</h3>
            <p className="home-service-description">
              Transform your home's interior with professional painting. Smooth, flawless finishes for every room.
            </p>
          </div>
          
          <div className="home-service-card">
            <div className="home-service-number">02</div>
            <h3 className="home-service-title">EXTERIOR PAINTING</h3>
            <p className="home-service-description">
              Enhance curb appeal with high-quality paints and techniques designed to withstand the elements.
            </p>
          </div>
          
          <div className="home-service-card">
            <div className="home-service-number">03</div>
            <h3 className="home-service-title">CABINET REFINISHING</h3>
            <p className="home-service-description">
              Revitalize your space with durable, beautiful cabinet finishes that bring new life to your kitchen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}