import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const getImagePath = (path) => {
    const base = import.meta.env.BASE_URL || "/";
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `${base}${cleanPath}`;
  };

  const heroSlides = [
    {
      id: 1,
      heading: "Recording Studios",
      subheading: "Where Sound Meets Perfection",
      image: getImagePath("/assets/homepage_pic.jpeg"),
    },
    {
      id: 2,
      heading: "Home Theatres",
      subheading: "Cinematic Experience at Home",
      image: getImagePath("/assets/home-theatre.jpg"),
    },
    {
      id: 3,
      heading: "Cafe and Restaurant",
      subheading: "Ambiance That Speaks Volumes",
      image: getImagePath("/assets/retaurant.jpg"),
    },
    {
      id: 4,
      heading: "Pubs and Lounges",
      subheading: "Immersive Nightlife Acoustics",
      image: getImagePath("/assets/pub.jpg"),
    },
    {
      id: 5,
      heading: "Banquets",
      subheading: "Grand Events, Perfect Sound",
      image: getImagePath("/assets/banquets.jpg"),
    },
    {
      id: 6,
      heading: "Hotels",
      subheading: "Luxury Meets Acoustic Excellence",
      image: getImagePath("/assets/hotels.jpg"),
    },
    {
      id: 7,
      heading: "Educational Institute",
      subheading: "Learning Spaces That Inspire",
      image: getImagePath("/assets/educational_Institute.jpg"),
    },
    {
      id: 8,
      heading: "Auditoriums",
      subheading: "Engineered for Every Performance",
      image: getImagePath("/assets/auditorium.jpg"),
    },
  ];

  const partnerLogos = [
    { id: 1, name: "Antelope", logo: getImagePath("/assets/antelope.jpg") },
    {
      id: 2,
      name: "Audio Technica",
      logo: getImagePath("/assets/audio-technica.png"),
    },
    {
      id: 3,
      name: "Audioease",
      logo: getImagePath("/assets/Audioease-Hero.png"),
    },
    { id: 4, name: "Audix", logo: getImagePath("/assets/audix-logo.png") },
    { id: 5, name: "Avid", logo: getImagePath("/assets/avid-logo-png.png") },
    {
      id: 6,
      name: "Behringer",
      logo: getImagePath("/assets/Behringer_Logo.png"),
    },
    { id: 7, name: "Beta Three", logo: getImagePath("/assets/beta-three.png") },
    {
      id: 8,
      name: "DB Technologies",
      logo: getImagePath("/assets/db-technologies.jpg"),
    },
    { id: 9, name: "Drawmer", logo: getImagePath("/assets/Drawmer.png") },
    { id: 10, name: "Eve Audio", logo: getImagePath("/assets/eve-audio.png") },
    { id: 11, name: "Genelec", logo: getImagePath("/assets/gelelec_logo.jpg") },
    { id: 12, name: "Hercules", logo: getImagePath("/assets/hercules.jpg") },
    { id: 13, name: "Heritage", logo: getImagePath("/assets/heritage.png") },
    { id: 14, name: "JBL", logo: getImagePath("/assets/JBL-Logo.svg.png") },
    {
      id: 15,
      name: "K&M",
      logo: getImagePath("/assets/KM_KoenigMeyer_Logo_RGB.jpg"),
    },
    { id: 16, name: "KRK", logo: getImagePath("/assets/krk-systems-logo.jpg") },
    { id: 17, name: "Lewitt", logo: getImagePath("/assets/lewitt.png") },
    {
      id: 18,
      name: "Lexicon",
      logo: getImagePath("/assets/lexicon-by-harman-logo-vector.png"),
    },
    {
      id: 19,
      name: "Universal Audio",
      logo: getImagePath("/assets/Logo-Universal-Audio-.jpg"),
    },
    { id: 20, name: "Manley", logo: getImagePath("/assets/MAN-MSLAM-4.jpg") },
    {
      id: 21,
      name: "Neumann",
      logo: getImagePath("/assets/neumann-berlin-logo-vector.png"),
    },
    {
      id: 22,
      name: "Prism Sound",
      logo: getImagePath("/assets/prism-sound.png"),
    },
    { id: 23, name: "RME", logo: getImagePath("/assets/RME.png") },
    {
      id: 24,
      name: "Rupert Neve",
      logo: getImagePath("/assets/Rupert-Neve-Logo.jpg"),
    },
    { id: 25, name: "Sennheiser", logo: getImagePath("/assets/senn.png") },
    {
      id: 26,
      name: "Slate Digital",
      logo: getImagePath("/assets/slate-digi.png"),
    },
    {
      id: 27,
      name: "SSL",
      logo: getImagePath("/assets/solid-state-logic.png"),
    },
    {
      id: 28,
      name: "Sound Reference",
      logo: getImagePath("/assets/sound-reference.png"),
    },
    { id: 29, name: "Tegeler", logo: getImagePath("/assets/tegeler.png") },
    {
      id: 30,
      name: "Telefunken",
      logo: getImagePath("/assets/telefunken.png"),
    },
    {
      id: 31,
      name: "Ultimate Support",
      logo: getImagePath("/assets/ultimate support.png"),
    },
    { id: 32, name: "Yamaha", logo: getImagePath("/assets/yamaha.png") },
  ];

  const projects = [
    {
      id: 1,
      name: "Room For Squares",
      place: "Hrick Sengupta",
      image: getImagePath("/assets/Room_for_squares.png"),
    },
    {
      id: 2,
      name: "Niyogi Studio",
      place: "Nilabjo Niyogi",
      image: getImagePath("/assets/Nilabjo_Niyogi_studio_Niyogi.jpeg"),
    },
    {
      id: 3,
      name: "Sunshine Studio",
      place: "Suraj Nag",
      image: getImagePath("/assets/Sunshine_studio_.jpeg"),
    },
    {
      id: 4,
      name: "JMR Studio",
      place: "Jyotirmoy Roy",
      image: getImagePath("/assets/JMR_Music_Studio.jpeg"),
    },
    {
      id: 5,
      name: "KRG Kreative Studio",
      place: "Kashni Raj",
      image: getImagePath("/assets/KRG_Kreative_studio_Kashni_raj_gupta.jpeg"),
    },
    {
      id: 6,
      name: "Sound Of Silence",
      place: "Chanchal Roy",
      image: getImagePath("/assets/Chanchal_Roy_Studio_Sound_Of_silence.jpeg"),
    },
    {
      id: 7,
      name: "Bloopers House Atmos",
      place: "Salt Lake, Kolkata",
      image: getImagePath("/assets/Bloopers_House_Studios.png"),
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Nepal Shaw",
      role: "Musician",
      avatar: getImagePath("/assets/Nepal_Shaw.jpeg"),
      text: "Audionexz transformed our studio into a world-class recording facility. The acoustic treatment is phenomenal!",
    },
    {
      id: 2,
      name: "Anupam Roy",
      role: "Vocalist, Music Director",
      avatar: getImagePath("/assets/Anupam_roy_studio_1.jpeg"),
      text: "Neobalad is nothing short of a musician's paradise — with its extraordinary acoustics, world-class equipment, and premium sound gear, it's a place where every note breathes life, and every melody finds its soul",
    },
    {
      id: 3,
      name: "Rathijit Bhattacharya",
      role: "Vocalist",
      avatar: getImagePath("/assets/Rathijit_BhattaCharya.jpeg"),
      text: "From premium equipment and flawless acoustics to stellar service and guidance — AudioNexz delivers an experience that every musician deserves.",
    },
    {
      id: 4,
      name: "Yuvaan De",
      role: "Vocalist",
      avatar: getImagePath("/assets/Yuvaan_De.jpeg"),
      text: "AudioNexz is a musician's haven — outstanding equipment, exceptional service, and expert guidance that truly elevates your musical journey",
    },
    {
      id: 5,
      name: "Emon Chakraborty",
      role: "Musician, Vocalist",
      avatar: getImagePath("/assets/Emon_chakraborty.jpeg"),
      text: "Neobalad Studio is pure magic — exceptional acoustics, premium gear, and an atmosphere that inspires greatness the moment you walk in.",
    },
    {
      id: 6,
      name: "Surojit Chatterjee",
      role: "Musician, Vocalist",
      avatar: getImagePath("/assets/Surojit_Chatterjee_singing.jpeg"),
      text: "My home theatre is now the envy of all my friends. Audionexz delivered beyond my dreams!",
    },
    {
      id: 7,
      name: "Sneha BhattaCharya",
      role: "Musician, Vocalist",
      avatar: getImagePath("/assets/Snehaa_Bhattacharya.jpeg"),
      text: "From the finest musical instruments to top-tier equipment, every purchase was a perfect note!",
    },
    {
      id: 8,
      name: "Srijit Mukherjee",
      role: "Film Director",
      avatar: getImagePath("/assets/Srijit_chatterjee_3.HEIC"),
      text: "The quality of work is unmatched. They truly understand the science of sound.",
    },
    {
      id: 9,
      name: "Shobhon Chatterjee",
      role: "Musician, Vocalist",
      avatar: getImagePath("/assets/Shobhon _chatterjee.jpeg"),
      text: "From concept to completion, the team was professional and delivered exceptional results.",
    },
    {
      id: 10,
      name: "Shamidh Mukherjee",
      role: "Vocalist, Music Director",
      avatar: getImagePath("/assets/Shamid_chatterjee_1.jpeg"),
      text: "Working with Audionexz was a game-changer for our production quality.",
    },
    {
      id: 11,
      name: "Shamayan Sarkar",
      role: "Musician, Vocalist",
      avatar: getImagePath("/assets/Shamayan_Sarkar.jpeg"),
      text: "Incredible attention to detail and passion for perfect sound. Truly the best in the industry!",
    },
    {
      id: 12,
      name: "Raja Chowdhury",
      role: "Musician, Guitarist",
      avatar: getImagePath("/assets/Raja_chowdhury_1.jpeg"),
      text: "The acoustic design transformed my practice room into a professional recording space.",
    },
    {
      id: 13,
      name: "Mr. Indradip Sengupta",
      role: "Music Composer",
      avatar: getImagePath("/assets/Mr_Indradip_sengupta_1.jpeg"),
      text: "Audionexz understands the needs of composers. My studio is now my creative sanctuary.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 },
    );
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isProjectModalOpen) {
        closeProjectModal();
      }
    };
    if (isProjectModalOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isProjectModalOpen]);

  const goToSlide = (index) => setCurrentSlide(index);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );

  const handleNavigateToAbout = () => navigate("/about");

  const handleTestimonialImageError = (e, name) => {
    e.target.src = `https://ui-avatars.com/api/?name=${name.replace(
      " ",
      "+",
    )}&size=300&background=1e90ff&color=fff&bold=true&font-size=0.4`;
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  const handleProjectModalBackdropClick = (e) => {
    if (e.target.classList.contains("audionexz-home__project-modal")) {
      closeProjectModal();
    }
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
                index === currentSlide
                  ? "audionexz-home__hero-slide--active"
                  : ""
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
                <h3 className="audionexz-home__hero-subheading">
                  {slide.subheading}
                </h3>
                <div className="audionexz-home__hero-cta"></div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="audionexz-home__hero-arrow audionexz-home__hero-arrow--left"
          onClick={prevSlide}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className="audionexz-home__hero-arrow audionexz-home__hero-arrow--right"
          onClick={nextSlide}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="audionexz-home__hero-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`audionexz-home__hero-indicator ${
                index === currentSlide
                  ? "audionexz-home__hero-indicator--active"
                  : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="audionexz-home__hero-scroll">
          <span>Scroll Down</span>
          <div className="audionexz-home__hero-scroll-mouse">
            <div className="audionexz-home__hero-scroll-wheel"></div>
          </div>
        </div>
      </section>

      {/* ===== NEW SECTION 1.5: SERVICES SHOWCASE ===== */}
      <section className="audionexz-home__services">
        <div className="audionexz-home__services-container">
          <div className="audionexz-home__services-grid">
            {/* Service 1: Architectural Acoustics */}
            <div className="audionexz-home__services-card">
              <div className="audionexz-home__services-icon">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 8L8 20V44L32 56L56 44V20L32 8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 32L8 20M32 32L56 20M32 32V56"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="32" cy="32" r="4" fill="currentColor" />
                  <path
                    d="M20 26L20 38M44 26L44 38"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="audionexz-home__services-title">
                Architectural Acoustics
              </h3>
            </div>

            {/* Service 2: Professional AV Integration */}
            <div className="audionexz-home__services-card">
              <div className="audionexz-home__services-icon">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8"
                    y="12"
                    width="48"
                    height="32"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M8 36H56" stroke="currentColor" strokeWidth="2" />
                  <rect
                    x="26"
                    y="44"
                    width="12"
                    height="8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 52H44"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="32"
                    cy="24"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M38 24H42M22 24H26"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M32 18V16M32 30V32"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="audionexz-home__services-title">
                Professional AV Integration
              </h3>
            </div>

            {/* Service 3: Immersive Audio Solutions */}
            <div className="audionexz-home__services-card">
              <div className="audionexz-home__services-icon">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="2 6"
                  />
                  <path
                    d="M32 8V16M32 48V56M8 32H16M48 32H56"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 16L22 22M42 42L48 48M48 16L42 22M22 42L16 48"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="audionexz-home__services-title">
                Immersive Audio Solutions
              </h3>
            </div>

            {/* Service 4: System Calibration */}
            <div className="audionexz-home__services-card">
              <div className="audionexz-home__services-icon">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M32 12V32L44 38"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 32H8M56 32H52M32 12V8M32 56V52"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <rect
                    x="28"
                    y="4"
                    width="8"
                    height="4"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="28"
                    y="56"
                    width="8"
                    height="4"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="4"
                    y="28"
                    width="4"
                    height="8"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="56"
                    y="28"
                    width="4"
                    height="8"
                    rx="1"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="audionexz-home__services-title">
                System Calibration
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: OUR STORY ===== */}
      <section
        id="story-section"
        ref={(el) => (sectionRefs.current[0] = el)}
        className={`audionexz-home__story ${
          isVisible["story-section"] ? "audionexz-home__story--visible" : ""
        }`}
      >
        <div className="audionexz-home__story-container">
          {/* LEFT: Content */}
          <div className="audionexz-home__story-content">
            <div className="audionexz-home__story-badge">
              <span className="audionexz-home__story-badge-icon">🎵</span>
              <span>Since 2020</span>
            </div>
            <h2 className="audionexz-home__story-heading">
              Our{" "}
              <span className="audionexz-home__story-heading--highlight">
                Story
              </span>
            </h2>
            <div className="audionexz-home__story-divider">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="audionexz-home__story-text">
              At Audionexz, we believe that exceptional sound has the power to
              transform spaces and elevate experiences. Founded with a passion
              for acoustic excellence, we've spent over a decade crafting
              bespoke audio environments that resonate with perfection. From
              intimate recording studios to grand auditoriums, our team of
              expert acousticians and designers collaborate to bring your sonic
              vision to life. We don't just build rooms; we engineer experiences
              that captivate, inspire, and endure. Our journey began with a
              simple belief: everyone deserves access to world-class acoustics.
              Today, we've partnered with leading global audio brands and
              completed over 100+ projects across India, each one a testament to
              our unwavering commitment to sonic excellence.
            </p>
            <p className="audionexz-home__story-text">
              Our journey began with a simple belief...
            </p>
            <button
              className="audionexz-home__story-btn"
              onClick={handleNavigateToAbout}
            >
              <span>For More</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* RIGHT: Visual */}
          <div className="audionexz-home__story-visual">
            <div className="audionexz-home__story-quote">
              <p className="audionexz-home__story-quote-text">
                "Sound is the vocabulary of nature, and we are its eloquent
                translators."
              </p>
            </div>
            <div className="audionexz-home__story-image-wrapper">
              <img
                src={getImagePath("/assets/studio_replica.jpg")}
                alt="Audionexz Studio"
                className="audionexz-home__story-image"
                onError={(e) => {
                  e.target.style.background =
                    "linear-gradient(135deg, #0d1b2a 0%, #1b2838 100%)";
                  e.target.style.border = "1px solid rgba(0, 212, 255, 0.3)";
                }}
              />
              <div className="audionexz-home__story-image-frame"></div>
            </div>
            <div className="audionexz-home__story-stats">
              <div className="audionexz-home__story-stat">
                <span className="audionexz-home__story-stat-number">100+</span>
                <span className="audionexz-home__story-stat-label">
                  Projects
                </span>
              </div>
              <div className="audionexz-home__story-stat">
                <span className="audionexz-home__story-stat-number">7+</span>
                <span className="audionexz-home__story-stat-label">Years</span>
              </div>
            </div>
          </div>
        </div>
        <div className="audionexz-home__story-wave">
          <svg viewBox="0 0 1440 120" fill="none">
            <path
              d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
              fill="url(#wave-gradient)"
            />
            <defs>
              <linearGradient
                id="wave-gradient"
                x1="720"
                y1="0"
                x2="720"
                y2="120"
              >
                <stop stopColor="#0a0a0a" />
                <stop offset="1" stopColor="#0d1b2a" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* ===== NEW SECTION: OUR VENTURES ===== */}
      <section className="audionexz-home__ventures">
        <div className="audionexz-home__ventures-container">
          <h2 className="audionexz-home__ventures-heading">
            Our{" "}
            <span className="audionexz-home__ventures-heading--highlight">
              Ventures
            </span>
          </h2>
          <div className="audionexz-home__ventures-cards">
            {/* Card 1 - Perficient Acoustix */}
            <div className="audionexz-home__ventures-card">
              <img
                src={getImagePath("/assets/perficient-logo.png")}
                alt="Perficient Acoustix"
                className="audionexz-home__ventures-logo"
              />
              <p className="audionexz-home__ventures-description">
                End to end acoustic engineering &amp; precision audio
                environment
                <br />
                Recording studios &mdash; Auditorium
              </p>
              <div className="audionexz-home__ventures-socials">
                <a
                  href="https://facebook.com/perficientacoustix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="audionexz-home__ventures-social-link"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/perficientacoustix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="audionexz-home__ventures-social-link"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 2 - Das Music Kolkata */}
            <div className="audionexz-home__ventures-card">
              <img
                src={getImagePath("/assets/dasmusic-logo.png")}
                alt="Das Music Kolkata"
                className="audionexz-home__ventures-logo"
              />
              <p className="audionexz-home__ventures-description">
                One stop solutions for all kinds of Instruments.
              </p>
              <div className="audionexz-home__ventures-socials">
                <a
                  href="https://facebook.com/dasmusickolkata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="audionexz-home__ventures-social-link"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/dasmusickolkata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="audionexz-home__ventures-social-link"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: PARTNERS (unchanged) ===== */}
      <section
        id="partners-section"
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`audionexz-home__partners ${
          isVisible["partners-section"]
            ? "audionexz-home__partners--visible"
            : ""
        }`}
      >
        <div className="audionexz-home__partners-container">
          <h4 className="audionexz-home__partners-subtitle">PARTNERS</h4>
          <h2 className="audionexz-home__partners-heading">
            Authorised{" "}
            <span className="audionexz-home__partners-heading--highlight">
              Dealers
            </span>
          </h2>
          <p className="audionexz-home__partners-description">
            Partnering with world-renowned audio brands to deliver
            uncompromising quality
          </p>
          <div className="audionexz-home__partners-marquee">
            <div className="audionexz-home__partners-track">
              {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div
                  key={index}
                  className="audionexz-home__partners-logo-wrapper"
                >
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
                <div
                  key={index}
                  className="audionexz-home__partners-logo-wrapper"
                >
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

      {/* ===== SECTION 4: PROJECTS ===== */}
      <section
        id="projects-section"
        ref={(el) => (sectionRefs.current[2] = el)}
        className={`audionexz-home__projects ${
          isVisible["projects-section"]
            ? "audionexz-home__projects--visible"
            : ""
        }`}
      >
        {/* ... (projects content unchanged) ... */}
        <div className="audionexz-home__projects-header">
          <div className="audionexz-home__projects-header-content">
            <h4 className="audionexz-home__projects-subtitle">PORTFOLIO</h4>
            <h2 className="audionexz-home__projects-heading">
              Our Recent{" "}
              <span className="audionexz-home__projects-heading--highlight">
                Projects
              </span>
            </h2>
          </div>
          <div className="audionexz-home__projects-header-line"></div>
        </div>

        <div className="audionexz-home__projects-slider">
          <div className="audionexz-home__projects-track">
            {[...projects, ...projects].map((project, index) => (
              <div key={index} className="audionexz-home__projects-card">
                <div
                  className="audionexz-home__projects-card-image-wrapper"
                  onClick={() => openProjectModal(project)}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="audionexz-home__projects-card-image"
                  />
                  <div className="audionexz-home__projects-card-overlay">
                    <div className="audionexz-home__projects-card-view-content">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>View Full Image</span>
                    </div>
                  </div>
                </div>
                <div className="audionexz-home__projects-card-content">
                  <h3 className="audionexz-home__projects-card-name">
                    {project.name}
                  </h3>
                  <p className="audionexz-home__projects-card-place">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="14"
                      height="14"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    {project.place}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECT MODAL ===== */}
      {isProjectModalOpen && selectedProject && (
        <div
          className="audionexz-home__project-modal"
          onClick={handleProjectModalBackdropClick}
        >
          <div className="audionexz-home__project-modal-content">
            <button
              className="audionexz-home__project-modal-close"
              onClick={closeProjectModal}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="audionexz-home__project-modal-image-container">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="audionexz-home__project-modal-image"
              />
            </div>
            <div className="audionexz-home__project-modal-info">
              <h3 className="audionexz-home__project-modal-name">
                {selectedProject.name}
              </h3>
              <p className="audionexz-home__project-modal-place">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="16"
                  height="16"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {selectedProject.place}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ===== SECTION 5: TESTIMONIALS ===== */}
      <section
        id="testimonials-section"
        ref={(el) => (sectionRefs.current[3] = el)}
        className={`audionexz-home__testimonials ${
          isVisible["testimonials-section"]
            ? "audionexz-home__testimonials--visible"
            : ""
        }`}
      >
        {/* ... (testimonials content unchanged) ... */}
        <div className="audionexz-home__testimonials-bg">
          <div className="audionexz-home__testimonials-bg-circle audionexz-home__testimonials-bg-circle--1"></div>
          <div className="audionexz-home__testimonials-bg-circle audionexz-home__testimonials-bg-circle--2"></div>
          <div className="audionexz-home__testimonials-bg-circle audionexz-home__testimonials-bg-circle--3"></div>
        </div>

        <div className="audionexz-home__testimonials-container">
          <h4 className="audionexz-home__testimonials-subtitle">
            TESTIMONIALS
          </h4>
          <h2 className="audionexz-home__testimonials-heading">
            Client{" "}
            <span className="audionexz-home__testimonials-heading--highlight">
              Testimonials
            </span>
          </h2>

          <div className="audionexz-home__testimonials-slider">
            <div className="audionexz-home__testimonials-track">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="audionexz-home__testimonials-card">
                  <div className="audionexz-home__testimonials-card-image-section">
                    <div className="audionexz-home__testimonials-card-image-wrapper">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="audionexz-home__testimonials-card-image"
                        onError={(e) =>
                          handleTestimonialImageError(e, testimonial.name)
                        }
                      />
                      <div className="audionexz-home__testimonials-card-image-overlay"></div>
                    </div>
                    <div className="audionexz-home__testimonials-card-image-glow"></div>
                  </div>
                  <div className="audionexz-home__testimonials-card-content">
                    <div className="audionexz-home__testimonials-card-quote">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="audionexz-home__testimonials-card-text">
                      {testimonial.text}
                    </p>
                    <div className="audionexz-home__testimonials-card-author">
                      <div className="audionexz-home__testimonials-card-author-info">
                        <h4 className="audionexz-home__testimonials-card-name">
                          {testimonial.name}
                        </h4>
                        <p className="audionexz-home__testimonials-card-role">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="audionexz-home__testimonials-card-rating">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="audionexz-home__testimonials-card-border"></div>
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
