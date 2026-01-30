import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONSULTANCY', path: '/consultancy' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'PROJECT', path: '/projects' },
    { name: 'SERVICES', path: '/services' },

  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebookF />, url: 'https://www.facebook.com/dasmusickolkata', color: '#4267B2' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/dasmusickolkata?igsh=aDZocm9yYmIxZ2Z6&utm_source=qr', color: '#E1306C' },
   {
  name: 'WhatsApp', icon: <FaWhatsapp />, url: 'https://wa.me/8981409359', // Replace with your phone number
color: '#25D366'
}
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-wrapper">
            <span className="logo-icon"></span>
            <span className="logo-text">AUDIONEXZ</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Social Icons - Mobile Only */}
          <li className="nav-item mobile-social-container">
            <div className="mobile-social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-mobile"
                  style={{ '--social-color': social.color }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </li>
        </ul>

        {/* Social Icons - Desktop */}
        <div className="social-icons desktop-social">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ '--social-color': social.color }}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;