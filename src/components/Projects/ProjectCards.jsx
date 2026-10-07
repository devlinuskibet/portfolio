import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

function ProjectCards(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ height: "100%" }}
    >
      <Card className={`project-card-view${props.featured ? " project-card-featured" : ""}`}>
        <div style={{ position: "relative" }}>
          {/* Gradient cover instead of mismatched placeholder image */}
          <div
            className="project-card-cover"
            style={{ background: props.coverGradient || "linear-gradient(135deg, rgba(190,80,244,0.3), rgba(12,8,24,0.8))" }}
            role="img"
            aria-label={`Cover image for ${props.title}`}
          >
            {props.coverIcon && (
              <span className="project-cover-icon" aria-hidden="true">{props.coverIcon}</span>
            )}
          </div>
          <div style={{ position: "absolute", top: "10px", left: "10px", display: "flex", gap: "0.4rem" }}>
            <span className="project-category-badge">{props.category}</span>
            {props.live && (
              <span className="project-live-badge">● Live</span>
            )}
            {props.featured && (
              <span className="project-featured-badge">★ Featured</span>
            )}
          </div>
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="purple" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            {props.title}
          </Card.Title>

          <Card.Text style={{ textAlign: "justify", fontSize: "0.95rem", color: "#adb5bd" }}>
            {props.description}
          </Card.Text>

          <div className="project-tech-stack">
            {props.tech && props.tech.map((t, index) => (
              <span key={index} className="project-tech-tag">{t}</span>
            ))}
          </div>

          <div className="mt-auto pt-4" style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub /> &nbsp; GitHub
            </Button>

            {/* Only render Demo button when a real demoLink is provided */}
            {props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CgWebsite /> &nbsp; Live Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectCards;
