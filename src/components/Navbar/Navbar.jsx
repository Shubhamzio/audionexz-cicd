import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "/assets/The_logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Navbar.css";

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  // Close menu when link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONSULTANCY", path: "/consultancy" },
    { name: "CONTACT", path: "/contact" },
    { name: "PROJECT", path: "/projects" },
    { name: "SERVICES", path: "/services" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/dasmusickolkata",
      color: "#4267B2",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/dasmusickolkata?igsh=aDZocm9yYmIxZ2Z6&utm_source=qr",
      color: "#E1306C",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/8981409359",
      color: "#25D366",
    },
  ];

  return (
    <nav
      className={`audionexz__navbar ${isScrolled ? "audionexz__navbar--scrolled" : ""}`}
    >
      <div className="audionexz__navbar-container">
        {/* Logo */}
        <Link to="/" className="audionexz__navbar-logo" onClick={closeMenu}>
          <div className="audionexz__logo-wrapper">
            <img
              src={Logo}
              alt="Audionexz Logo"
              className="audionexz__logo-image"
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <ul
          className={`audionexz__nav-menu ${isMenuOpen ? "audionexz__nav-menu--active" : ""}`}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="audionexz__nav-item"
              style={{ "--item-index": index }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "audionexz__nav-link audionexz__nav-link--active"
                    : "audionexz__nav-link"
                }
                onClick={closeMenu}
              >
                <span className="audionexz__nav-link-text">{item.name}</span>
                <span className="audionexz__nav-link-glow"></span>
              </NavLink>
            </li>
          ))}

          {/* Social Icons - Mobile Only */}
          <li className="audionexz__nav-item audionexz__mobile-social-container">
            <div className="audionexz__mobile-social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="audionexz__social-link-mobile"
                  style={{ "--social-color": social.color }}
                  aria-label={social.name}
                >
                  <span className="audionexz__social-icon">{social.icon}</span>
                  <span className="audionexz__social-ripple"></span>
                </a>
              ))}
            </div>
          </li>
        </ul>

        {/* Social Icons - Desktop */}
        <div className="audionexz__social-icons audionexz__desktop-social">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="audionexz__social-link"
              style={{ "--social-color": social.color }}
              aria-label={social.name}
            >
              <span className="audionexz__social-icon">{social.icon}</span>
              <span className="audionexz__social-tooltip">{social.name}</span>
            </a>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className={`audionexz__hamburger ${isMenuOpen ? "audionexz__hamburger--active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="audionexz__hamburger-box">
            <span className="audionexz__hamburger-inner"></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="audionexz__menu-overlay" onClick={closeMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;
