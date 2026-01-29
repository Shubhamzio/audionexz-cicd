import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import Footer from '../Footer/Footer.jsx';

const About = () => {
  const navigate = useNavigate();
  const sectionRefs = useRef([]);

  // ✅ Helper function to get correct image path for GitHub Pages
  const getImagePath = (path) => {
    const base = import.meta.env.BASE_URL || '/';
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${base}${cleanPath}`;
  };

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('anx-about--animated');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.anx-about__animate');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // ✅ REMOVED - ScrollToTop component now handles this globally
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }, []);

  const founders = [
    {
      name: 'Tanmoy Das',
      role: 'Co-Founder & CEO',
      image: getImagePath('assets/Tanmoy_Das.jpeg'),
      description: 'Visionary leader with expertise in acoustic engineering and audio system design.',
      social: {
        linkedin: '#',
        email: 'tanmoy@audionexz.com'
      }
    },
    {
      name: 'Megha Mukherjee',
      role: 'Co-Founder & COO',
      image: getImagePath('assets/Megha_das.jpeg'),
      description: 'Strategic operations expert driving excellence in client solutions and partnerships.',
      social: {
        linkedin: '#',
        email: 'megha@audionexz.com'
      }
    }
  ];

  const storyImages = {
    studio: getImagePath('assets/about/studio-1.jpg'),
    equipment: getImagePath('assets/about/equipment.jpg'),
    installation: getImagePath('assets/about/installation.jpg')
  };

  const services = [
    {
      icon: '🎵',
      title: 'Musical Instruments',
      description: 'Premium instruments from world-leading brands for professionals and enthusiasts.'
    },
    {
      icon: '🎙️',
      title: 'Studio Equipment',
      description: 'Professional recording, mixing, and mastering equipment for studios.'
    },
    {
      icon: '🔊',
      title: 'Live Sound Systems',
      description: 'Complete PA, monitoring, and live performance audio solutions.'
    },
    {
      icon: '🎨',
      title: 'Acoustic Design',
      description: 'Expert acoustic treatment, soundproofing, and room optimization.'
    },
    {
      icon: '🔧',
      title: 'Installation & Setup',
      description: 'Professional installation, calibration, and system integration.'
    },
    {
      icon: '🎯',
      title: 'Consultation',
      description: 'End-to-end audio system planning and technical advisory.'
    }
  ];

  const venues = [
    { name: 'Recording Studios', icon: '🎤' },
    { name: 'Home Theatres', icon: '🎬' },
    { name: 'Cafés & Restaurants', icon: '☕' },
    { name: 'Pubs & Lounges', icon: '🍸' },
    { name: 'Banquet Halls', icon: '🎊' },
    { name: 'Hotels', icon: '🏨' },
    { name: 'Educational Institutes', icon: '🎓' },
    { name: 'Auditoriums', icon: '🎭' }
  ];

  const stats = [
    { number: '40+', label: 'Projects Completed' },
    { number: '200+', label: 'Partner Brands' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const brands = [
    'Neumann', 'Sennheiser', 'AKG', 'Audio-Technica', 'Shure', 'Genelec',
    'Adam Audio', 'Focal', 'JBL', 'RCF', 'Beta Three', 'QSC',
    'Yamaha Pro Audio', 'Bose Professional', 'Powersoft', 'RME',
    'Universal Audio', 'SSL', 'Rupert Neve Designs', 'API', 'Drawmer',
    'Manley Labs', 'Lewitt', 'Arturia', 'Avid'
  ];

  // ✅ Fixed: Navigate to contact page (ScrollToTop handles the scroll)
  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleImageError = (e, name) => {
    console.error(`Failed to load image for: ${name}`);
    e.target.src = `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&size=400&background=1e90ff&color=fff&bold=true`;
  };

  return (
    <>
      <div className="anx-about">
        {/* ===== HERO SECTION ===== */}
        <section className="anx-about__hero">
          <div className="anx-about__hero-bg">
            <div className="anx-about__hero-gradient"></div>
            <div className="anx-about__hero-particles">
              {[...Array(20)].map((_, i) => (
                <span key={i} className="anx-about__hero-particle"></span>
              ))}
            </div>
          </div>

          <div className="anx-about__hero-content">
            <div className="anx-about__hero-badge anx-about__animate">
              <span className="anx-about__hero-badge-icon">🎵</span>
              <span className="anx-about__hero-badge-text">Established 2023</span>
            </div>

            <h1 className="anx-about__hero-title anx-about__animate">
              About <span className="anx-about__hero-title--highlight">AUDIONEXZ</span>
            </h1>

            <p className="anx-about__hero-subtitle anx-about__animate">
              Your premier destination for professional audio solutions, acoustic design,
              and world-class sound system installations.
            </p>

            <div className="anx-about__hero-divider anx-about__animate">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="anx-about__hero-scroll">
            <span>Scroll to Explore</span>
            <div className="anx-about__hero-scroll-line"></div>
          </div>
        </section>

        {/* ===== FOUNDERS SECTION ===== */}
        <section className="anx-about__founders">
          <div className="anx-about__founders-container">
            <div className="anx-about__founders-header anx-about__animate">
              <h4 className="anx-about__section-subtitle">LEADERSHIP</h4>
              <h2 className="anx-about__section-title">
                Meet Our <span className="anx-about__section-title--highlight">Founders</span>
              </h2>
              <p className="anx-about__section-description">
                The visionary minds behind AUDIONEXZ's success and innovation
              </p>
            </div>

            <div className="anx-about__founders-grid">
              {founders.map((founder, index) => (
                <div
                  key={index}
                  className={`anx-about__founder-card anx-about__animate`}
                  style={{ '--delay': `${index * 0.2}s` }}
                >
                  <div className="anx-about__founder-image-wrapper">
                    <div className="anx-about__founder-image-glow"></div>
                    <div className="anx-about__founder-image-frame">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="anx-about__founder-image"
                        onError={(e) => handleImageError(e, founder.name)}
                        loading="lazy"
                      />
                    </div>
                    <div className="anx-about__founder-image-border"></div>
                  </div>

                  <div className="anx-about__founder-content">
                    <h3 className="anx-about__founder-name">{founder.name}</h3>
                    <span className="anx-about__founder-role">{founder.role}</span>
                    <p className="anx-about__founder-description">{founder.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== STORY SECTION ===== */}
        <section className="anx-about__story">
          <div className="anx-about__story-container">
            <div className="anx-about__story-content anx-about__animate">
              <h4 className="anx-about__section-subtitle">OUR STORY</h4>
              <h2 className="anx-about__section-title">
                Crafting <span className="anx-about__section-title--highlight">Sonic Excellence</span>
              </h2>

              <div className="anx-about__story-text">
                <p>
                  At <strong>AUDIONEXZ</strong>, we bring together the worlds of music, technology,
                  and acoustics to deliver the finest in professional sound. Based in
                  <strong> Khardah, West Bengal, India</strong>, we specialize in musical instruments,
                  studio gear, live sound systems, acoustic design, and professional speaker
                  installations for every kind of space.
                </p>
                <p>
                  Founded by <strong>Tanmoy Das</strong> and <strong>Megha Mukherjee</strong>,
                  AUDIONEXZ Entertainment Pvt. Ltd. is driven by a shared passion for quality sound,
                  design precision, and reliable performance. Whether you're a musician, a studio owner,
                  or a business creating a high-end venue experience, our team provides end-to-end
                  consultation, equipment supply, installation, and calibration to ensure your sound
                  is tuned to perfection.
                </p>
              </div>

              <div className="anx-about__story-quote">
                <svg className="anx-about__story-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p>"Sound is the vocabulary of nature, and we are its eloquent translators."</p>
              </div>
            </div>

            <div className="anx-about__story-visual anx-about__animate">
              <div className="anx-about__story-image-grid">
                <div className="anx-about__story-image-item anx-about__story-image-item--1">
                  <img
                    src={storyImages.studio}
                    alt="Studio"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="anx-about__story-image-item anx-about__story-image-item--2">
                  <img
                    src={storyImages.equipment}
                    alt="Equipment"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="anx-about__story-image-item anx-about__story-image-item--3">
                  <img
                    src={storyImages.installation}
                    alt="Installation"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS SECTION ===== */}
        <section className="anx-about__stats">
          <div className="anx-about__stats-container">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="anx-about__stat-item anx-about__animate"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <span className="anx-about__stat-number">{stat.number}</span>
                <span className="anx-about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SERVICES SECTION ===== */}
        <section className="anx-about__services">
          <div className="anx-about__services-container">
            <div className="anx-about__services-header anx-about__animate">
              <h4 className="anx-about__section-subtitle">WHAT WE OFFER</h4>
              <h2 className="anx-about__section-title">
                Our <span className="anx-about__section-title--highlight">Services</span>
              </h2>
              <p className="anx-about__section-description">
                Comprehensive audio solutions tailored to your unique needs
              </p>
            </div>

            <div className="anx-about__services-grid">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="anx-about__service-card anx-about__animate"
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <div className="anx-about__service-icon">{service.icon}</div>
                  <h3 className="anx-about__service-title">{service.title}</h3>
                  <p className="anx-about__service-description">{service.description}</p>
                  <div className="anx-about__service-hover-line"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VENUES SECTION ===== */}
        <section className="anx-about__venues">
          <div className="anx-about__venues-container">
            <div className="anx-about__venues-header anx-about__animate">
              <h4 className="anx-about__section-subtitle">EXPERTISE</h4>
              <h2 className="anx-about__section-title">
                Spaces We <span className="anx-about__section-title--highlight">Transform</span>
              </h2>
            </div>

            <div className="anx-about__venues-grid">
              {venues.map((venue, index) => (
                <div
                  key={index}
                  className="anx-about__venue-card anx-about__animate"
                  style={{ '--delay': `${index * 0.08}s` }}
                >
                  <span className="anx-about__venue-icon">{venue.icon}</span>
                  <span className="anx-about__venue-name">{venue.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BRANDS SECTION ===== */}
        <section className="anx-about__brands">
          <div className="anx-about__brands-container">
            <div className="anx-about__brands-header anx-about__animate">
              <h4 className="anx-about__section-subtitle">PARTNERSHIPS</h4>
              <h2 className="anx-about__section-title">
                Trusted <span className="anx-about__section-title--highlight">Global Brands</span>
              </h2>
              <p className="anx-about__section-description">
                We proudly work with over <strong>200 world-leading pro-audio brands</strong>,
                ensuring every solution meets international standards.
              </p>
            </div>

            <div className="anx-about__brands-marquee">
              <div className="anx-about__brands-track">
                {[...brands, ...brands].map((brand, index) => (
                  <span key={index} className="anx-about__brand-item">{brand}</span>
                ))}
              </div>
            </div>

            <div className="anx-about__brands-marquee anx-about__brands-marquee--reverse">
              <div className="anx-about__brands-track anx-about__brands-track--reverse">
                {[...brands, ...brands].map((brand, index) => (
                  <span key={index} className="anx-about__brand-item">{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== EXPERTISE SECTION ===== */}
        <section className="anx-about__expertise">
          <div className="anx-about__expertise-container">
            <div className="anx-about__expertise-content anx-about__animate">
              <div className="anx-about__expertise-icon">🎚️</div>
              <h2 className="anx-about__expertise-title">Professional Excellence</h2>
              <p className="anx-about__expertise-text">
                From <strong>Dolby Atmos studios</strong> to commercial venue sound systems,
                AUDIONEXZ ensures clarity, depth, and consistency in every project. With our
                expertise in acoustics, calibration, and system integration, we help clients
                achieve perfect sound that transforms their space.
              </p>
            </div>
          </div>
        </section>

        {/* ===== MISSION SECTION ===== */}
        <section className="anx-about__mission">
          <div className="anx-about__mission-container">
            <div className="anx-about__mission-card anx-about__animate">
              <div className="anx-about__mission-glow"></div>
              <div className="anx-about__mission-content">
                <div className="anx-about__mission-icon">🌟</div>
                <h2 className="anx-about__mission-title">More Than a Company</h2>
                <p className="anx-about__mission-text">
                  AUDIONEXZ Entertainment Pvt. Ltd. isn't just a company — it's an
                  <strong> ecosystem for creators, performers, and businesses</strong> who care about great sound.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TAGLINE SECTION ===== */}
        <section className="anx-about__tagline">
          <div className="anx-about__tagline-container anx-about__animate">
            <div className="anx-about__tagline-decoration">
              <span>🎵</span>
            </div>
            <h2 className="anx-about__tagline-text">
              Design. Install. Create. Perform.
            </h2>
            <p className="anx-about__tagline-subtitle">
              With AUDIONEXZ, sound speaks quality.
            </p>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="anx-about__cta">
          <div className="anx-about__cta-container anx-about__animate">
            <div className="anx-about__cta-content">
              <h2 className="anx-about__cta-title">Ready to Transform Your Sound?</h2>
              <p className="anx-about__cta-text">Let's create the perfect audio experience together</p>
              <button className="anx-about__cta-button" onClick={handleContactClick}>
                <span>Get in Touch</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="anx-about__cta-decoration">
              <div className="anx-about__cta-circle anx-about__cta-circle--1"></div>
              <div className="anx-about__cta-circle anx-about__cta-circle--2"></div>
            </div>
          </div>
        </section>

        {/* ===== AUDIO VISUALIZER ===== */}
        <div className="anx-about__visualizer">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="anx-about__visualizer-bar"></span>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;