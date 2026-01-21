export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">CONTACT H & A PAINTING</h2>
        <p className="contact-description">
          Get in touch with us for a free quote or to discuss your painting project. We are available to serve Sarasota, Venice, and North Port.
        </p>
        <div className="contact-cta">
          <a href="tel:941-223-6254" className="cta-button primary">Call Us: 941-223-6254</a>
          <a href="/contact" className="cta-button secondary">Request a Quote</a>
        </div>
      </div>
    </section>
  );
}