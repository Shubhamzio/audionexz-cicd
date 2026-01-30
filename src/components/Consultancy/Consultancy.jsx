import React, { useEffect, useRef } from 'react';
import './Consultancy.css';
import Footer from '../Footer/Footer';
const Consultancy = () => {
  const sectionRefs = useRef([]);

  // Service cards data
  const serviceCards = [
    { id: 1, name: "Recording and Mixing Studios", icon: "🎙️" },
    { id: 2, name: "Banquet Halls", icon: "🏛️" },
    { id: 3, name: "Auditorium", icon: "🎭" },
    { id: 4, name: "Interiors", icon: "🏠" },
    { id: 5, name: "Board Rooms", icon: "💼" },
    { id: 6, name: "Hotels and Restaurants", icon: "🏨" },
    { id: 7, name: "Cafeteria", icon: "☕" },
    { id: 8, name: "Educational Institutions", icon: "🎓" },
    { id: 9, name: "Home/Mini Theaters", icon: "🎬" }
  ];

  // Flex sections data
  const flexSections = [
    {
      id: 1,
      title: "Acoustical Architecture & Execution",
      description: "Our expert team specializes in creating exceptional acoustic environments through innovative architectural solutions. We combine cutting-edge acoustic modeling with aesthetic design to deliver spaces that sound as impressive as they look. From initial concept to final implementation, we ensure every detail is optimized for superior sound quality and minimal noise interference.",
      image: "https://images.unsplash.com/photo-1598153346810-860daa814c4b?w=800&h=600&fit=crop",
      imagePosition: "left"
    },
    {
      id: 2,
      title: "Cost Analysis & Optimization",
      description: "We provide comprehensive cost analysis services that help you maximize your investment while maintaining the highest quality standards. Our team evaluates every aspect of your project to identify cost-saving opportunities without compromising on acoustic performance. Through strategic planning and efficient resource allocation, we deliver exceptional value for your budget.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      imagePosition: "right"
    },
    {
      id: 3,
      title: "HVAC Systems Design & Deployment",
      description: "Our HVAC solutions are engineered to maintain optimal climate control while minimizing acoustic interference. We design and deploy sophisticated ventilation systems that operate quietly and efficiently, ensuring comfort without compromising the acoustic integrity of your space. Every system is customized to meet the unique requirements of your environment.",
      image: "/assets/HVAC-Design.jpeg",
      imagePosition: "left"
    },
    {
      id: 4,
      title: "Electrical Infrastructure & Deployment",
      description: "We design and implement robust electrical infrastructure that powers your acoustic and multimedia systems reliably and efficiently. Our solutions include intelligent power distribution, surge protection, and backup systems to ensure uninterrupted operation. Every installation meets the highest safety standards while providing the flexibility for future upgrades.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      imagePosition: "right"
    },
    {
      id: 5,
      title: "Hardware Supply & Infrastructure Installation",
      description: "We source and install premium acoustic hardware and infrastructure components from leading manufacturers worldwide. Our comprehensive supply chain ensures access to the latest technology and materials, while our expert installation team guarantees proper implementation. From acoustic panels to specialized mounting systems, we provide complete hardware solutions.",
      image: "https://images.unsplash.com/photo-1565608087341-404b25492fee?w=800&h=600&fit=crop",
      imagePosition: "left"
    },
    {
      id: 6,
      title: "Interior Architecture & Execution",
      description: "Our interior architecture services blend aesthetic excellence with acoustic functionality to create stunning spaces that perform flawlessly. We work with premium materials and innovative design techniques to achieve the perfect balance between visual appeal and sound quality. Every interior is crafted to reflect your brand while optimizing acoustic performance.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      imagePosition: "right"
    },
    {
      id: 7,
      title: "Comprehensive Support & Maintenance Programs",
      description: "Our commitment extends beyond installation with comprehensive support and maintenance programs designed to keep your systems performing at their peak. We offer regular inspections, preventive maintenance, and 24/7 technical support to ensure minimal downtime. Our team is always ready to provide updates, repairs, and optimization services.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      imagePosition: "left"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('conslt-visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.conslt-fade-in');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="conslt-main-container">
      {/* Floating Animation Elements */}
      <div className="conslt-floating-elements">
        <div className="conslt-float-circle conslt-circle-1"></div>
        <div className="conslt-float-circle conslt-circle-2"></div>
        <div className="conslt-float-circle conslt-circle-3"></div>
        <div className="conslt-float-square conslt-square-1"></div>
        <div className="conslt-float-square conslt-square-2"></div>
      </div>

      {/* Header Section */}
      <section className="conslt-header-section">
        <div className="conslt-container">
          <h1 className="conslt-main-heading conslt-fade-in">Consultancy</h1>
          <p className="conslt-main-paragraph conslt-fade-in">
            Mix Master Square is your premier acoustic consultancy partner, specializing in
            cutting-edge acoustic solutions for diverse spaces. With over a decade of expertise,
            we transform ordinary environments into extraordinary acoustic experiences. Our team
            of certified acoustic engineers and designers work collaboratively to deliver solutions
            that exceed expectations, ensuring perfect sound quality and aesthetic appeal in every project.
          </p>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="conslt-services-section">
        <div className="conslt-container">
          <div className="conslt-services-grid">
            {serviceCards.map((service, index) => (
              <div
                key={service.id}
                className="conslt-service-card conslt-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="conslt-card-icon">{service.icon}</div>
                <h3 className="conslt-card-title">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flex Sections */}
      <section className="conslt-flex-sections">
        <div className="conslt-container">
          {flexSections.map((section, index) => (
            <div
              key={section.id}
              className={`conslt-flex-item conslt-fade-in ${
                section.imagePosition === 'left' ? 'conslt-image-left' : 'conslt-image-right'
              }`}
              ref={el => sectionRefs.current[index] = el}
            >
              <div className="conslt-flex-image">
                <img
                  src={section.image}
                  alt={section.title}
                  loading="lazy"
                />
                <div className="conslt-image-overlay"></div>
              </div>
              <div className="conslt-flex-content">
                <h2 className="conslt-flex-title">{section.title}</h2>
                <p className="conslt-flex-description">{section.description}</p>
                <button className="conslt-learn-more-btn">
                  Learn More
                  <span className="conslt-btn-arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="conslt-cta-section">
        <div className="conslt-container">
          <div className="conslt-cta-content conslt-fade-in">
            <h2 className="conslt-cta-title">Ready to Transform Your Space?</h2>
            <p className="conslt-cta-subtitle">
              Let's discuss how we can create the perfect acoustic environment for your needs
            </p>
            <button className="conslt-cta-button">Get Started Today</button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Consultancy;