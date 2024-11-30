import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "../components/ScrollAnimation";
import fancyITLogo from "../images/fancyItLogo.png";
import justDevineLogo from "../images/justDevineLogo.png";
import fisioteamLogo from "../images/fisioTeamLogo.png";
import factoryNails from "../images/factoryNails.png";
import appleRciaLogo from "../images/applercia.png";

function Portfolio() {
  const projects = [
    {
      title: "Fancy IT Solutions",
      text: "Design and development specialized in website creation, design, and branding.",
      link: "https://www.fancyitsolutions.com",
      image: fancyITLogo,
    },
    {
      title: "Just Devine Gelato",
      text: "Design and development of a responsive website showcasing their history and delicious gelato flavors.",
      link: "https://devinegelato.com.au/",
      image: justDevineLogo,
    },
    {
      title: "FisioTeam",
      text: "Branding and development of a healthcare website with Square integration for bookings.",
      link: "https://www.fisioteam.kesug.com/",
      image: fisioteamLogo,
    },
    {
      title: "Factory Nails",
      text: "Design and development of a professional website for a beauty salon specializing in nail design.",
      link: "https://www.factorynails.wuaze.com/",
      image: factoryNails,
    },
    {
      title: "AppleRcia",
      text: "Design and development of an eCommerce platform specializing in Apple products for the region.",
      link: "https://www.applercia.com.ar/",
      image: appleRciaLogo,
    },
  ];

  return (
    <Container fluid className="portfolio-section py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <ScrollAnimation>
            <h2 className="text-center mb-4">My Portfolio</h2>
            {projects.map((project, index) => (
              <div key={index} className="project-card mb-4">
                <Row className="align-items-center">
                  <Col md={4} className="text-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid rounded"
                    />
                  </Col>
                  <Col md={8}>
                    <h5>{project.title}</h5>
                    <p>{project.text}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-custom"
                    >
                      View Project
                    </a>
                  </Col>
                </Row>
              </div>
            ))}
          </ScrollAnimation>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
