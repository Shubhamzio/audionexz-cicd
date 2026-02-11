import React, { useState, useEffect, useRef } from 'react';
import './Services.css';
import Footer from '../Footer/Footer';

const Service = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroRef = useRef(null);
  // const cursorGlowRef = useRef(null);

  const categories = [
    { id: 'all', name: 'All', icon: '◎' },
    { id: 'acoustic', name: 'Acoustic', icon: '◈' },
    { id: 'studio', name: 'Studio', icon: '◉' },
    { id: 'commercial', name: 'Commercial', icon: '◆' },
    { id: 'residential', name: 'Residential', icon: '◇' },
    { id: 'consulting', name: 'Consulting', icon: '◊' }
  ];

  const services = [
    {
      id: 1,
      category: 'acoustic',
      title: 'Acoustic Treatment',
      tagline: 'Precision Sound Architecture',
      description: 'Custom-engineered acoustic panels, diffusers, and bass traps designed through computational analysis for pristine sound environments.',
      highlights: ['RT60 Optimization', 'Flutter Echo Elimination', 'Custom Panel Fabrication'],
      investment: '₹4,00,000',
      timeline: '2–4 Weeks',
      metric: '99.2% Accuracy',
      gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)'
    },
    {
      id: 2,
      category: 'studio',
      title: 'Recording Studio Design',
      tagline: 'World-Class Production Rooms',
      description: 'End-to-end studio architecture — from isolation engineering to control room tuning — meeting international broadcast standards.',
      highlights: ['Control Room Acoustics', 'Floating Floor Systems', 'HVAC Noise Isolation'],
      investment: '₹40,00,000',
      timeline: '6–8 Weeks',
      metric: 'NC-15 Rated',
      gradient: 'linear-gradient(135deg, #0f0f23, #1a0a2e)'
    },
    {
      id: 3,
      category: 'commercial',
      title: 'Corporate Acoustic Design',
      tagline: 'Productivity Through Silence',
      description: 'Strategic acoustic planning for open offices, boardrooms, and collaborative zones — reducing noise distraction by up to 65%.',
      highlights: ['Sound Masking Integration', 'Privacy Index Enhancement', 'Zonal Acoustic Planning'],
      investment: '₹12,00,000',
      timeline: '3–5 Weeks',
      metric: 'STC 55+ Rating',
      gradient: 'linear-gradient(135deg, #1a1a1a, #0d1b2a)'
    },
    {
      id: 4,
      category: 'residential',
      title: 'Home Cinema & Theatre',
      tagline: 'Cinematic Immersion at Home',
      description: 'Dolby Atmos certified home theatre design with calibrated acoustics, 4K laser projection, and automated ambient control.',
      highlights: ['7.1.4 Atmos Configuration', 'Acoustic Room Calibration', 'Smart Automation'],
      investment: '₹20,00,000',
      timeline: '2–3 Weeks',
      metric: 'THX Certified',
      gradient: 'linear-gradient(135deg, #0a0a0a, #1a0a1e)'
    },
    {
      id: 5,
      category: 'commercial',
      title: 'Hospitality Acoustics',
      tagline: 'Ambiance by Design',
      description: 'Acoustic engineering for restaurants, hotels, and lounges — balancing speech intelligibility with curated sonic atmospheres.',
      highlights: ['Ambient Noise Sculpting', 'Kitchen Sound Isolation', 'Multi-Zone Audio'],
      investment: '₹8,00,000',
      timeline: '2–3 Weeks',
      metric: 'STI > 0.65',
      gradient: 'linear-gradient(135deg, #1a1a1a, #2d1b00)'
    },
    {
      id: 6,
      category: 'acoustic',
      title: 'Auditorium & Performance Halls',
      tagline: 'Architecture Meets Acoustics',
      description: 'Large-format venue design with variable acoustic systems, ensuring every seat delivers an immersive auditory experience.',
      highlights: ['Variable Acoustic Systems', 'Stage Reflector Design', 'Audience Area Tuning'],
      investment: '₹80,00,000',
      timeline: '10–14 Weeks',
      metric: 'C80 Optimized',
      gradient: 'linear-gradient(135deg, #0f0f0f, #1e0a0a)'
    },
    {
      id: 7,
      category: 'consulting',
      title: 'Acoustic Consulting & Analysis',
      tagline: 'Data-Driven Sound Intelligence',
      description: 'Comprehensive acoustic assessments with 3D simulation modeling, regulatory compliance audits, and actionable design recommendations.',
      highlights: ['3D Acoustic Modeling', 'Noise Impact Assessment', 'Regulatory Compliance'],
      investment: '₹1,50,000 / day',
      timeline: 'Project Based',
      metric: 'ISO 3382 Compliant',
      gradient: 'linear-gradient(135deg, #111122, #0a1a1a)'
    },
    {
      id: 8,
      category: 'studio',
      title: 'Podcast & Broadcast Studio',
      tagline: 'Broadcast-Grade Audio Spaces',
      description: 'Purpose-built podcast and broadcast environments with vocal-optimized acoustics, remote recording infrastructure, and live streaming capability.',
      highlights: ['Vocal Booth Engineering', 'Multi-Host Configuration', 'Live Stream Integration'],
      investment: '₹6,50,000',
      timeline: '1–2 Weeks',
      metric: 'Noise Floor < -60dB',
      gradient: 'linear-gradient(135deg, #0a0a1e, #1a1a0a)'
    },
    {
      id: 9,
      category: 'residential',
      title: 'Music Practice Room',
      tagline: 'Your Personal Sound Sanctuary',
      description: 'Soundproofed practice spaces with instrument-specific acoustic tuning, integrated recording capability, and adjustable diffusion.',
      highlights: ['Full Soundproofing', 'Instrument-Specific Tuning', 'Recording Ready'],
      investment: '₹10,00,000',
      timeline: '2–3 Weeks',
      metric: 'STC 60+ Isolation',
      gradient: 'linear-gradient(135deg, #1a0a1a, #0a1a0f)'
    }
  ];

  const processSteps = [
    { num: '01', title: 'Discovery', desc: 'Deep-dive consultation to map your acoustic vision, spatial constraints, and performance targets.' },
    { num: '02', title: 'Analysis', desc: 'On-site acoustic measurement suite — RT60, frequency response, noise floor, and structural assessment.' },
    { num: '03', title: 'Design', desc: '3D acoustic modeling with ray-tracing simulations and material performance optimization.' },
    { num: '04', title: 'Build', desc: 'Precision installation by certified acoustic engineers with real-time quality monitoring.' },
    { num: '05', title: 'Calibrate', desc: 'Post-installation measurement, fine-tuning, and performance certification against design targets.' },
    { num: '06', title: 'Sustain', desc: 'Ongoing acoustic health monitoring, seasonal recalibration, and priority support access.' }
  ];

  const metrics = [
    { value: '88+', label: 'Projects Delivered' },
    { value: '4+', label: 'Years of Expertise' },
    { value: '98%', label: 'Client Retention' },
    { value: '50+', label: 'Acoustic Engineers' }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('srv-visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.srv-animate');
    elements.forEach(el => observer.observe(el));

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="srv-wrapper">
      {/* Cursor Glow */}
      <div
        className="srv-cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      {/* Ambient Background */}
      <div className="srv-ambient-bg">
        <div className="srv-noise-overlay" />
        <div className="srv-gradient-orb srv-orb-1" />
        <div className="srv-gradient-orb srv-orb-2" />
        <div className="srv-gradient-orb srv-orb-3" />
        <div className="srv-mesh-grid" />
      </div>

      {/* Hero */}
      <section className="srv-hero" ref={heroRef}>
        <div className="srv-hero-inner">
          <div className="srv-hero-badge srv-animate">
            <span className="srv-badge-dot" />
            Acoustic Engineering Excellence
          </div>
          <h1 className="srv-hero-title srv-animate">
            <span className="srv-title-row">We Engineer</span>
            <span className="srv-title-row srv-title-accent">Perfect Sound</span>
          </h1>
          <p className="srv-hero-desc srv-animate">
            India's premier acoustic design studio — transforming architectural spaces
            into precision-tuned sonic environments through science, artistry, and
            15+ years of engineering mastery.
          </p>
          <div className="srv-hero-metrics srv-animate">
            {metrics.map((m, i) => (
              <div key={i} className="srv-hero-metric">
                <span className="srv-metric-value">{m.value}</span>
                <span className="srv-metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="srv-hero-scroll-indicator">
          <div className="srv-scroll-line" />
        </div>
      </section>

      {/* Filter */}
      <section className="srv-filter-section">
        <div className="srv-container">
          <div className="srv-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`srv-filter-chip ${activeCategory === cat.id ? 'srv-chip-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="srv-chip-icon">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="srv-grid-section">
        <div className="srv-container">
          <div className="srv-section-header srv-animate">
            <span className="srv-section-label">Services</span>
            <h2 className="srv-section-heading">What We Deliver</h2>
          </div>
          <div className="srv-card-grid">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="srv-card srv-animate"
                style={{ animationDelay: `${index * 0.08}s` }}
                onClick={() => openModal(service)}
              >
                <div className="srv-card-accent" style={{ background: service.gradient }} />
                <div className="srv-card-inner">
                  <div className="srv-card-top">
                    <span className="srv-card-cat">{service.category}</span>
                    <span className="srv-card-metric">{service.metric}</span>
                  </div>
                  <h3 className="srv-card-title">{service.title}</h3>
                  <p className="srv-card-tagline">{service.tagline}</p>
                  <p className="srv-card-desc">{service.description}</p>
                  <div className="srv-card-highlights">
                    {service.highlights.map((h, i) => (
                      <span key={i} className="srv-highlight-pill">{h}</span>
                    ))}
                  </div>
                  <div className="srv-card-bottom">
                    <div className="srv-card-price">
                      <span className="srv-price-label">Investment</span>
                      <span className="srv-price-value">{service.investment}</span>
                    </div>
                    <div className="srv-card-timeline">
                      <span className="srv-timeline-label">Timeline</span>
                      <span className="srv-timeline-value">{service.timeline}</span>
                    </div>
                  </div>
                </div>
                <div className="srv-card-hover-border" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="srv-process-section">
        <div className="srv-container">
          <div className="srv-section-header srv-animate">
            <span className="srv-section-label">Methodology</span>
            <h2 className="srv-section-heading">Our Engineering Process</h2>
          </div>
          <div className="srv-process-grid">
            {processSteps.map((step, i) => (
              <div key={i} className="srv-process-card srv-animate" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="srv-process-num">{step.num}</div>
                <h3 className="srv-process-title">{step.title}</h3>
                <p className="srv-process-desc">{step.desc}</p>
                <div className="srv-process-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="srv-cta-section">
        <div className="srv-container">
          <div className="srv-cta-card srv-animate">
            <div className="srv-cta-glow" />
            <span className="srv-cta-label">Start Your Project</span>
            <h2 className="srv-cta-heading">Let's Engineer Your<br />Perfect Sound Environment</h2>
            <p className="srv-cta-desc">
              Book a complimentary acoustic consultation with our engineering team.
              We'll assess your space, define your sonic goals, and map the path to acoustic excellence.
            </p>
            <div className="srv-cta-actions">
              <a href="/contact" className="srv-cta-primary">
                Book Consultation
                <span className="srv-cta-arrow">↗</span>
              </a>
              <a href="tel:+919876543210" className="srv-cta-secondary">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="srv-modal-overlay" onClick={closeModal}>
          <div className="srv-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="srv-modal-close" onClick={closeModal}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <div className="srv-modal-body">
              <div className="srv-modal-accent-bar" style={{ background: selectedService.gradient }} />
              <div className="srv-modal-top">
                <span className="srv-modal-cat">{selectedService.category}</span>
                <span className="srv-modal-metric-badge">{selectedService.metric}</span>
              </div>
              <h2 className="srv-modal-title">{selectedService.title}</h2>
              <p className="srv-modal-tagline">{selectedService.tagline}</p>
              <div className="srv-modal-divider" />
              <p className="srv-modal-desc">{selectedService.description}</p>
              <div className="srv-modal-highlights">
                <h4>Key Deliverables</h4>
                <div className="srv-modal-highlight-list">
                  {selectedService.highlights.map((h, i) => (
                    <div key={i} className="srv-modal-highlight-item">
                      <span className="srv-modal-check">✓</span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>
              <div className="srv-modal-info-grid">
                <div className="srv-modal-info-block">
                  <span className="srv-modal-info-label">Investment</span>
                  <span className="srv-modal-info-value">{selectedService.investment}</span>
                </div>
                <div className="srv-modal-info-block">
                  <span className="srv-modal-info-label">Timeline</span>
                  <span className="srv-modal-info-value">{selectedService.timeline}</span>
                </div>
                <div className="srv-modal-info-block">
                  <span className="srv-modal-info-label">Standard</span>
                  <span className="srv-modal-info-value">{selectedService.metric}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Service;