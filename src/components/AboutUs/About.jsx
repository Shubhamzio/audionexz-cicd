import { useEffect } from 'react';
import './About.css';
import Footer from '../Footer/Footer.jsx';
const About = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const brands = [
    'Neumann', 'Sennheiser', 'AKG', 'Audio-Technica', 'Shure', 'Genelec',
    'Adam Audio', 'Focal', 'JBL', 'RCF', 'Beta Three', 'QSC',
    'Yamaha Pro Audio', 'Bose Professional', 'Powersoft', 'RME',
    'Universal Audio', 'SSL', 'Rupert Neve Designs', 'API', 'Drawmer',
    'Manley Labs', 'iZotope', 'Waves', 'Arturia'
  ];

  const services = [
    {
      icon: '🎵',
      title: 'Musical Instruments',
      description: 'Premium instruments from world-leading brands'
    },
    {
      icon: '🎙️',
      title: 'Studio Gear',
      description: 'Professional recording and mixing equipment'
    },
    {
      icon: '🔊',
      title: 'Live Sound Systems',
      description: 'Complete PA and monitoring solutions'
    },
    {
      icon: '🎨',
      title: 'Acoustic Design',
      description: 'Expert acoustic treatment and soundproofing'
    },
    {
      icon: '🔧',
      title: 'Installation',
      description: 'Professional setup and calibration services'
    },
    {
      icon: '🎯',
      title: 'Consultation',
      description: 'End-to-end audio system planning'
    }
  ];

  const venues = [
    'Recording Studios',
    'Home Theatres',
    'Cafés & Restaurants',
    'Pubs & Lounges',
    'Banquet Halls',
    'Hotels',
    'Schools',
    'Auditoriums'
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-badge animate-on-scroll">
            <span className="badge-icon">🎵</span>
            <span>Est. by Tanmoy Das & Megha Mukherjee</span>
          </div>
          <h1 className="about-title animate-on-scroll">
            About MixMasterSquare
          </h1>
          <p className="about-lead animate-on-scroll">
            Your one-stop destination for musical instruments, professional audio gear, and complete sound system solutions.
          </p>
        </div>
        <div className="hero-decoration">
          <div className="sound-wave"></div>
          <div className="sound-wave"></div>
          <div className="sound-wave"></div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="about-content-section">
        <div className="content-container">
          {/* Introduction */}
          <div className="content-block animate-on-scroll">
            <div className="content-icon">🎼</div>
            <p className="content-text">
              At MixMasterSquare, we bring together the worlds of music, technology, and acoustics to deliver the finest in professional sound. Based in <strong>Khardah, West Bengal, India</strong>, we specialize in musical instruments, studio gear, live sound systems, acoustic design, and professional speaker installations for every kind of space — from recording studios and home theatres to cafés, pubs, banquet halls, hotels, schools, and auditoriums.
            </p>
          </div>

          {/* Founders Story */}
          <div className="founders-section animate-on-scroll">
            <div className="founders-card">
              <div className="founders-icon">👥</div>
              <h2>Founded on Passion</h2>
              <p>
                Founded by <strong>Tanmoy Das</strong> and <strong>Megha Mukherjee</strong>, MixMasterSquare Entertainment Pvt. Ltd. is driven by a shared passion for quality sound, design precision, and reliable performance. Whether you're a musician, a studio owner, or a business creating a high-end venue experience, our team provides end-to-end consultation, equipment supply, installation, and calibration to ensure your sound is tuned to perfection.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="services-showcase animate-on-scroll">
            <h2 className="section-title">What We Offer</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card" style={{ '--delay': `${index * 0.1}s` }}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Venues Section */}
          <div className="venues-section animate-on-scroll">
            <h2 className="section-title">Spaces We Transform</h2>
            <div className="venues-grid">
              {venues.map((venue, index) => (
                <div key={index} className="venue-tag">
                  <span className="venue-icon">✓</span>
                  {venue}
                </div>
              ))}
            </div>
          </div>

          {/* Brands Section */}
          <div className="brands-section animate-on-scroll">
            <div className="brands-header">
              <h2 className="section-title">Trusted Global Brands</h2>
              <p className="brands-subtitle">
                We proudly work with <strong>over 200 of the world's leading pro-audio brands</strong>, ensuring every solution we deliver meets international standards.
              </p>
            </div>
            <div className="brands-grid">
              {brands.map((brand, index) => (
                <div key={index} className="brand-item" style={{ '--delay': `${index * 0.05}s` }}>
                  {brand}
                </div>
              ))}
            </div>
            <p className="brands-more">...and many more</p>
          </div>

          {/* Expertise Section */}
          <div className="expertise-section animate-on-scroll">
            <div className="expertise-content">
              <div className="expertise-icon">🎚️</div>
              <h2>Professional Excellence</h2>
              <p>
                From <strong>Dolby Atmos studios</strong> to commercial venue sound systems, MixMasterSquare ensures clarity, depth, and consistency in every project. With our expertise in acoustics, calibration, and system integration, we help clients achieve perfect sound that transforms their space.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mission-section animate-on-scroll">
            <div className="mission-card">
              <div className="mission-icon">🌟</div>
              <h2>More Than a Company</h2>
              <p>
                MixMasterSquare Entertainment Pvt. Ltd. isn't just a company — it's an <strong>ecosystem for creators, performers, and businesses</strong> who care about great sound.
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="tagline-section animate-on-scroll">
            <div className="tagline-box">
              <div className="tagline-decoration">🎵</div>
              <h3 className="tagline">Design. Install. Create. Perform.</h3>
              <p className="tagline-subtitle">With MixMasterSquare, sound speaks quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-cta animate-on-scroll">
        <div className="cta-content">
          <h2>Ready to Transform Your Sound?</h2>
          <p>Let's create the perfect audio experience together</p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;