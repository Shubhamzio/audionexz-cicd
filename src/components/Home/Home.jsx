import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../Footer/Footer.jsx";
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  // Helper function to get correct image path
  const getImagePath = (path) => {
    const base = import.meta.env.BASE_URL || '/';
    // Remove leading slash from path if base already ends with /
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${base}${cleanPath}`;
  };

  // Hero Carousel Data
  const heroSlides = [
    {
      id: 1,
      heading: "Recording Studios",
      subheading: "Where Sound Meets Perfection",
      image: getImagePath("/assets/studio.jpg")
    },
    {
      id: 2,
      heading: "Home Theatres",
      subheading: "Cinematic Experience at Home",
      image: getImagePath("/assets/home-theatre.jpg")
    },
    {
      id: 3,
      heading: "Cafe and Restaurant",
      subheading: "Ambiance That Speaks Volumes",
      image: getImagePath("/assets/retaurant.jpg")
    },
    {
      id: 4,
      heading: "Pubs and Lounges",
      subheading: "Immersive Nightlife Acoustics",
      image: getImagePath("/assets/pub.jpg")
    },
    {
      id: 5,
      heading: "Banquets",
      subheading: "Grand Events, Perfect Sound",
      image: getImagePath("/assets/banquets.jpg")
    },
    {
      id: 6,
      heading: "Hotels",
      subheading: "Luxury Meets Acoustic Excellence",
      image: getImagePath("/assets/hotels.jpg")
    },
    {
      id: 7,
      heading: "Educational Institute",
      subheading: "Learning Spaces That Inspire",
      image: getImagePath("/assets/educational_Institute.jpg")
    },
    {
      id: 8,
      heading: "Auditoriums",
      subheading: "Engineered for Every Performance",
      image: getImagePath("/assets/auditorium.jpg")
    }
  ];

  // Partner Logos
  const partnerLogos = [
    { id: 1, name: "Antelope", logo: getImagePath("/assets/antelope.jpg") },
    { id: 2, name: "Audio Technica", logo: getImagePath("/assets/audio-technica.png") },
    { id: 3, name: "Audioease", logo: getImagePath("/assets/Audioease-Hero.png") },
    { id: 4, name: "Audix", logo: getImagePath("/assets/audix-logo.png") },
    { id: 5, name: "Avid", logo: getImagePath("/assets/avid-logo-png.png") },
    { id: 6, name: "Behringer", logo: getImagePath("/assets/Behringer_Logo.png") },
    { id: 7, name: "Beta Three", logo: getImagePath("/assets/beta-three.png") },
    { id: 8, name: "DB Technologies", logo: getImagePath("/assets/db-technologies.jpg") },
    { id: 9, name: "Drawmer", logo: getImagePath("/assets/Drawmer.png") },
    { id: 10, name: "Eve Audio", logo: getImagePath("/assets/eve-audio.png") },
    { id: 11, name: "Genelec", logo: getImagePath("/assets/Gelelec_logo.svg.png") },
    { id: 12, name: "Hercules", logo: getImagePath("/assets/hercules.jpg") },
    { id: 13, name: "Heritage", logo: getImagePath("/assets/heritage.png") },
    { id: 14, name: "JBL", logo: getImagePath("/assets/JBL-Logo.svg.png") },
    { id: 15, name: "K&M", logo: getImagePath("/assets/KM_KoenigMeyer_Logo_RGB.jpg") },
    { id: 16, name: "KRK", logo: getImagePath("/assets/krk-systems-logo.jpg") },
    { id: 17, name: "Lewitt", logo: getImagePath("/assets/lewitt.png") },
    { id: 18, name: "Lexicon", logo: getImagePath("/assets/lexicon-by-harman-logo-vector.png") },
    { id: 19, name: "Universal Audio", logo: getImagePath("/assets/Logo-Universal-Audio-.jpg") },
    { id: 20, name: "Manley", logo: getImagePath("/assets/MAN-MSLAM-4.jpg") },
    { id: 21, name: "Neumann", logo: getImagePath("/assets/neumann-berlin-logo-vector.png") },
    { id: 22, name: "Prism Sound", logo: getImagePath("/assets/prism-sound.png") },
    { id: 23, name: "RME", logo: getImagePath("/assets/RME.png") },
    { id: 24, name: "Rupert Neve", logo: getImagePath("/assets/Rupert-Neve-Logo.jpg") },
    { id: 25, name: "Sennheiser", logo: getImagePath("/assets/senn.png") },
    { id: 26, name: "Slate Digital", logo: getImagePath("/assets/slate-digi.png") },
    { id: 27, name: "SSL", logo: getImagePath("/assets/solid-state-logic.png") },
    { id: 28, name: "Sound Reference", logo: getImagePath("/assets/sound-reference.png") },
    { id: 29, name: "Tegeler", logo: getImagePath("/assets/tegeler.png") },
    { id: 30, name: "Telefunken", logo: getImagePath("/assets/telefunken.png") },
    { id: 31, name: "Ultimate Support", logo: getImagePath("/assets/ultimate support.png") },
    { id: 32, name: "Yamaha", logo: getImagePath("/assets/yamaha.png") },
  ];

  // Projects Data
  const projects = [
    { id: 1, name: "Room For Squares", place: "Hrick Sengupta", image: getImagePath("/assets/Room_for_squares.png") },
    { id: 2, name: "Niyogi Studio", place: "Nilabjo Niyogi", image: getImagePath("/assets/Nilabjo_Niyogi_studio_Niyogi.jpeg") },
    { id: 3, name: "Sunshine Studio", place: "Suraj Nag", image: getImagePath("/assets/Sunshine_studio_.jpeg") },
    { id: 4, name: "JMR Studio", place: "Jyotirmoy Roy", image: getImagePath("/assets/JMR_Music_Studio.jpeg") },
    { id: 5, name: "KRG Kreative Studio", place: "Kashni Raj", image: getImagePath("/assets/KRG_Kreative_studio_Kashni_raj_gupta.jpeg") },
    { id: 6, name: "Sound Of Silence", place: "Chanchal Roy", image: getImagePath("/assets/Chanchal_Roy_Studio_Sound_Of_silence.jpeg") },
    { id: 7, name: "Bloopers House Atmos", place: "Salt Lake, Kolkata", image: getImagePath("/assets/Bloopers_House_Studios.png") },

  ];

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Nepal Shaw",
      role: "Musician",
      avatar: getImagePath("/assets/testimonials/avatar1.jpg"),
      text: "Audionexz transformed our studio into a world-class recording facility. The acoustic treatment is phenomenal!"
    },
    {
      id: 2,
      name: "Anupam Roy",
      role: "Vocalist, Music Director",
      avatar: getImagePath("/assets/testimonials/avatar2.jpg"),
      text: "The ambiance they created for our restaurant has been getting constant compliments from our guests."
    },
    {
      id: 3,
      name: "Rathijit",
      role: "Hotel Manager",
      avatar: getImagePath("/assets/testimonials/avatar3.jpg"),
      text: "Professional team with incredible attention to detail. Our conference rooms now have perfect acoustics."
    },
    {
      id: 4,
      name: "Yuvaan De",
      role: "School Principal",
      avatar: getImagePath("/assets/testimonials/avatar4.jpg"),
      text: "The auditorium soundproofing exceeded our expectations. Students can now enjoy clear audio during events."
    },
    {
      id: 5,
      name: "Emon Chakraborty",
      role: "Musician, Vocalist",
      avatar: getImagePath("/assets/testimonials/avatar5.jpg"),
      text: "Our lounge now has the perfect acoustic balance. The team at Audionexz truly understands sound."
    },
    {
      id: 6,
      name: "Surojit Chatterjee",
      role: "Musician, Vocalist",
      avatar: getImagePath("/assets/testimonials/avatar6.jpg"),
      text: "My home theatre is now the envy of all my friends. Audionexz delivered beyond my dreams!"
    },
    {
      id: 7,
      name: "Surojit Chatterjee",
      role: "Musician, Vocalist",
      avatar: getImagePath("/assets/testimonials/avatar6.jpg"),
      text: "My home theatre is now the envy of all my friends. Audionexz delivered beyond my dreams!"
    },
    {
      id: 8,
      name: "Sneha BhattaCharya",
      role: "Musician, Vocalist",
      avatar: getImagePath("/assets/testimonials/avatar6.jpg"),
      text: "My home theatre is now the envy of all my friends. Audionexz delivered beyond my dreams!"
    },
    {
      id: 9,
      name: "Sreejit Chatterjee",
      role: "Musician, Vocalist",
      avatar: getImagePath("/assets/testimonials/avatar6.jpg"),
      text: "My home theatre is now the envy of all my friends. Audionexz delivered beyond my dreams!"
    },
    {
      id: 10,
      name: "Shobhon Chatterjee",
      role: "Musician, Vocalist",
      avatar: getImagePath("/assets/testimonials/avatar6.jpg"),
      text: "My home theatre is now the envy of all my friends. Audionexz delivered beyond my dreams!"
    },
    {
      id: 11,
      name: "Shamidh Mukherjee",
      role: "Vocalist, Music Director",
      avatar: getImagePath("/assets/testimonials/avatar6.jpg"),
      text: "My home theatre is now the envy of all my friends. Audionexz delivered beyond my dreams!"
    },
    {
      id: 12,
      name: "Shamayan Sarkar",
      role: "Musician, Vocalist",
      avatar: getImagePath("/assets/Shamayan_Sarkar.jpeg"),
      text: "My home theatre is now the envy of all my friends. Audionexz delivered beyond my dreams!"
    },
    {
      id: 13,
      name: "Raja Chowdhury",
      role: "Musician, Guitarist",
      avatar: getImagePath("/assets/Raja_chowdhury_3.jpeg"),
      text: "My home theatre is now the envy of all my friends. Audionexz delivered beyond my dreams!"
    },
    {
      id: 14,
      name: "Mr. Indradip Sengupta",
      role: "Music Composer",
      avatar: getImagePath("/assets/Mr_Indradip_sengupta_1.jpeg"),
      text: "My home theatre is now the envy of all my friends. Audionexz delivered beyond my dreams!"
    },
  ];



  // Auto-slide for hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNavigateToAbout = () => {
    navigate('/about');
  };

  return (
    <div className="audionexz-home__wrapper">
      {/* ===== SECTION 1: HERO CAROUSEL ===== */}
      <section className="audionexz-home__hero">
        <div className="audionexz-home__hero-carousel">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`audionexz-home__hero-slide ${
                index === currentSlide ? 'audionexz-home__hero-slide--active' : ''
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="audionexz-home__hero-overlay"></div>
              <div className="audionexz-home__hero-content">
                <h1 className="audionexz-home__hero-heading">
                  <span className="audionexz-home__hero-heading-line"></span>
                  {slide.heading}
                  <span className="audionexz-home__hero-heading-line audionexz-home__hero-heading-line--right"></span>
                </h1>
                <h3 className="audionexz-home__hero-subheading">{slide.subheading}</h3>
                <div className="audionexz-home__hero-cta"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button className="audionexz-home__hero-arrow audionexz-home__hero-arrow--left" onClick={prevSlide}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button className="audionexz-home__hero-arrow audionexz-home__hero-arrow--right" onClick={nextSlide}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Carousel Indicators */}
        <div className="audionexz-home__hero-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`audionexz-home__hero-indicator ${
                index === currentSlide ? 'audionexz-home__hero-indicator--active' : ''
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="audionexz-home__hero-scroll">
          <span>Scroll Down</span>
          <div className="audionexz-home__hero-scroll-mouse">
            <div className="audionexz-home__hero-scroll-wheel"></div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: OUR STORY ===== */}
      <section
        id="story-section"
        ref={(el) => (sectionRefs.current[0] = el)}
        className={`audionexz-home__story ${isVisible['story-section'] ? 'audionexz-home__story--visible' : ''}`}
      >
        <div className="audionexz-home__story-container">
          <div className="audionexz-home__story-content">
            <div className="audionexz-home__story-badge">
              <span className="audionexz-home__story-badge-icon">🎵</span>
              <span>Since 2023</span>
            </div>
            <h2 className="audionexz-home__story-heading">
              Our <span className="audionexz-home__story-heading--highlight">Story</span>
            </h2>
            <div className="audionexz-home__story-divider">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="audionexz-home__story-text">
              At Audionexz, we believe that exceptional sound has the power to transform spaces and elevate experiences.
              Founded with a passion for acoustic excellence, we've spent over a decade crafting bespoke audio environments
              that resonate with perfection. From intimate recording studios to grand auditoriums, our team of expert
              acousticians and designers collaborate to bring your sonic vision to life. We don't just build rooms;
              we engineer experiences that captivate, inspire, and endure.
            </p>
            <p className="audionexz-home__story-text">
              Our journey began with a simple belief: everyone deserves access to world-class acoustics. Today,
              we've partnered with leading global audio brands and completed over 40+ projects across India,
              each one a testament to our unwavering commitment to sonic excellence.
            </p>
            <button
              className="audionexz-home__story-btn"
              onClick={handleNavigateToAbout}
            >
              <span>For More</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="audionexz-home__story-visual">
            <div className="audionexz-home__story-quote">
              <svg className="audionexz-home__story-quote-icon" viewBox="0 0 24 24" fill="currentColor">
              </svg>
              <p className="audionexz-home__story-quote-text">
                "Sound is the vocabulary of nature, and we are its eloquent translators."
              </p>
            </div>
            <div className="audionexz-home__story-image-wrapper">
              <div className="audionexz-home__story-image-glow"></div>
              <img
                src={getImagePath("/assets/about/story-image.jpg")}
                alt="Audionexz Team"
                className="audionexz-home__story-image"
              />
              <div className="audionexz-home__story-image-frame"></div>
              <div className="audionexz-home__story-stats">
                <div className="audionexz-home__story-stat">
                  <span className="audionexz-home__story-stat-number">40+</span>
                  <span className="audionexz-home__story-stat-label">Projects</span>
                </div>
                <div className="audionexz-home__story-stat">
                  <span className="audionexz-home__story-stat-number">5+</span>
                  <span className="audionexz-home__story-stat-label">Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="audionexz-home__story-wave">
          <svg viewBox="0 0 1440 120" fill="none">
            <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="url(#wave-gradient)"/>
            <defs>
              <linearGradient id="wave-gradient" x1="720" y1="0" x2="720" y2="120">
                <stop stopColor="#0a0a0a"/>
                <stop offset="1" stopColor="#0d1b2a"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* ===== SECTION 3: PARTNERS ===== */}
      <section
        id="partners-section"
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`audionexz-home__partners ${isVisible['partners-section'] ? 'audionexz-home__partners--visible' : ''}`}
      >
        <div className="audionexz-home__partners-container">
          <h4 className="audionexz-home__partners-subtitle">PARTNERS</h4>
          <h2 className="audionexz-home__partners-heading">
            Authorised <span className="audionexz-home__partners-heading--highlight">Distributors</span>
          </h2>
          <p className="audionexz-home__partners-description">
            Partnering with world-renowned audio brands to deliver uncompromising quality
          </p>

          <div className="audionexz-home__partners-marquee">
            <div className="audionexz-home__partners-track">
              {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div key={index} className="audionexz-home__partners-logo-wrapper">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="audionexz-home__partners-logo"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="audionexz-home__partners-marquee audionexz-home__partners-marquee--reverse">
            <div className="audionexz-home__partners-track audionexz-home__partners-track--reverse">
              {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div key={index} className="audionexz-home__partners-logo-wrapper">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="audionexz-home__partners-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: RECENT PROJECTS ===== */}
      <section
        id="projects-section"
        ref={(el) => (sectionRefs.current[2] = el)}
        className={`audionexz-home__projects ${isVisible['projects-section'] ? 'audionexz-home__projects--visible' : ''}`}
      >
        <div className="audionexz-home__projects-header">
          <div className="audionexz-home__projects-header-content">
            <h4 className="audionexz-home__projects-subtitle">PORTFOLIO</h4>
            <h2 className="audionexz-home__projects-heading">
              Our Recent <span className="audionexz-home__projects-heading--highlight">Projects</span>
            </h2>
          </div>
          <div className="audionexz-home__projects-header-line"></div>
        </div>

        <div className="audionexz-home__projects-slider">
          <div className="audionexz-home__projects-track">
            {[...projects, ...projects].map((project, index) => (
              <div key={index} className="audionexz-home__projects-card">
                <div className="audionexz-home__projects-card-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="audionexz-home__projects-card-image"
                  />
                  <div className="audionexz-home__projects-card-overlay">
                    <button className="audionexz-home__projects-card-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="audionexz-home__projects-card-content">
                  <h3 className="audionexz-home__projects-card-name">{project.name}</h3>
                  <p className="audionexz-home__projects-card-place">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {project.place}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: TESTIMONIALS ===== */}
      <section
        id="testimonials-section"
        ref={(el) => (sectionRefs.current[3] = el)}
        className={`audionexz-home__testimonials ${isVisible['testimonials-section'] ? 'audionexz-home__testimonials--visible' : ''}`}
      >
        <div className="audionexz-home__testimonials-bg">
          <div className="audionexz-home__testimonials-bg-circle audionexz-home__testimonials-bg-circle--1"></div>
          <div className="audionexz-home__testimonials-bg-circle audionexz-home__testimonials-bg-circle--2"></div>
        </div>

        <div className="audionexz-home__testimonials-container">
          <h4 className="audionexz-home__testimonials-subtitle">TESTIMONIALS</h4>
          <h2 className="audionexz-home__testimonials-heading">
            Client <span className="audionexz-home__testimonials-heading--highlight">Testimonials</span>
          </h2>
          <p className="audionexz-home__testimonials-description">
            Hear what our valued clients have to say about their experience with Audionexz
          </p>

          <div className="audionexz-home__testimonials-slider">
            <div className="audionexz-home__testimonials-track">
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="audionexz-home__testimonials-card">
                  <div className="audionexz-home__testimonials-card-quote">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="audionexz-home__testimonials-card-text">{testimonial.text}</p>
                  <div className="audionexz-home__testimonials-card-author">
                    <div className="audionexz-home__testimonials-card-avatar">
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    </div>
                    <div className="audionexz-home__testimonials-card-info">
                      <h4 className="audionexz-home__testimonials-card-name">{testimonial.name}</h4>
                      <p className="audionexz-home__testimonials-card-role">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="audionexz-home__testimonials-card-rating">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Home;