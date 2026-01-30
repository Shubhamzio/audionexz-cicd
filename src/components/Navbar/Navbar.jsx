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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
    { name: 'SERVICES', path: '/services' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONSULTANCY', path: '/consultancy' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      url: 'https://www.facebook.com/dasmusickolkata',
      color: '#4267B2'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/dasmusickolkata',
      color: '#E1306C'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: 'https://wa.me/918981409359',
      color: '#25D366'
    }
  ];

  return (
    <>
      {/* Overlay for mobile menu */}
      <div
        className={`anxNavbar__overlay ${isMenuOpen ? 'anxNavbar__overlay--active' : ''}`}
        onClick={closeMenu}
      ></div>

      <nav className={`anxNavbar ${isScrolled ? 'anxNavbar--scrolled' : ''}`}>
        {/* Animated background particles */}
        <div className="anxNavbar__bgParticles">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="anxNavbar__bgParticle"></span>
          ))}
        </div>

        <div className="anxNavbar__container">
          {/* Logo */}
          <Link to="/" className="anxNavbar__logo" onClick={closeMenu}>
            <div className="anxNavbar__logoWrapper">
              <div className="anxNavbar__logoIcon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" stroke="url(#logoGradient)" strokeWidth="2"/>
                  <path d="M20 8C20 8 12 14 12 22C12 26 15 30 20 30C25 30 28 26 28 22C28 14 20 8 20 8Z"
                        fill="url(#logoGradient)"/>
                  <circle cx="20" cy="20" r="4" fill="#ffffff"/>
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00d4ff"/>
                      <stop offset="100%" stopColor="#7c3aed"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="anxNavbar__logoText">
                <span className="anxNavbar__logoTextMain">AUDIONEXZ</span>
                <span className="anxNavbar__logoTextSub">Sound Excellence</span>
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <ul className={`anxNavbar__menu ${isMenuOpen ? 'anxNavbar__menu--active' : ''}`}>
            {/* Mobile Header */}
            <li className="anxNavbar__menuHeader">
              <span className="anxNavbar__menuHeaderText">Menu</span>
              <button className="anxNavbar__menuClose" onClick={closeMenu}>
                <FaTimes />
              </button>
            </li>

            {navItems.map((item, index) => (
              <li key={index} className="anxNavbar__menuItem">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `anxNavbar__menuLink ${isActive ? 'anxNavbar__menuLink--active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  <span className="anxNavbar__menuLinkText">{item.name}</span>
                  <span className="anxNavbar__menuLinkLine"></span>
                </NavLink>
              </li>
            ))}

            {/* Social Icons - Mobile Only */}
            <li className="anxNavbar__menuSocial">
              <span className="anxNavbar__menuSocialLabel">Follow Us</span>
              <div className="anxNavbar__menuSocialIcons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anxNavbar__menuSocialLink"
                    style={{ '--social-color': social.color }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </li>
          </ul>

          {/* Right Section - Desktop */}
          <div className="anxNavbar__right">
            {/* Social Icons - Desktop */}
            <div className="anxNavbar__social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anxNavbar__socialLink"
                  style={{ '--social-color': social.color }}
                  aria-label={social.name}
                >
                  <span className="anxNavbar__socialLinkIcon">{social.icon}</span>
                  <span className="anxNavbar__socialLinkBg"></span>
                </a>
              ))}
            </div>

            {/* Hamburger Menu Button */}
            <button
              className={`anxNavbar__hamburger ${isMenuOpen ? 'anxNavbar__hamburger--active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <span className="anxNavbar__hamburgerLine"></span>
              <span className="anxNavbar__hamburgerLine"></span>
              <span className="anxNavbar__hamburgerLine"></span>
            </button>
          </div>
        </div>

        {/* Bottom Glow Line */}
        <div className="anxNavbar__glowLine"></div>
      </nav>
    </>
  );
};

export default Navbar;