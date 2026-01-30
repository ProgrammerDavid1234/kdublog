import React, { useState, useEffect } from 'react';
import './Footer.css';
import { getSiteSettings } from '../../services/api';
// Importing icons
import twitterIcon from "../Header/twitter.png";
import facebookIcon from "../Header/facebook.png";
import tiktokIcon from "../Header/tiktok.png";
import youtubeIcon from "../Header/youtube.png";

const Footer = () => {
    const [socialLinks, setSocialLinks] = useState([
        { name: "Twitter", url: "https://twitter.com", icon: twitterIcon },
        { name: "Facebook", url: "https://facebook.com", icon: facebookIcon },
        { name: "TikTok", url: "https://tiktok.com", icon: tiktokIcon },
        { name: "Instagram", url: "https://instagram.com", icon: null }, // Placeholder if icon missing
        { name: "YouTube", url: "https://youtube.com", icon: youtubeIcon },
    ]);
    const [currentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await getSiteSettings();
                if (response.data.success) {
                    const settings = response.data.data;
                    if (settings.socialLinks) {
                        setSocialLinks(prev => prev.map(link => {
                            const settingLink = settings.socialLinks[link.name.toLowerCase()];
                            return settingLink ? { ...link, url: settingLink } : link;
                        }));
                    }
                }
            } catch (error) {
                console.error("Error fetching site settings for footer:", error);
            }
        };
        fetchSettings();
    }, []);

    return (
        <footer className="site-footer">
            <div className="container footer-container">
                <div className="footer-top">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <div className="footer-brand">
                            NACOS KDU<span className="dot">.</span>
                        </div>
                        <p className="footer-desc">
                            Empowering students through technology, innovation, and community at KolaDaisi University.
                        </p>
                        <div className="social-links">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={link.name}>
                                    {link.icon ? <img src={link.icon} alt={link.name} /> : (link.name[0])}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/posts">News</a></li>
                            <li><a href="#events">Events</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Resources</h4>
                        <ul className="footer-links">
                            <li><a href="#">Student Portal</a></li>
                            <li><a href="#">Academic Calendar</a></li>
                            <li><a href="#">Past Questions</a></li>
                            <li><a href="#">Project Topics</a></li>
                            <li><a href="#">Department Handbook</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col contact-col">
                        <h4 className="footer-heading">Contact Us</h4>
                        <p>Department of Computer Science</p>
                        <p>KolaDaisi University, Ibadan</p>
                        <a href="mailto:nacos@kdu.edu.ng" className="contact-link">nacos@kdu.edu.ng</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} NACOS KDU Chapter. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
