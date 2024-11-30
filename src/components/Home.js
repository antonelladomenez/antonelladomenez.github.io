import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import ScrollAnimation from "./ScrollAnimation";
import { Typewriter } from "react-simple-typewriter";
import myImage from "../images/AntonellaPhoto.jpg"; // Asegúrate de reemplazar con la ruta correcta a tu imagen
import logo from "../images/logo.png"
function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-overlay">
          <img
            src={logo}
            alt="Loading"
            className="loading-image"
          />
        </div>
      ) : (
        <Container fluid className="home-section">
          <Row className="justify-content-center align-items-center home-content">
            <Col md={6} className="text-center text-md-left">
              <h1 className="display-4">Antonella Domenez</h1>
              <h3>
                <Typewriter
                  words={[
                    "Web Developer",
                    "Web Designer",
                    "Front-End Developer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={60}
                  delaySpeed={1000}
                />
              </h3>
              <ScrollAnimation>
                <Button
                  as={Link}
                  to="/portfolio"
                  variant="light"
                  className="m-2"
                >
                  View Portfolio
                </Button>
                <Button as={Link} to="/contact" variant="light" className="m-2">
                  Contact Me
                </Button>
              </ScrollAnimation>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={myImage}
                alt="Antonella Domenez"
                className="img-fluid rounded-circle"
                onLoad={() => setLoading(false)}
              />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default Home;
