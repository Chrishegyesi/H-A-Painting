import '../../css/AboutSection.css';

export default function AboutSection() {
  return (
    <section className="home-about-section">
      <div className="home-about-container">
        <div className="home-about-header">
          <h2 className="home-about-heading">ABOUT US</h2>
          <p className="home-about-caption">
            Licensed & Insured professionals with decades of experience. 
            We bring quality craftsmanship and attention to detail to every project.
          </p>
        </div>
        
        <div className="home-about-team">
          <div className="home-team-member">
            <div className="home-member-photo">
              <img src="/placeholder-johnny.jpg" alt="Johnny Abul" />
            </div>
            <div className="home-member-info">
              <h3 className="home-member-name">Johnny Abul</h3>
              <p className="home-member-title">28 Years Experience</p>
            </div>
          </div>

          <div className="home-team-member">
            <div className="home-member-photo">
              <img src="/chrispic.jpeg" alt="Christopher Hegyesi" />
            </div>
            <div className="home-member-info">
              <h3 className="home-member-name">Christopher Hegyesi</h3>
              <p className="home-member-title">Detail-Focused Craftsman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}