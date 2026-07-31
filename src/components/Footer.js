import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h5>Antonella Domenez</h5>
          <p>Frontend Developer building fast, accessible interfaces with React.</p>
        </div>

        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-me">About Me</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Get in Touch</h5>
          <ul>
            <li><a href="mailto:antonella.domenez@gmail.com">antonella.domenez@gmail.com</a></li>
            <li><a href="https://www.linkedin.com/in/antonelladomenez/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/antonelladomenez" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} Antonella Domenez. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;