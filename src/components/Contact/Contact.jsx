import React, { useEffect } from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";

const Contact = () => {
  // Contact information with updated phone numbers
  const contactInfo = [
    {
      icon: "📞",
      title: "Equipment Enquiry",
      details: ["+91 79804 53542"],
      animation: "float-up",
      delay: "0s",
    },
    {
      icon: "🔊",
      title: "Acoustic & Project Enquiry",
      details: ["+91 89814 09359"],
      animation: "float-down",
      delay: "0.2s",
    },
    {
      icon: "📧",
      title: "Email Support",
      details: ["audionexz@gmail.com", "We respond within 24 hours"],
      animation: "float-up",
      delay: "0.4s",
    },
    {
      icon: "📍",
      title: "Visit Our Studio",
      details: [
        "Das Musicals, Khardah, Rahara",
        "Kolkata - 700118, West Bengal",
        "Mon-Sat: 9AM - 6PM",
      ],
      animation: "float-down",
      delay: "0.6s",
    },
  ];

  // Social links
  const socialLinks = [
    {
      name: "Facebook",
      icon: "📘",
      url: "https://www.facebook.com/dasmusickolkata",
    },
    {
      name: "Instagram",
      icon: "📷",
      url: "https://www.instagram.com/dasmusickolkata?igsh=aDZocm9yYmIxZ2Z6&utm_source=qr",
    },
    { name: "WhatsApp", icon: "💬", url: "https://wa.me/8981409359" },
  ];

  // Studio images for the gallery
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
      alt: "Recording Studio",
      label: "Recording Studios",
    },
    {
      src: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=600&h=400&fit=crop",
      alt: "Home Theater",
      label: "Home Theaters",
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
      alt: "Auditorium",
      label: "Auditoriums",
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      alt: "Office Space",
      label: "Office Spaces",
    },
  ];

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cnt-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".cnt-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Handle phone click with analytics tracking
  const handlePhoneClick = (phone) => {
    console.log(`Phone number clicked: ${phone}`);
    window.location.href = `tel:${phone.replace(/\s/g, "")}`;
  };

  return (
    <div className="cnt-wrapper">
      {/* Animated Background Elements */}
      <div className="cnt-bg-animation">
        <div className="cnt-floating-cube cnt-cube-1"></div>
        <div className="cnt-floating-cube cnt-cube-2"></div>
        <div className="cnt-floating-cube cnt-cube-3"></div>
        <div className="cnt-floating-sphere cnt-sphere-1"></div>
        <div className="cnt-floating-sphere cnt-sphere-2"></div>
        <div className="cnt-gradient-orb cnt-orb-1"></div>
        <div className="cnt-gradient-orb cnt-orb-2"></div>
      </div>

      {/* Hero Section */}
      <section className="cnt-hero">
        <div className="cnt-container">
          {/* Animated particles */}
          <div className="cnt-particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="cnt-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          <div className="cnt-hero-content">
            <span className="cnt-hero-badge cnt-animate">
              ✦ Connect With Us
            </span>
            <h1 className="cnt-hero-title cnt-animate">
              Let's Create
              <span className="cnt-text-gradient"> Something</span>
              <br />
              Extraordinary
            </h1>
            <p className="cnt-hero-description cnt-animate">
              At Audionexz, we transform acoustic dreams into reality. Whether
              you're planning a recording studio, home theater, or any acoustic
              space, our expert team is ready to guide you.
            </p>

            {/* Quick action buttons */}
            <div className="cnt-hero-actions cnt-animate">
              <a
                href="tel:+918981409359"
                className="cnt-action-btn cnt-primary-btn"
                onClick={() => handlePhoneClick("+91 89814 09359")}
              >
                <span className="cnt-btn-icon">📞</span>
                <span className="cnt-btn-text">
                  <span className="cnt-btn-label">
                    For Acoustics & Projects
                  </span>
                  <span className="cnt-btn-value">+91 89814 09359</span>
                </span>
              </a>
              <a
                href="tel:+917980453542"
                className="cnt-action-btn cnt-secondary-btn"
                onClick={() => handlePhoneClick("+91 79804 53542")}
              >
                <span className="cnt-btn-icon">🎧</span>
                <span className="cnt-btn-text">
                  <span className="cnt-btn-label">For Equipment Enquiry</span>
                  <span className="cnt-btn-value">+91 79804 53542</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Images Gallery */}
        <div className="cnt-hero-gallery cnt-animate">
          <div className="cnt-gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`cnt-gallery-item cnt-item-${index + 1}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="cnt-gallery-overlay">
                  <span>{image.label}</span>
                </div>
                <div className="cnt-gallery-shine"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="cnt-main-section">
        <div className="cnt-container">
          <div className="cnt-section-header cnt-animate">
            <span className="cnt-section-badge">📞 Get In Touch</span>
            <h2 className="cnt-section-title">How Can We Help You?</h2>
            <p className="cnt-section-subtitle">
              Choose the right channel for your enquiry. Our team is ready to
              assist you.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="cnt-contact-grid">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`cnt-contact-card cnt-animate cnt-${info.animation}`}
                style={{ animationDelay: info.delay }}
              >
                <div className="cnt-card-glow"></div>
                <div className="cnt-card-icon-wrapper">
                  <span className="cnt-card-icon">{info.icon}</span>
                  <div className="cnt-icon-pulse"></div>
                </div>
                <div className="cnt-card-content">
                  <h3 className="cnt-card-title">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className={`cnt-card-detail ${detail.includes("+91") ? "cnt-phone" : ""}`}
                    >
                      {detail.includes("+91") ? (
                        <a
                          href={`tel:${detail.replace(/\s/g, "")}`}
                          className="cnt-phone-link"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePhoneClick(detail);
                          }}
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
                <div className="cnt-card-connector"></div>
              </div>
            ))}
          </div>

          {/* Direct Contact Strip */}
          <div className="cnt-direct-contact cnt-animate">
            <div className="cnt-direct-content">
              <h3>Prefer a Direct Call?</h3>
              <p>Speak directly with our team members</p>
            </div>
            <div className="cnt-direct-numbers">
              <a
                href="tel:+917980453542"
                className="cnt-direct-btn"
                onClick={() => handlePhoneClick("+91 79804 53542")}
              >
                <span className="cnt-direct-icon">🎧</span>
                <span className="cnt-direct-label">Equipment</span>
                <span className="cnt-direct-number">+91 79804 53542</span>
              </a>
              <a
                href="tel:+918981409359"
                className="cnt-direct-btn"
                onClick={() => handlePhoneClick("+91 89814 09359")}
              >
                <span className="cnt-direct-icon">🔊</span>
                <span className="cnt-direct-label">Projects</span>
                <span className="cnt-direct-number">+91 89814 09359</span>
              </a>
            </div>
          </div>

          {/* Social & Map Section */}
          <div className="cnt-bottom-section">
            {/* Social Links */}
            <div className="cnt-social-section cnt-animate">
              <div className="cnt-social-content">
                <h3 className="cnt-social-title">Connect With Us</h3>
                <p className="cnt-social-subtitle">
                  Follow our journey on social media
                </p>
                <div className="cnt-social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="cnt-social-link"
                      title={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="cnt-social-icon">{social.icon}</span>
                      <span className="cnt-social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="cnt-map-section cnt-animate">
              <h3 className="cnt-map-title">Find Us</h3>
              <div className="cnt-map-container">
                <div className="cnt-map-placeholder">
                  <div className="cnt-map-content">
                    <span className="cnt-map-icon">📍</span>
                    <h4>Das Musicals, Khardah</h4>
                    <p>Rahara, Kolkata - 700118</p>
                    <a
                      href="https://maps.google.com/?q=Das+Musicals+Khardah+Kolkata"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cnt-map-direction-btn"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="cnt-hours-section">
        <div className="cnt-container">
          <div className="cnt-hours-header cnt-animate">
            <span className="cnt-hours-badge">⏰</span>
            <h2 className="cnt-section-title">Business Hours</h2>
            <p className="cnt-section-subtitle">We're here when you need us</p>
          </div>
          <div className="cnt-hours-grid cnt-animate">
            <div className="cnt-hours-card">
              <div className="cnt-hours-icon">📅</div>
              <h4>Weekdays</h4>
              <p>Monday - Friday</p>
              <span className="cnt-time">9:00 AM - 6:00 PM</span>
            </div>
            <div className="cnt-hours-card cnt-highlight">
              <div className="cnt-hours-icon">⭐</div>
              <h4>Saturday</h4>
              <p>Weekend Support</p>
              <span className="cnt-time">10:00 AM - 4:00 PM</span>
            </div>
            <div className="cnt-hours-card">
              <div className="cnt-hours-icon">🔔</div>
              <h4>24/7 Support</h4>
              <p>Emergency Only</p>
              <span className="cnt-time cnt-urgent">Priority Support</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
