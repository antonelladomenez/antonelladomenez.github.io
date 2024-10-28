import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from '../components/ScrollAnimation';
import ProjectCard from "../components/ProjectCard";
import fancyITLogo from "../images/fancyItLogo.png";
import justDevineLogo from "../images/justDevineLogo.png";
import fisioteamLogo from "../images/fisioTeamLogo.png";
import factoryNails from "../images/factoryNails.png";

function Portfolio() {
  const projects = [
    {
      title: "Fancy IT Solutions",
      text: "Specialized in website creation, design, and branding.",
      link: "https://www.fancyitsolutions.com",
      image: fancyITLogo,
    },
    {
      title: "Just Devine Gelato",
      text: "A responsive website that showcases their history and delicious gelato flavors.",
      link: "https://devinegelato.com.au/",
      image: justDevineLogo,
    },
    {
      title: "FisioTeam",
      text: "A healthcare website with a connection to Square for bookings.",
      link: "https://www.fisioteam.kesug.com/",
      image: fisioteamLogo,
    },
    {
      title: "Factory Nails",
      text: "A professional website for a beauty salon offering nail design.",
      link: "https://www.factorynails.wuaze.com/",
      image: factoryNails,
    },
  ];

  return (
    <Container className="portfolio-section">
      <Row className="justify-content-center">
        <Col md={8}>
          <ScrollAnimation>
            <h2>Portfolio</h2>
            <Row>
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  text={project.text}
                  link={project.link}
                  image={project.image}
                />
              ))}
            </Row>
          </ScrollAnimation>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
