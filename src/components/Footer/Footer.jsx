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
      href: 'https://wa.me/1234567890'
    }
  ];

  // Scroll to top when link is clicked
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - Address */}
        <div className="footer-column">
          <h3 className="footer-heading">Address</h3>
          <div className="footer-address">
            <p>123 Business Street</p>
            <p>Suite 456</p>
            <p>City, State 12345</p>
            <p>Country</p>
            <p className="footer-contact-info">
              <span>Phone: +1 234 567 8900</span>
            </p>
            <p className="footer-contact-info">
              <span>Email: info@audionexz.com</span>
            </p>
          </div>
        </div>

        {/* Column 2 - Navigation Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Links</h3>
          <ul className="footer-links">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="footer-link"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Social Logos */}
        <div className="footer-column">
          <h3 className="footer-heading">Social</h3>
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <p className="footer-copyright">
          Audionexz &copy; {currentYear}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;