import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import "../css/Portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "Bletsi",
      role: "Co-Founder & Developer",
      text: "Digital agency I co-founded, offering website development, custom AI chatbots, and e-commerce solutions for small and medium businesses.",
      link: "https://bletsi.com",
      tags: ["Web Development", "Chatbots", "E-commerce"],
    },
    {
      title: "La Mancera",
      role: "Client Project",
      text: "Corporate website for an agri-food company based in Chaco, Argentina — built to showcase their product line and generate B2B leads.",
      link: "https://lamancera.com",
      tags: ["WordPress", "Elementor", "Corporate Site"],
    },
    {
      title: "Veltron",
      role: "Client Project",
      text: "Online store for an Argentine consumer tech and electronics retailer. Handled store setup and custom theme/storefront customization on Tiendanube.",
      link: "https://veltronstore.com.ar",
      tags: ["Tiendanube", "E-commerce", "Custom Theme"],
    },
    {
      title: "Tienda Online",
      role: "Client Project",
      text: "E-commerce platform built for an Argentine technology retail company, focused on a clean product catalog and streamlined checkout experience.",
      link: "https://tiendaonline.com",
      tags: ["E-commerce"],
    },
  ];

  return (
    <div className="portfolio-page">
      <ScrollAnimation>
        <div className="portfolio-header">
          <h2>Selected Work</h2>
          <p>
            A mix of client projects and my own agency work — from
            corporate sites to full e-commerce builds.
          </p>
        </div>
      </ScrollAnimation>

      <div className="project-list">
        {projects.map((project, index) => (
          <ScrollAnimation key={index}>
            <div className="project-card-v2">
              <div className="project-card-header">
                <div className="project-card-title-group">
                  <h3>{project.title}</h3>
                  <span className="project-role">{project.role}</span>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  Visit site →
                </a>
              </div>
              <p>{project.text}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;