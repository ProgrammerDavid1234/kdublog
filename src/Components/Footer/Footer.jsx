import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="footer-logo">NACOS KDU</h3>
                        <p>
                            National Association of Computer Science Students, KolaDaisi
                            University Chapter.
                        </p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            {/* Add social icons here if needed */}
                            <a href="#">Twitter</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} NACOS KDU. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
