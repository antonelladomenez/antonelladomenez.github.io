import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false); // Estado para manejar la visibilidad del mensaje de confirmación

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_l506eto",
        "template_i7kuejx",
        formData,
        "2WRgl1FjHQJZ9UCta"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setMessageSent(true); // Mostrar mensaje de confirmación
        // Opcionalmente, limpiar el formulario después de un envío exitoso
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
      });
  };

  return (
    <Container className="contact-section text-center">
      <h2>Contact Me</h2>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/antonelladomenez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/antonelladomenez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a href="mailto:domenezantonellaa@gmail.com">
          <FaEnvelope size={30} />
        </a>
      </div>
      {messageSent && (
        <Alert variant="success" className="mt-4">
          Thank you for reaching out! I will get back to you as soon as
          possible.
        </Alert>
      )}

      <Form className="form-container text-left" onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="custom" type="submit" className="mt-3">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Contact;
