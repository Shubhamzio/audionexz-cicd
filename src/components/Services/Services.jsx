import React, { useState, useEffect, useRef } from 'react';
import './Services.css';
import Footer from '../Footer/Footer';
const Service = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Refs for animations
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);

  // Service categories
  const categories = [
    { id: 'all', name: 'All Services', icon: '🎯' },
    { id: 'acoustic', name: 'Acoustic Solutions', icon: '🎵' },
    { id: 'studio', name: 'Studio Design', icon: '🎙️' },
    { id: 'commercial', name: 'Commercial Spaces', icon: '🏢' },
    { id: 'residential', name: 'Residential', icon: '🏠' },
    { id: 'consulting', name: 'Consulting', icon: '💼' }
  ];

  // Comprehensive services data
  const services = [
    {
      id: 1,
      category: 'acoustic',
      title: 'Acoustic Treatment',
      subtitle: 'Professional Sound Control',
      description: 'Transform any space with our cutting-edge acoustic treatment solutions. We analyze, design, and implement custom acoustic panels, diffusers, and bass traps to achieve perfect sound quality.',
      icon: '🔊',
      features: [
        'Custom acoustic panel design',
        'Reverberation time optimization',
        'Echo and flutter control',
        'Noise reduction solutions',
        'Material selection guidance',
        'Installation supervision'
      ],
      price: 'Starting from $5,000',
      duration: '2-4 weeks',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      category: 'studio',
      title: 'Recording Studio Design',
      subtitle: 'World-Class Studio Solutions',
      description: 'Create professional recording environments with optimal acoustics, workflow efficiency, and aesthetic appeal. Our designs meet international standards for recording quality.',
      icon: '🎚️',
      features: [
        'Control room acoustics',
        'Live room design',
        'Isolation booth construction',
        'HVAC noise control',
        'Equipment integration',
        'Cable management systems'
      ],
      price: 'Starting from $50,000',
      duration: '6-8 weeks',
      image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      category: 'commercial',
      title: 'Office Acoustics',
      subtitle: 'Productive Work Environments',
      description: 'Enhance productivity and comfort in office spaces with strategic acoustic solutions. We create environments that promote focus, collaboration, and wellbeing.',
      icon: '💼',
      features: [
        'Open office acoustic planning',
        'Meeting room optimization',
        'Phone booth design',
        'Sound masking systems',
        'Acoustic ceiling solutions',
        'Privacy enhancement'
      ],
      price: 'Starting from $15,000',
      duration: '3-5 weeks',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      category: 'residential',
      title: 'Home Theater Systems',
      subtitle: 'Cinematic Experience at Home',
      description: 'Design and install premium home theater systems with perfect acoustics, immersive sound, and stunning visuals for the ultimate entertainment experience.',
      icon: '🎬',
      features: [
        '7.1.4 Dolby Atmos setup',
        'Room acoustic optimization',
        'Premium speaker selection',
        '4K/8K projection systems',
        'Automated control systems',
        'Aesthetic integration'
      ],
      price: 'Starting from $25,000',
      duration: '2-3 weeks',
      image: 'https://images.unsplash.com/photo-1608970061254-266daa4f0fe2?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      category: 'commercial',
      title: 'Restaurant & Cafe Acoustics',
      subtitle: 'Ambiance Through Sound',
      description: 'Create the perfect dining atmosphere with balanced acoustics that enhance conversation while maintaining the desired ambiance and energy level.',
      icon: '🍽️',
      features: [
        'Ambient noise control',
        'Speech intelligibility optimization',
        'Background music system design',
        'Kitchen noise isolation',
        'Outdoor seating acoustics',
        'Zone-based sound control'
      ],
      price: 'Starting from $10,000',
      duration: '2-3 weeks',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      category: 'acoustic',
      title: 'Auditorium Design',
      subtitle: 'Perfect Acoustics for Large Venues',
      description: 'Design state-of-the-art auditoriums with exceptional acoustics, ensuring every seat experiences crystal-clear sound and optimal viewing angles.',
      icon: '🎭',
      features: [
        'Architectural acoustics',
        'Stage acoustics design',
        'Audience area optimization',
        'Sound reinforcement systems',
        'Variable acoustics solutions',
        'AV integration'
      ],
      price: 'Starting from $100,000',
      duration: '10-12 weeks',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop'
    },
    {
      id: 7,
      category: 'consulting',
      title: 'Acoustic Consulting',
      subtitle: 'Expert Guidance & Analysis',
      description: 'Professional consulting services for acoustic challenges, including measurements, analysis, recommendations, and project management support.',
      icon: '📊',
      features: [
        'Acoustic measurements & analysis',
        '3D acoustic modeling',
        'Noise impact assessments',
        'Building code compliance',
        'Expert witness services',
        'Project peer review'
      ],
      price: 'Starting from $2,000/day',
      duration: 'Varies by project',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
    },
    {
      id: 8,
      category: 'studio',
      title: 'Podcast Studio Setup',
      subtitle: 'Professional Podcast Production',
      description: 'Create broadcast-quality podcast studios with pristine audio, efficient workflows, and comfortable environments for long recording sessions.',
      icon: '🎙️',
      features: [
        'Vocal booth design',
        'Multi-person setup',
        'Remote recording capability',
        'Acoustic treatment',
        'Equipment consultation',
        'Live streaming integration'
      ],
      price: 'Starting from $8,000',
      duration: '1-2 weeks',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop'
    },
    {
      id: 9,
      category: 'residential',
      title: 'Music Practice Rooms',
      subtitle: 'Perfect Practice Spaces',
      description: 'Design soundproof music practice rooms that provide excellent acoustics for practice while preventing sound transmission to neighboring spaces.',
      icon: '🎸',
      features: [
        'Complete soundproofing',
        'Instrument-specific acoustics',
        'Ventilation systems',
        'Recording capability',
        'Adjustable acoustics',
        'Storage solutions'
      ],
      price: 'Starting from $12,000',
      duration: '2-3 weeks',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop'
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Initial discussion to understand your needs, goals, and vision for the project.'
    },
    {
      number: '02',
      title: 'Site Analysis',
      description: 'Comprehensive evaluation of your space including measurements and acoustic testing.'
    },
    {
      number: '03',
      title: 'Design Development',
      description: 'Custom design solutions with 3D modeling and acoustic simulations.'
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'Professional installation with quality control and project management.'
    },
    {
      number: '05',
      title: 'Testing & Tuning',
      description: 'Final acoustic measurements and fine-tuning to ensure optimal performance.'
    },
    {
      number: '06',
      title: 'Support',
      description: 'Ongoing maintenance and support to keep your space performing perfectly.'
    }
  ];

  // Statistics
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '🏆' },
    { number: '15+', label: 'Years Experience', icon: '📅' },
    { number: '98%', label: 'Client Satisfaction', icon: '😊' },
    { number: '50+', label: 'Expert Team', icon: '👥' },
    { number: '25+', label: 'Industry Awards', icon: '🏅' },
    { number: '24/7', label: 'Support Available', icon: '🔧' }
  ];

  // Filter services based on category
  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === activeCategory);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('srv-visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.srv-animate');
    elements.forEach(el => observer.observe(el));

    // Parallax effect for hero section
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openServiceModal = (service) => {
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
      {/* Animated Background */}
      <div className="srv-bg-animation">
        <div className="srv-grid-lines"></div>
        <div className="srv-floating-particle srv-particle-1"></div>
        <div className="srv-floating-particle srv-particle-2"></div>
        <div className="srv-floating-particle srv-particle-3"></div>
        <div className="srv-floating-particle srv-particle-4"></div>
        <div className="srv-floating-particle srv-particle-5"></div>
        <div className="srv-gradient-sphere"></div>
      </div>

      {/* Hero Section */}
      <section className="srv-hero" ref={heroRef}>
        <div className="srv-hero-content">
          <h1 className="srv-hero-title srv-animate">
            <span className="srv-title-line">Professional</span>
            <span className="srv-title-line srv-gradient">Acoustic Services</span>
          </h1>
          <p className="srv-hero-subtitle srv-animate">
            Transforming Spaces Through Sound Excellence
          </p>
          <p className="srv-hero-description srv-animate">
            With over 15 years of expertise, Mix Master Square delivers world-class acoustic solutions
            for recording studios, commercial spaces, and residential projects. Our team of certified
            acoustic engineers and designers create environments where sound quality meets aesthetic perfection.
          </p>
          <div className="srv-hero-cta srv-animate">
            <button className="srv-btn-primary">
              Explore Our Services
              <span className="srv-btn-icon">→</span>
            </button>
            <button className="srv-btn-secondary">
              Download Portfolio
              <span className="srv-btn-icon">↓</span>
            </button>
          </div>
        </div>
        <div className="srv-hero-visual">
          <div className="srv-sound-wave"></div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="srv-filter-section">
        <div className="srv-container">
          <div className="srv-filter-wrapper">
            {categories.map((category, index) => (
              <button
                key={category.id}
                className={`srv-filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="srv-filter-icon">{category.icon}</span>
                <span className="srv-filter-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="srv-services-section" ref={servicesRef}>
        <div className="srv-container">
          <div className="srv-services-grid">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="srv-service-card srv-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => openServiceModal(service)}
              >
                <div className="srv-card-header">
                  <div className="srv-card-icon">{service.icon}</div>
                  <div className="srv-card-category">{service.category}</div>
                </div>

                <div className="srv-card-image">
                  <img src={service.image} alt={service.title} />
                  <div className="srv-card-overlay"></div>
                </div>

                <div className="srv-card-content">
                  <h3 className="srv-card-title">{service.title}</h3>
                  <p className="srv-card-subtitle">{service.subtitle}</p>
                  <p className="srv-card-description">{service.description}</p>

                  <div className="srv-card-features">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="srv-feature-tag">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="srv-feature-more">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="srv-card-footer">
                    <div className="srv-card-info">
                      <span className="srv-info-label">Starting from</span>
                      <span className="srv-info-value">{service.price}</span>
                    </div>
                    <div className="srv-card-info">
                      <span className="srv-info-label">Duration</span>
                      <span className="srv-info-value">{service.duration}</span>
                    </div>
                  </div>

                  <button className="srv-card-btn">
                    Learn More
                    <span className="srv-btn-arrow">→</span>
                  </button>
                </div>

                {hoveredService === service.id && (
                  <div className="srv-card-glow"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="srv-process-section">
        <div className="srv-container">
          <h2 className="srv-section-title srv-animate">Our Process</h2>
          <p className="srv-section-subtitle srv-animate">
            A systematic approach to deliver exceptional acoustic solutions
          </p>

          <div className="srv-process-timeline">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="srv-process-step srv-animate"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="srv-step-number">{step.number}</div>
                <div className="srv-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="srv-step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="srv-stats-section" ref={statsRef}>
        <div className="srv-container">
          <div className="srv-stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="srv-stat-card srv-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="srv-stat-icon">{stat.icon}</div>
                <div className="srv-stat-number">{stat.number}</div>
                <div className="srv-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="srv-cta-section">
        <div className="srv-container">
          <div className="srv-cta-content srv-animate">
            <h2 className="srv-cta-title">Ready to Transform Your Space?</h2>
            <p className="srv-cta-subtitle">
              Let's create the perfect acoustic environment for your needs
            </p>
            <div className="srv-cta-buttons">
              <button className="srv-btn-primary">
                Get Started Today
                <span className="srv-btn-icon">→</span>
              </button>
              <button className="srv-btn-secondary">
                Schedule Consultation
                <span className="srv-btn-icon">📞</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {isModalOpen && selectedService && (
        <div className="srv-modal-overlay" onClick={closeModal}>
          <div className="srv-modal" onClick={(e) => e.stopPropagation()}>
            <button className="srv-modal-close" onClick={closeModal}>×</button>
            <div className="srv-modal-content">
              <div className="srv-modal-header">
                <div className="srv-modal-icon">{selectedService.icon}</div>
                <h2>{selectedService.title}</h2>
                <p>{selectedService.subtitle}</p>
              </div>
              <div className="srv-modal-body">
                <img src={selectedService.image} alt={selectedService.title} />
                <p className="srv-modal-description">{selectedService.description}</p>
                <h3>Key Features</h3>
                <ul className="srv-modal-features">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="srv-modal-info">
                  <div>
                    <span className="srv-info-label">Investment</span>
                    <span className="srv-info-value">{selectedService.price}</span>
                  </div>
                  <div>
                    <span className="srv-info-label">Timeline</span>
                    <span className="srv-info-value">{selectedService.duration}</span>
                  </div>
                </div>
                <button className="srv-modal-cta">
                  Request Quote for {selectedService.title}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Service;