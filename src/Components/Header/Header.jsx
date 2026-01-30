import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
// Importing icons
import twitterIcon from "./twitter.png";
import facebookIcon from "./facebook.png";
import tiktokIcon from "./tiktok.png";
import youtubeIcon from "./youtube.png";
import { getSiteSettings } from "../../services/api";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [siteSettings, setSiteSettings] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const [socialLinks, setSocialLinks] = useState([
    { name: "X", url: "https://twitter.com", icon: twitterIcon },
    { name: "Facebook", url: "https://facebook.com", icon: facebookIcon },
    { name: "TikTok", url: "https://tiktok.com", icon: tiktokIcon },
    { name: "Instagram", url: "https://instagram.com", icon: null },
    { name: "YouTube", url: "https://youtube.com", icon: youtubeIcon },
  ]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await getSiteSettings();
        if (response.data.success) {
          const settings = response.data.data;
          setSiteSettings(settings);

          if (settings.socialLinks) {
            setSocialLinks(prev => prev.map(link => {
              const settingLink = settings.socialLinks[link.name.toLowerCase()];
              return settingLink ? { ...link, url: settingLink } : link;
            }));
          }
        }
      } catch (error) {
        console.error("Error fetching site settings:", error);
      }
    };

    fetchSettings();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        {/* Brand Area */}
        <div className="brand-area">
          <Link to="/" className="brand-logo">
            {siteSettings?.siteTitle || "NACOS KDU"}
            <span className="brand-dot">.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/posts" className={location.pathname === '/posts' ? 'active' : ''}>News</Link></li>
            <li><a href="/#events">Events</a></li>
            <li><a href="/#resources">Resources</a></li>
            <li><a href="/#gallery">Gallery</a></li>
          </ul>
        </nav>

        {/* Actions Area */}
        <div className="header-actions">
          <a href="https://nacosconnect.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-join">
            Join NACOS
          </a>
          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <nav className="mobile-nav">
            <Link to="/" className="mobile-link">Home</Link>
            <Link to="/posts" className="mobile-link">News</Link>
            <a href="/#events" className="mobile-link">Events</a>
            <a href="/#resources" className="mobile-link">Resources</a>
            <a href="/#gallery" className="mobile-link">Gallery</a>
            <div className="mobile-actions">
              <a href="https://nacosconnect.vercel.app/" className="btn-join full-width">Join NACOS</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
