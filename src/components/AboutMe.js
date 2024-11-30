import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "./ScrollAnimation";
import { FaReact, FaBootstrap, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";

function AboutMe() {
  return (
    <Container className="about-me-section">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <ScrollAnimation>
            <h2>About Me</h2>
            <p>
              Hi, I'm Antonella Domenez, an expert in web development with a
              strong focus on frontend technologies. I specialize in crafting
              dynamic and responsive user interfaces that provide exceptional
              user experiences. My expertise spans coding websites and working
              with content management systems (CMS) such as WordPress, along
              with creating eCommerce platforms with Woocommerce and Elementor.
            </p>
            <p>
              I have extensive experience developing websites using technologies
              like React, Bootstrap, and CSS3 to deliver high-quality digital
              solutions. Additionally, I've had the opportunity to collaborate
              remotely with two companies, working as part of a team to bring
              innovative projects to life. Having co-founded a tech startup,
              I've gained a deep understanding of the entire process of website
              creation, design, and branding. This experience has allowed me to
              collaborate closely with both designers and developers to deliver
              results that exceed client expectations. I’m always eager to
              embrace new challenges and contribute my skills to meaningful
              projects.
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
