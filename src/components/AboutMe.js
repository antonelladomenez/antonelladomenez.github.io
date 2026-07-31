import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "./ScrollAnimation";
import { FaReact, FaBootstrap, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import "../css/AboutMe.css";

function AboutMe() {
  return (
    <Container className="about-me-section">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <ScrollAnimation>
            <h2>About Me</h2>
            <p>
              Hi, I'm Antonella Domenez, a Frontend Developer focused on
              building fast, accessible, and well-crafted user interfaces.
              My expertise spans React development, responsive design, and
              CMS-based projects using WordPress and WooCommerce.
            </p>
            <p>
              I bring 4 years of professional experience building software
              at Cognitis Software House, combined with hands-on client
              work through Bletsi, the digital agency I co-founded. This mix
              has given me a well-rounded understanding of both structured
              product development and direct client delivery — from
              planning and design to shipping and iterating in production.
            </p>
          </ScrollAnimation>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={9}>
          <ScrollAnimation>
            <h3 className="text-center mb-4">Experience</h3>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="experience-timeline">
              <div className="timeline-item">
                <span className="timeline-period">4 years</span>
                <div>
                  <h4 className="timeline-role">Frontend Developer</h4>
                  <p className="timeline-company">
                    <a
                      href="https://cognitis.com.ar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cognitis Software House
                    </a>{" "}
                    · Resistencia, Chaco
                  </p>
                  <p className="timeline-desc">
                    Built custom software products with React on the frontend
                    as part of a cross-functional team, working across the
                    full development cycle — from planning and UI
                    implementation to delivery and iteration on production
                    systems for a range of client industries.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-period">2021 — Present</span>
                <div>
                  <h4 className="timeline-role">Co-Founder & Developer</h4>
                  <p className="timeline-company">
                    <a
                      href="https://bletsi.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bletsi
                    </a>{" "}
                    · Digital Agency
                  </p>
                  <p className="timeline-desc">
                    Co-founded a digital agency offering website development,
                    e-commerce, and AI chatbot solutions for small and medium
                    businesses, managing projects end-to-end from client
                    scoping to launch.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center">
          <ScrollAnimation>
            <h3>Technologies I Use</h3>
          </ScrollAnimation>
          <ScrollAnimation>
            {" "}
            <div className="tech-icons">
              <FaReact size={40} className="mx-3" />
              <FaBootstrap size={40} className="mx-3" />
              <FaCss3Alt size={40} className="mx-3" />
              <FaHtml5 size={40} className="mx-3" />
              <FaJs size={40} className="mx-3" />
            </div>
          </ScrollAnimation>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;