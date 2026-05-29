import React, { useEffect, useRef } from "react";
import "./Consultancy.css";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const Consultancy = () => {
  const sectionRefs = useRef([]);
  const navigate = useNavigate();

  // Core services data
  const coreServices = [
    {
      id: 1,
      icon: "📐",
      title: "Room Acoustic Analysis",
      description:
        "Professional acoustic measurement and analysis to optimize your space for perfect sound reproduction.",
    },
    {
      id: 2,
      icon: "🎚️",
      title: "Equipment Consultation",
      description:
        "Expert guidance on selecting the best audio equipment tailored to your specific needs and budget.",
    },
    {
      id: 3,
      icon: "🔧",
      title: "Installation & Setup",
      description:
        "Complete installation services ensuring optimal equipment placement and configuration.",
    },
    {
      id: 4,
      icon: "🎯",
      title: "Acoustic Treatment",
      description:
        "Custom acoustic treatment solutions including panels, diffusers, and bass traps for superior sound control.",
    },
  ];

  // Specialty spaces
  const specialtySpaces = [
    {
      id: 1,
      name: "Recording Studios",
      icon: "🎙️",
      description:
        "Professional recording environments with pristine acoustics",
    },
    {
      id: 2,
      name: "Mixing Studios",
      icon: "🎛️",
      description: "Acoustically balanced spaces for critical listening",
    },
    {
      id: 3,
      name: "Auditoriums",
      icon: "🎭",
      description: "Large-scale acoustic solutions for performance venues",
    },
    {
      id: 4,
      name: "Broadcast Studios",
      icon: "📡",
      description: "Noise-controlled environments for broadcasting",
    },
    {
      id: 5,
      name: "Home Studios",
      icon: "🏠",
      description: "Personal recording spaces with professional results",
    },
    {
      id: 6,
      name: "Podcast Studios",
      icon: "🎧",
      description: "Intimate recording spaces for podcast production",
    },
    {
      id: 7,
      name: "Mastering Suites",
      icon: "💿",
      description: "Ultra-precise acoustic environments for mastering",
    },
    {
      id: 8,
      name: "Live Rooms",
      icon: "🎸",
      description: "Dynamic spaces for live instrument recording",
    },
  ];

  // Service process
  const processSteps = [
    {
      id: 1,
      number: "01",
      title: "Initial Consultation",
      description:
        "We begin with a comprehensive discussion to understand your vision, requirements, and budget constraints.",
      icon: "💬",
    },
    {
      id: 2,
      number: "02",
      title: "Acoustic Assessment",
      description:
        "Our team conducts detailed measurements and analysis of your space using advanced acoustic testing equipment.",
      icon: "📊",
    },
    {
      id: 3,
      number: "03",
      title: "Custom Design",
      description:
        "We create tailored acoustic treatment plans and equipment recommendations specific to your needs.",
      icon: "✏️",
    },
    {
      id: 4,
      number: "04",
      title: "Equipment Sourcing",
      description:
        "Access to premium audio equipment from world-leading manufacturers at competitive prices.",
      icon: "📦",
    },
    {
      id: 5,
      number: "05",
      title: "Professional Installation",
      description:
        "Expert installation ensuring optimal placement, wiring, and calibration of all equipment.",
      icon: "🔨",
    },
    {
      id: 6,
      number: "06",
      title: "Final Calibration",
      description:
        "Precise tuning and acoustic calibration to achieve perfect sound reproduction in your space.",
      icon: "🎯",
    },
    {
      id: 7,
      number: "07",
      title: "Training & Support",
      description:
        "Comprehensive training on equipment operation and ongoing technical support.",
      icon: "🎓",
    },
    {
      id: 8,
      number: "08",
      title: "Maintenance",
      description:
        "Regular maintenance programs to keep your studio performing at its peak.",
      icon: "⚙️",
    },
  ];

  // What we offer
  const offerings = [
    {
      id: 1,
      title: "Acoustic Room Design",
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
      description:
        "Transform any space into an acoustically optimized environment. We analyze room dimensions, surfaces, and existing conditions to create custom treatment plans. Our designs incorporate proven acoustic principles with modern aesthetics, ensuring your studio not only sounds exceptional but looks professional too.",
      features: [
        "RT60 Analysis",
        "Modal Response Optimization",
        "Reflection Point Treatment",
        "Diffusion Strategy",
      ],
    },
    {
      id: 2,
      title: "Equipment Selection & Supply",
      image:
        "https://images.unsplash.com/photo-1519508234439-4f23643125c1?w=800&h=600&fit=crop",
      description:
        "Navigate the complex world of professional audio equipment with confidence. Our expert consultants help you select the perfect gear for your specific needs and budget. From microphones and preamps to monitors and interfaces, we provide access to premium equipment from industry-leading brands.",
      features: [
        "Brand Partnerships",
        "Equipment Testing",
        "Budget Optimization",
        "Future-Proof Solutions",
      ],
    },
    {
      id: 3,
      title: "Installation Services",
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
      description:
        "Professional installation is crucial for optimal performance. Our certified technicians handle every aspect of your studio setup, from acoustic panel mounting to complex wiring systems. We ensure proper equipment placement, cable management, and system integration for a clean, professional result.",
      features: [
        "Panel Installation",
        "Cable Management",
        "Equipment Mounting",
        "System Integration",
      ],
    },
    {
      id: 4,
      title: "Acoustic Treatment Solutions",
      image:
        "https://images.unsplash.com/photo-1544216717-3bbf52512659?w=800&h=600&fit=crop",
      description:
        "Control your room's acoustics with precision-engineered treatment products. We supply and install a complete range of acoustic solutions including absorption panels, bass traps, diffusers, and ceiling clouds. All treatments are customized to address your specific acoustic challenges.",
      features: [
        "Absorption Panels",
        "Bass Traps",
        "Acoustic Diffusers",
        "Ceiling Clouds",
      ],
    },
    {
      id: 5,
      title: "Room Calibration & Tuning",
      image:
        "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&h=600&fit=crop",
      description:
        "Achieve reference-quality monitoring through precise acoustic calibration. Using advanced measurement tools and techniques, we tune your room and monitoring system to deliver accurate, uncolored sound reproduction. This critical step ensures you can trust what you hear.",
      features: [
        "Monitor Alignment",
        "Room EQ Optimization",
        "Sweet Spot Analysis",
        "Reference Testing",
      ],
    },
    {
      id: 6,
      title: "Ongoing Support",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop",
      description:
        "Your success is our priority. We provide comprehensive post-installation support including equipment training, troubleshooting assistance, and maintenance services. Our team is always available to answer questions and help you get the most from your studio investment.",
      features: [
        "Technical Support",
        "Equipment Training",
        "System Updates",
        "Preventive Maintenance",
      ],
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("anxConslt--visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".anxConslt__animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleNavigateToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="anxConslt">
      {/* Animated Background */}
      <div className="anxConslt__bgAnimation">
        <div className="anxConslt__bgParticle anxConslt__bgParticle--1"></div>
        <div className="anxConslt__bgParticle anxConslt__bgParticle--2"></div>
        <div className="anxConslt__bgParticle anxConslt__bgParticle--3"></div>
        <div className="anxConslt__bgParticle anxConslt__bgParticle--4"></div>
        <div className="anxConslt__bgParticle anxConslt__bgParticle--5"></div>
      </div>

      {/* Hero Section */}
      <section className="anxConslt__hero">
        <div className="anxConslt__heroOverlay"></div>
        <div className="anxConslt__container">
          <div className="anxConslt__heroContent anxConslt__animate">
            <span className="anxConslt__heroBadge">
              <span className="anxConslt__heroBadgeIcon">🎵</span>
              Professional Audio Consultancy
            </span>
            <h1 className="anxConslt__heroTitle">
              Creating{" "}
              <span className="anxConslt__heroTitleHighlight">
                Perfect Acoustic
              </span>{" "}
              Environments
            </h1>
            <p className="anxConslt__heroSubtitle">
              Expert acoustic design, equipment consultation, and installation
              services for recording studios, auditoriums, and professional
              audio spaces. Transform your vision into sonic reality.
            </p>
            <div className="anxConslt__heroStats">
              <div className="anxConslt__heroStat">
                <span className="anxConslt__heroStatNumber">100+</span>
                <span className="anxConslt__heroStatLabel">
                  Projects Completed
                </span>
              </div>
              <div className="anxConslt__heroStat">
                <span className="anxConslt__heroStatNumber">7+</span>
                <span className="anxConslt__heroStatLabel">
                  Years Experience
                </span>
              </div>
              <div className="anxConslt__heroStat">
                <span className="anxConslt__heroStatNumber">100%</span>
                <span className="anxConslt__heroStatLabel">
                  Commitment to Quality
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="anxConslt__heroScroll">
          <span>Scroll to explore</span>
          <div className="anxConslt__heroScrollLine"></div>
        </div>
      </section>

      {/* Core Services */}
      <section className="anxConslt__coreServices">
        <div className="anxConslt__container">
          <div className="anxConslt__sectionHeader anxConslt__animate">
            <span className="anxConslt__sectionSubtitle">What We Do</span>
            <h2 className="anxConslt__sectionTitle">
              Core{" "}
              <span className="anxConslt__sectionTitleHighlight">Services</span>
            </h2>
            <p className="anxConslt__sectionDescription">
              Comprehensive acoustic solutions from concept to completion
            </p>
          </div>
          <div className="anxConslt__coreGrid">
            {coreServices.map((service, index) => (
              <div
                key={service.id}
                className="anxConslt__coreCard anxConslt__animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="anxConslt__coreCardGlow"></div>
                <div className="anxConslt__coreCardIcon">{service.icon}</div>
                <h3 className="anxConslt__coreCardTitle">{service.title}</h3>
                <p className="anxConslt__coreCardDescription">
                  {service.description}
                </p>
                <div className="anxConslt__coreCardLine"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Spaces */}
      <section className="anxConslt__specialty">
        <div className="anxConslt__container">
          <div className="anxConslt__sectionHeader anxConslt__animate">
            <span className="anxConslt__sectionSubtitle">Expertise</span>
            <h2 className="anxConslt__sectionTitle">
              Specialty{" "}
              <span className="anxConslt__sectionTitleHighlight">Spaces</span>
            </h2>
            <p className="anxConslt__sectionDescription">
              We design and optimize acoustic environments for various
              professional applications
            </p>
          </div>
          <div className="anxConslt__specialtyGrid">
            {specialtySpaces.map((space, index) => (
              <div
                key={space.id}
                className="anxConslt__specialtyCard anxConslt__animate"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="anxConslt__specialtyCardInner">
                  <div className="anxConslt__specialtyCardIcon">
                    {space.icon}
                  </div>
                  <h3 className="anxConslt__specialtyCardName">{space.name}</h3>
                  <p className="anxConslt__specialtyCardDescription">
                    {space.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="anxConslt__process">
        <div className="anxConslt__container">
          <div className="anxConslt__sectionHeader anxConslt__animate">
            <span className="anxConslt__sectionSubtitle">Our Approach</span>
            <h2 className="anxConslt__sectionTitle">
              How We{" "}
              <span className="anxConslt__sectionTitleHighlight">Work</span>
            </h2>
            <p className="anxConslt__sectionDescription">
              A systematic approach ensuring perfect results every time
            </p>
          </div>
          <div className="anxConslt__processTimeline">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="anxConslt__processStep anxConslt__animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="anxConslt__processStepNumber">
                  {step.number}
                </div>
                <div className="anxConslt__processStepIcon">{step.icon}</div>
                <div className="anxConslt__processStepContent">
                  <h3 className="anxConslt__processStepTitle">{step.title}</h3>
                  <p className="anxConslt__processStepDescription">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="anxConslt__processStepConnector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="anxConslt__offerings">
        <div className="anxConslt__container">
          <div className="anxConslt__sectionHeader anxConslt__animate">
            <span className="anxConslt__sectionSubtitle">
              Complete Solutions
            </span>
            <h2 className="anxConslt__sectionTitle">
              What We{" "}
              <span className="anxConslt__sectionTitleHighlight">Offer</span>
            </h2>
          </div>
          <div className="anxConslt__offeringsGrid">
            {offerings.map((offering, index) => (
              <div
                key={offering.id}
                className="anxConslt__offeringCard anxConslt__animate"
                ref={(el) => (sectionRefs.current[index] = el)}
              >
                <div className="anxConslt__offeringImageWrapper">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="anxConslt__offeringImage"
                    loading="lazy"
                  />
                  <div className="anxConslt__offeringImageOverlay"></div>
                </div>
                <div className="anxConslt__offeringContent">
                  <h3 className="anxConslt__offeringTitle">{offering.title}</h3>
                  <p className="anxConslt__offeringDescription">
                    {offering.description}
                  </p>
                  <div className="anxConslt__offeringFeatures">
                    {offering.features.map((feature, idx) => (
                      <span key={idx} className="anxConslt__offeringFeature">
                        <span className="anxConslt__offeringFeatureIcon">
                          ✓
                        </span>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="anxConslt__cta">
        <div className="anxConslt__container">
          <div className="anxConslt__ctaContent anxConslt__animate">
            <div className="anxConslt__ctaGlow"></div>
            <h2 className="anxConslt__ctaTitle">
              Ready to Build Your Dream Studio?
            </h2>
            <p className="anxConslt__ctaSubtitle">
              Let's create an acoustic environment that brings out the best in
              your work. Our team of experts is ready to help you achieve sonic
              perfection.
            </p>
            <button
              className="anxConslt__ctaButton"
              onClick={handleNavigateToContact}
            >
              <span>Start Your Project</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultancy;
