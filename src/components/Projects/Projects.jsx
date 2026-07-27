import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import Footer from "../Footer/Footer.jsx";

const Projects = () => {
  const navigate = useNavigate();
  const projectRefs = useRef([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("anxProjects--visible");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".anxProjects__animate");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Helper function for image paths
  const getImagePath = (path) => {
    const base = import.meta.env.BASE_URL || "/";
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `${base}${cleanPath}`;
  };

  // Projects Data - UPDATED with new features and projects
  const projects = [
    {
      id: 1,
      name: "Room For Squares Studios",
      location: "Hrick Sengupta",
      category: "Recording Studio",
      year: "2025",
      description:
        "A state-of-the-artmusic Jampad featuring Yamaha monitors, custom acoustic panels, and an SSL console. This project showcases our expertise in creating professional-grade recording environments that inspire creativity while delivering pristine audio quality.",
      features: ["Yamaha Monitors", "Custom Acoustics", "SSL Console"],
      image: getImagePath("assets/Room_for_squares.png"),
    },
    {
      id: 2,
      name: "KRG Kreative Studio",
      location: "Karshni Raj Gupta",
      category: "Recording Studio",
      year: "2025",
      description:
        "An innovative music production facility designed for modern artists. Featuring custom-built acoustics, an immersive Dolby Atmos 9.1.6 home theater system, Denon systems, and premium Genelec speakers. The space seamlessly blends technical excellence with artistic inspiration.",
      features: [
        "Custom Acoustics",
        "Atmos 9.1.6",
        "Denon Systems",
        "Genelec Speakers",
      ],
      image: getImagePath("assets/KRG_Kreative_studio_Kashni_raj_gupta.jpeg"),
    },
    {
      id: 3,
      name: "SunShine Studio",
      location: "Suraj Nag",
      category: "Recording Studio",
      year: "2024",
      description:
        "A comprehensive post-production suite for mixing and mastering. Equipped with EVE Audio speakers, UAD Audio Interface, and Genelec monitors. Custom tuning and acoustics designed specifically for critical mixing and mastering work.",
      features: [
        "EVE Audio Speakers",
        "UAD Audio Interface",
        "Genelec Monitors",
        "Mixing & Mastering",
      ],
      image: getImagePath("assets/Sunshine_studio_.jpeg"),
    },
    {
      id: 4,
      name: "Niyogi Studio",
      location: "Nilabjo Niyogi",
      category: "Recording Studio",
      year: "2025",
      description:
        "A precision mastering environment built to the highest international standards. Features RME Audio Interface and premium analog hardware processing. Every detail was crafted for critical listening and audio perfection.",
      features: ["RME Audio Interface", "Analog Hardware", "Reference Grade"],
      image: getImagePath("assets/Nilabjo_Niyogi_studio_Niyogi.jpeg"),
    },
    {
      id: 5,
      name: "JMR Music Studio",
      location: "Jyotirmoy Roy",
      category: "Recording Studio",
      year: "2024",
      description:
        "A world-class recording facility featuring a 7.2.4 Adam Speakers system including S3H, A77H, A7V monitors and Adam Subwoofers. Equipped with premium Manley gear including Manley Gold Microphone, Manley Massive Passive EQ, Manley Voxbox, and Manley Pultec. The perfect space for professional audio production.",
      features: [
        "7.2.4 Adam Speakers",
        "Manley Gold Mic",
        "Manley Massive Passive",
        "Manley Voxbox",
        "Manley Pultec",
      ],
      image: getImagePath("assets/JMR_Music_Studio.jpeg"),
    },
    {
      id: 6,
      name: "Sound Of Silence",
      location: "Chanchal Roy",
      category: "Recording Studio",
      year: "2025",
      description:
        "A modern production suite featuring Adam A77X monitors and Neumann TLM 107 microphone. Custom-built acoustics designed for optimal sound quality and creative workflow.",
      features: ["Adam A77X", "Neumann TLM 107", "Custom Acoustics"],
      image: getImagePath("assets/Chanchal_Roy_Studio_Sound_Of_silence.jpeg"),
    },
    {
      id: 7,
      name: "Blooper House Studios",
      location: "Kolkata",
      category: "Recording Studio",
      year: "2026",
      description:
        "A cutting-edge Dolby Atmos mixing facility with 7.2.4 configuration using premium Neumann speakers. Powered by Antelope Audio Orion 32 interface, Synergy Core with MRC processing. Custom-built acoustics designed specifically for Dolby Atmos movie mixing and mastering.",
      features: [
        "7.2.4 Dolby Atmos",
        "Neumann Speakers",
        "Antelope Orion 32",
        "Synergy Core MRC",
        "Atmos Mixing",
      ],
      image: getImagePath("assets/Bloopers_house.jpeg"),
    },
    {
      id: 8,
      name: "Vinayaka Bar & Pub",
      location: "Kolkata",
      category: "Commercial",
      year: "2024",
      description:
        "Professional soundproofing and sound installation project for a premium bar and pub. Complete acoustic treatment including sound isolation, noise control, and high-quality sound system installation for an immersive entertainment experience.",
      features: ["Sound Proofing", "Sound Installation", "Acoustic Treatment"],
      image: getImagePath("assets/Vinayaka_Bar_&_Pub.jpeg"),
    },
    {
      id: 9,
      name: "Karma House Goa Club",
      location: "GOA",
      category: "Coming Soon",
      year: "2026",
    },
  ];
  // data is added
  // Stats Data
  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "15+", label: "Cities Covered" },
    { number: "100%", label: "Commitment to Excellence" },
    { number: "7+", label: "Years Experience" },
  ];

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleImageError = (e) => {
    e.target.style.display = "none";
    e.target.parentElement.classList.add("anxProjects__cardImagePlaceholder");
  };

  return (
    <>
      <div className="anxProjects">
        {/* ===== HERO SECTION ===== */}
        <section className="anxProjects__hero">
          <div className="anxProjects__heroBg">
            <div className="anxProjects__heroGradient"></div>
            <div className="anxProjects__heroPattern"></div>
            <div className="anxProjects__heroParticles">
              {[...Array(40)].map((_, i) => (
                <span key={i} className="anxProjects__heroParticle"></span>
              ))}
            </div>
          </div>

          <div className="anxProjects__heroContent">
            <div className="anxProjects__heroBadge anxProjects__animate">
              <span className="anxProjects__heroBadgeIcon">🎨</span>
              <span className="anxProjects__heroBadgeText">Our Portfolio</span>
            </div>

            <h1 className="anxProjects__heroTitle anxProjects__animate">
              Our{" "}
              <span className="anxProjects__heroTitleHighlight">Projects</span>
            </h1>

            <p className="anxProjects__heroSubtitle anxProjects__animate">
              Explore our portfolio of world-class recording studios,
              post-production facilities, and acoustic spaces that we've
              designed and built across India.
            </p>

            <div className="anxProjects__heroDivider anxProjects__animate"></div>

            {/* Stats in Hero */}
            <div className="anxProjects__heroStats anxProjects__animate">
              {stats.map((stat, index) => (
                <div key={index} className="anxProjects__heroStatItem">
                  <span className="anxProjects__heroStatNumber">
                    {stat.number}
                  </span>
                  <span className="anxProjects__heroStatLabel">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
        </section>

        {/* ===== PROJECTS GRID SECTION ===== */}
        <section className="anxProjects__portfolio">
          <div className="anxProjects__portfolioContainer">
            {/* Section Header */}
            <div className="anxProjects__portfolioHeader anxProjects__animate">
              <h4 className="anxProjects__sectionSubtitle">FEATURED WORK</h4>
              <h2 className="anxProjects__sectionTitle">
                Studio{" "}
                <span className="anxProjects__sectionTitleHighlight">
                  Transformations
                </span>
              </h2>
              <p className="anxProjects__sectionDescription">
                Each project represents our commitment to acoustic excellence
                and innovative design
              </p>
            </div>

            {/* Projects Grid */}
            <div className="anxProjects__grid">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className={`anxProjects__card anxProjects__animate anxProjects__card--${index % 2 === 0 ? "left" : "right"}`}
                  style={{
                    "--delay": `${index * 0.15}s`,
                    "--accent": project.gradient,
                  }}
                  ref={(el) => (projectRefs.current[index] = el)}
                >
                  {/* Card Image */}
                  <div className="anxProjects__cardImageWrapper">
                    <div className="anxProjects__cardImageOverlay"></div>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="anxProjects__cardImage"
                      onError={handleImageError}
                      loading="lazy"
                    />
                    <div
                      className="anxProjects__cardImageGradient"
                      style={{ background: project.gradient }}
                    ></div>

                    {/* Category Badge */}
                    <div className="anxProjects__cardCategory">
                      <span>{project.category}</span>
                    </div>

                    {/* Year Badge */}
                    <div className="anxProjects__cardYear">
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="anxProjects__cardContent">
                    <div className="anxProjects__cardHeader">
                      <h3 className="anxProjects__cardTitle">{project.name}</h3>
                      <div className="anxProjects__cardLocation">
                        <svg
                          className="anxProjects__cardLocationIcon"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span>{project.location}</span>
                      </div>
                    </div>

                    <p className="anxProjects__cardDescription">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="anxProjects__cardFeatures">
                      {project.features.map((feature, idx) => (
                        <span key={idx} className="anxProjects__cardFeatureTag">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Card Footer */}
                    <div className="anxProjects__cardFooter">
                      <div className="anxProjects__cardNumber">
                        <span>{String(project.id).padStart(2, "0")}</span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Line */}
                  <div
                    className="anxProjects__cardAccent"
                    style={{ background: project.gradient }}
                  ></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROCESS SECTION ===== */}
        <section className="anxProjects__process">
          <div className="anxProjects__processContainer">
            <div className="anxProjects__processHeader anxProjects__animate">
              <h4 className="anxProjects__sectionSubtitle">HOW WE WORK</h4>
              <h2 className="anxProjects__sectionTitle">
                Our{" "}
                <span className="anxProjects__sectionTitleHighlight">
                  Process
                </span>
              </h2>
            </div>

            <div className="anxProjects__processGrid">
              <div
                className="anxProjects__processStep anxProjects__animate"
                style={{ "--delay": "0.1s" }}
              >
                <div className="anxProjects__processStepNumber">01</div>
                <div className="anxProjects__processStepIcon">💬</div>
                <h3 className="anxProjects__processStepTitle">Consultation</h3>
                <p className="anxProjects__processStepText">
                  We begin with understanding your vision, requirements, and
                  acoustic goals
                </p>
              </div>

              <div
                className="anxProjects__processStep anxProjects__animate"
                style={{ "--delay": "0.2s" }}
              >
                <div className="anxProjects__processStepNumber">02</div>
                <div className="anxProjects__processStepIcon">📐</div>
                <h3 className="anxProjects__processStepTitle">Design</h3>
                <p className="anxProjects__processStepText">
                  Our experts create detailed acoustic designs and 3D
                  visualizations
                </p>
              </div>

              <div
                className="anxProjects__processStep anxProjects__animate"
                style={{ "--delay": "0.3s" }}
              >
                <div className="anxProjects__processStepNumber">03</div>
                <div className="anxProjects__processStepIcon">🔧</div>
                <h3 className="anxProjects__processStepTitle">Build</h3>
                <p className="anxProjects__processStepText">
                  Professional installation with premium materials and equipment
                </p>
              </div>

              <div
                className="anxProjects__processStep anxProjects__animate"
                style={{ "--delay": "0.4s" }}
              >
                <div className="anxProjects__processStepNumber">04</div>
                <div className="anxProjects__processStepIcon">🎚️</div>
                <h3 className="anxProjects__processStepTitle">Calibrate</h3>
                <p className="anxProjects__processStepText">
                  Fine-tuning and acoustic calibration for perfect sound
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIAL SECTION ===== */}
        <section className="anxProjects__testimonial">
          <div className="anxProjects__testimonialContainer anxProjects__animate">
            <div className="anxProjects__testimonialQuote">
              <svg
                className="anxProjects__testimonialQuoteIcon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="anxProjects__testimonialText">
              "AUDIONEXZ transformed our vision into reality. The studio they
              built for us exceeds international standards and has become our
              creative sanctuary."
            </blockquote>
            <div className="anxProjects__testimonialAuthor">
              <div className="anxProjects__testimonialAuthorInfo">
                <h4 className="anxProjects__testimonialAuthorName">
                  Hrick Sengupta
                </h4>
                <p className="anxProjects__testimonialAuthorRole">
                  Founder, Room For Squares Studios
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="anxProjects__cta">
          <div className="anxProjects__ctaContainer anxProjects__animate">
            <div className="anxProjects__ctaGlow"></div>
            <div className="anxProjects__ctaContent">
              <h2 className="anxProjects__ctaTitle">
                Ready to Build Your Dream Studio?
              </h2>
              <p className="anxProjects__ctaText">
                Let's discuss your project and create something extraordinary
                together
              </p>
              <button
                className="anxProjects__ctaButton"
                onClick={handleContactClick}
              >
                <span>Start Your Project</span>
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
            <div className="anxProjects__ctaDecoration">
              <div className="anxProjects__ctaCircle anxProjects__ctaCircle--1"></div>
              <div className="anxProjects__ctaCircle anxProjects__ctaCircle--2"></div>
              <div className="anxProjects__ctaCircle anxProjects__ctaCircle--3"></div>
            </div>
          </div>
        </section>

        {/* ===== AUDIO VISUALIZER ===== */}
        <div className="anxProjects__visualizer">
          {[...Array(7)].map((_, i) => (
            <span
              key={i}
              className="anxProjects__visualizerBar"
              style={{
                height: `${Math.random() * 20 + 8}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            ></span>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Projects;
