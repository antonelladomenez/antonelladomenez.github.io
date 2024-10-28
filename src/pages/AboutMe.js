import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "../components/ScrollAnimation";
import { FaReact, FaBootstrap, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";

function AboutMe() {
  return (
    <Container className="about-me-section">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <ScrollAnimation>
            <h2>About Me</h2>
            <p>
              Hi, I'm Antonella Domenez, a passionate web developer with a focus
              on frontend technologies. I love creating dynamic and responsive
              user interfaces that provide exceptional user experiences. My
              expertise includes working with React, Bootstrap, and CSS3 to
              build high-quality websites.
            </p>
            <p>
              Previously, I co-founded a tech startup where we specialized in
              website creation, design, and branding. This experience has honed
              my skills in collaborating with designers and developers to
              deliver innovative digital solutions. I'm excited to bring this
              expertise to new challenges and contribute to impactful projects.
            </p>
          </ScrollAnimation>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
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
