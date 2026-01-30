import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = 2025;

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Consultancy', path: '/consultancy' },
    { name: 'Contact', path: '/contact' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      href: 'https://facebook.com/audionexz'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      href: 'https://instagram.com/audionexz'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      href: 'https://wa.me/919876543210' // Replace with actual number
    }
  ];

  // Scroll to top when link is clicked
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  };

  return (
    <footer className="anxFooterMain">
      <div className="anxFooterMain__wrapper">
        <div className="anxFooterMain__container">

          {/* Column 1 - Brand & Address */}
          <div className="anxFooterMain__column anxFooterMain__column--address">
            <div className="anxFooterMain__brand">
              <h2 className="anxFooterMain__logo">AUDIONEXZ</h2>
              <p className="anxFooterMain__tagline">Sound Speaks Quality</p>
            </div>
            <div className="anxFooterMain__addressBlock">
              <h3 className="anxFooterMain__heading">
                <span className="anxFooterMain__headingIcon">📍</span>
                Address
              </h3>
              <address className="anxFooterMain__addressText">
                <p className="anxFooterMain__addressLine">Khardah, Kolkata</p>
                <p className="anxFooterMain__addressLine">Near Khardah Railway Station</p>
                <p className="anxFooterMain__addressLine">Khardah, West Bengal</p>
                <p className="anxFooterMain__addressLine">Kol - 700118</p>
              </address>
            </div>
            <div className="anxFooterMain__contactBlock">
              <div className="anxFooterMain__contactItem">
                <span className="anxFooterMain__contactIcon">📞</span>
                <a href="tel:+919876543210" className="anxFooterMain__contactLink">
                  +91 98765 43210
                </a>
              </div>
              <div className="anxFooterMain__contactItem">
                <span className="anxFooterMain__contactIcon">✉️</span>
                <a href="mailto:info@audionexz.com" className="anxFooterMain__contactLink">
                  info@audionexz.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="anxFooterMain__column anxFooterMain__column--links">
            <h3 className="anxFooterMain__heading">
              <span className="anxFooterMain__headingIcon">🔗</span>
              Quick Links
            </h3>
            <nav className="anxFooterMain__nav">
              <ul className="anxFooterMain__linksList">
                {links.map((link, index) => (
                  <li key={index} className="anxFooterMain__linksItem">
                    <Link
                      to={link.path}
                      className="anxFooterMain__navLink"
                      onClick={handleLinkClick}
                    >
                      <span className="anxFooterMain__navLinkArrow">→</span>
                      <span className="anxFooterMain__navLinkText">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 - Services */}
          <div className="anxFooterMain__column anxFooterMain__column--services">
            <h3 className="anxFooterMain__heading">
              <span className="anxFooterMain__headingIcon">🎵</span>
              Our Services
            </h3>
            <ul className="anxFooterMain__servicesList">
              <li className="anxFooterMain__servicesItem">Recording Studios</li>
              <li className="anxFooterMain__servicesItem">Home Theatres</li>
              <li className="anxFooterMain__servicesItem">Acoustic Design</li>
              <li className="anxFooterMain__servicesItem">Live Sound Systems</li>
              <li className="anxFooterMain__servicesItem">Studio Equipment</li>
              <li className="anxFooterMain__servicesItem">Consultation</li>
            </ul>
          </div>

          {/* Column 4 - Social & Newsletter */}
          <div className="anxFooterMain__column anxFooterMain__column--social">
            <h3 className="anxFooterMain__heading">
              <span className="anxFooterMain__headingIcon">🌐</span>
              Connect With Us
            </h3>
            <div className="anxFooterMain__socialBlock">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="anxFooterMain__socialLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  <span className="anxFooterMain__socialIconWrapper">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
            <div className="anxFooterMain__newsletter">
              <p className="anxFooterMain__newsletterText">
                Stay updated with our latest projects and news
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="anxFooterMain__bottom">
        <div className="anxFooterMain__bottomDivider"></div>
        <div className="anxFooterMain__bottomContent">
          <p className="anxFooterMain__copyright">
            © {currentYear} <strong>AUDIONEXZ</strong> Entertainment Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="anxFooterMain__bottomLinks">
            <Link to="/privacy" className="anxFooterMain__bottomLink" onClick={handleLinkClick}>
              Privacy Policy
            </Link>
            <span className="anxFooterMain__bottomSeparator">|</span>
            <Link to="/terms" className="anxFooterMain__bottomLink" onClick={handleLinkClick}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;