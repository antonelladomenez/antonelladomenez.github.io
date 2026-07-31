import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import "../css/Contact.css";

const EMAILJS_SERVICE_ID = "service_l506eto";
const EMAILJS_TEMPLATE_ID = "template_i7kuejx";
const EMAILJS_PUBLIC_KEY = "2WRgl1FjHQJZ9UCta";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.message.trim()) newErrors.message = "Please enter a message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div className="contact-page">
      <h2>Get in Touch</h2>
      <p className="contact-intro">
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>

      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/antonelladomenez/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={26} />
        </a>
        <a
          href="https://github.com/antonelladomenez"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={26} />
        </a>
        <a href="mailto:antonella.domenez@gmail.com" aria-label="Email">
          <FaEnvelope size={26} />
        </a>
      </div>

      {status === "success" && (
        <div className="form-status success">
          Thanks for reaching out! I'll get back to you as soon as possible.
        </div>
      )}
      {status === "error" && (
        <div className="form-status error">
          Something went wrong sending your message. Please try emailing me
          directly at antonella.domenez@gmail.com.
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="form-error">{errors.name}</div>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me a bit about your project or opportunity..."
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <div className="form-error">{errors.message}</div>}
        </div>

        <button
          type="submit"
          className="contact-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default Contact;