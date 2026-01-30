import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Footer from '../Footer/Footer';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Initialize EmailJS (you need to sign up at https://www.emailjs.com/)
  useEffect(() => {
    // Replace with your EmailJS public key
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  // Contact information
  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['Das Musicals, Khardah, Rahara, Kol -700118, West Bengal, India', 'Mon-Fri: 9AM-6PM', 'Sat: 10AM-4PM'],
      animation: 'float-up'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Mon-Fri: 9AM-6PM'],
      animation: 'float-down'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['audionexz@gmail.com', '24/7 Support'],
      animation: 'float-up'
    }
  ];

  // Social links
  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' }
  ];

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cnt-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.cnt-animate');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      // Remove all non-digit characters for validation
      const digitsOnly = formData.phone.replace(/\D/g, '');
      if (digitsOnly.length < 10 || digitsOnly.length > 15) {
        newErrors.phone = 'Phone number must be between 10-15 digits';
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const sendEmail = async () => {
    // EmailJS template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: 'dasmusickolkata@gmail.com',
    };

    try {
      // Replace with your EmailJS service ID and template ID
      const response = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams
      );

      console.log('Email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Send email
    const emailSent = await sendEmail();

    if (emailSent) {
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } else {
      // Show error message
      alert('Failed to send message. Please try again later.');
    }

    setIsSubmitting(false);
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
          <h1 className="cnt-hero-title cnt-animate">Get In Touch</h1>
          <p className="cnt-hero-subtitle cnt-animate">
            Welcome Audionexz - Where Sound Meets Perfection
          </p>
          <p className="cnt-hero-description cnt-animate">
            We're here to transform your acoustic dreams into reality. Whether you're planning
            a recording studio, home theater, or any acoustic space, our expert team is ready
            to guide you through every step of the journey. Let's create something extraordinary together.
          </p>
        </div>

        {/* Hero Images Gallery */}
        <div className="cnt-hero-gallery cnt-animate">
          <div className="cnt-gallery-grid">
            <div className="cnt-gallery-item cnt-item-1">
              <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop" alt="Recording Studio" />
              <div className="cnt-gallery-overlay">
                <span>Recording Studios</span>
              </div>
            </div>
            <div className="cnt-gallery-item cnt-item-2">
              <img src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=600&h=400&fit=crop" alt="Home Theater" />
              <div className="cnt-gallery-overlay">
                <span>Home Theaters</span>
              </div>
            </div>
            <div className="cnt-gallery-item cnt-item-3">
              <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop" alt="Auditorium" />
              <div className="cnt-gallery-overlay">
                <span>Auditoriums</span>
              </div>
            </div>
            <div className="cnt-gallery-item cnt-item-4">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" alt="Office Space" />
              <div className="cnt-gallery-overlay">
                <span>Office Spaces</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="cnt-main-section">
        <div className="cnt-container">
          <div className="cnt-content-grid">
            {/* Contact Form */}
            <div className="cnt-form-wrapper cnt-animate">
              <h2 className="cnt-section-title">Send Us a Message</h2>
              <p className="cnt-section-subtitle">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              {showSuccess && (
                <div className="cnt-success-message">
                  <span className="cnt-success-icon">✓</span>
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}

              <form className="cnt-form" onSubmit={handleSubmit}>
                <div className="cnt-form-row">
                  <div className="cnt-form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      className={errors.name ? 'cnt-error' : ''}
                    />
                    <label>Your Name</label>
                    {errors.name && <span className="cnt-error-text">{errors.name}</span>}
                  </div>
                  <div className="cnt-form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      className={errors.email ? 'cnt-error' : ''}
                    />
                    <label>Email Address</label>
                    {errors.email && <span className="cnt-error-text">{errors.email}</span>}
                  </div>
                </div>

                <div className="cnt-form-row">
                  <div className="cnt-form-group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=" "
                      className={errors.phone ? 'cnt-error' : ''}
                    />
                    <label>Phone Number</label>
                    {errors.phone && <span className="cnt-error-text">{errors.phone}</span>}
                  </div>
                  <div className="cnt-form-group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder=" "
                      className={errors.subject ? 'cnt-error' : ''}
                    />
                    <label>Subject</label>
                    {errors.subject && <span className="cnt-error-text">{errors.subject}</span>}
                  </div>
                </div>

                <div className="cnt-form-group cnt-full-width">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder=" "
                    className={errors.message ? 'cnt-error' : ''}
                  ></textarea>
                  <label>Your Message</label>
                  {errors.message && <span className="cnt-error-text">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className={`cnt-submit-btn ${isSubmitting ? 'cnt-submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="cnt-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="cnt-btn-arrow">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="cnt-info-wrapper">
              <h2 className="cnt-section-title cnt-animate">Contact Information</h2>
              <p className="cnt-section-subtitle cnt-animate">
                Find us at our office or reach out through any of these channels
              </p>

              <div className="cnt-info-cards">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`cnt-info-card cnt-animate cnt-${info.animation}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="cnt-info-icon">{info.icon}</div>
                    <div className="cnt-info-content">
                      <h3>{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="cnt-social-section cnt-animate">
                <h3 className="cnt-social-title">Connect With Us</h3>
                <div className="cnt-social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="cnt-social-link"
                      title={social.name}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span>{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="cnt-hours-section">
        <div className="cnt-container">
          <h2 className="cnt-section-title cnt-animate">Business Hours</h2>
          <div className="cnt-hours-grid cnt-animate">
            <div className="cnt-hours-card">
              <h4>Weekdays</h4>
              <p>Monday - Friday</p>
              <span className="cnt-time">9:00 AM - 6:00 PM</span>
            </div>
            <div className="cnt-hours-card">
              <h4>Saturday</h4>
              <p>Weekend Support</p>
              <span className="cnt-time">10:00 AM - 4:00 PM</span>
            </div>
            <div className="cnt-hours-card">
              <h4>Sunday</h4>
              <p>Emergency Only</p>
              <span className="cnt-time">Closed</span>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;




