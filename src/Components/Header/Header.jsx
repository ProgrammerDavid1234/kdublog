import React, { useState } from "react";
import "./Header.css";
// Importing icons (assuming these exist from previous code context, otherwise using text/placeholders)
import twitterIcon from "./twitter.png";
import facebookIcon from "./facebook.png";
import tiktokIcon from "./tiktok.png";
import youtubeIcon from "./youtube.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const socialLinks = [
    { name: "X", url: "https://twitter.com", icon: twitterIcon },
    { name: "Facebook", url: "https://facebook.com", icon: facebookIcon },
    { name: "TikTok", url: "https://tiktok.com", icon: tiktokIcon },
    { name: "Instagram", url: "https://instagram.com", icon: null },
    { name: "YouTube", url: "https://youtube.com", icon: youtubeIcon },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="site-header">
      {/* 1. TOP BAR: Utilities */}
      <div className="header-top">
        <div className="header-content-wrapper top-bar-content">
          <div className="top-left">
            <time className="current-date">{currentDate}</time>
            <span className="divider">|</span>
            <div className="trending-ticker">
              <span className="trending-label">Trending:</span>
              <span className="trending-post">NACOS Tech Week Registration Open</span>
            </div>
          </div>

          <div className="top-right">
            <div className="social-links-mini">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name}>
                  {/* Using text fallback if icon missing to ensure visibility */}
                  {link.icon ? <img src={link.icon} alt={link.name} /> : link.name[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER: Branding & Actions */}
      <div className="header-main">
        <div className="header-content-wrapper main-bar-content">
          <div className="brand-area">
            <h1 className="brand-logo">NACOS KDU</h1>
            <p className="brand-tagline">Empowering Future Innovators</p>
          </div>

          <div className="header-right-area">
            {/* This area replaces the "ADS 670x85px" with functional departmental actions */}
            <div className="action-buttons">
              <a href="https://nacosconnect.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Join NACOS</a>
              <a href="#contact" className="btn btn-outline">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. NAVIGATION BAR */}
      <nav className="header-nav">
        <div className="header-content-wrapper nav-bar-content">
          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? "✕ Close" : "☰ Menu"}
          </button>

          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#resources">Gallery</a></li>
            <li><a href="#news">Sports</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="nav-search">
            <button className="search-toggle-btn" aria-label="Search">🔍</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
