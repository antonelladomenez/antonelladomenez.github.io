import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../css/Home.css";
import myImage from "../images/AntonellaPhoto-optimized.jpg";

function Home() {
  const [photoLoaded, setPhotoLoaded] = useState(false);

  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="hero-eyebrow">Open to new opportunities</span>
        <h1 className="hero-name">Antonella Domenez</h1>
        <h2 className="hero-role">
          <Typewriter
            words={["Frontend Developer", "React Developer", "UI Engineer"]}
            loop={true}
            cursor
            cursorColor="#7c5cff"
            typeSpeed={70}
            deleteSpeed={45}
            delaySpeed={1400}
          />
        </h2>
        <p className="hero-pitch">
          I build fast, accessible interfaces with React — from
          component architecture to the small interaction details that
          make a product feel polished. Focused on writing clean,
          maintainable code that scales.
        </p>
        <div className="hero-actions">
          <Link to="/portfolio" className="btn-primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn-secondary">
            Get in Touch
          </Link>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/antonelladomenez" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/antonelladomenez" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>

      <div className="hero-photo-wrap">
        <div className={`hero-photo-frame ${photoLoaded ? "loaded" : ""}`}>
          <img
            src={myImage}
            alt="Antonella Domenez"
            className="hero-photo"
            onLoad={() => setPhotoLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;