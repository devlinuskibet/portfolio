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
      <Card className="project-card-view">
        <div style={{ position: "relative" }}>
          <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ opacity: 0.7 }} />
          <div style={{ 
            position: "absolute", 
            top: "10px", 
            left: "10px" 
          }}>
            <span className="project-category-badge">{props.category}</span>
          </div>
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="purple" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            {props.title}
          </Card.Title>
          
          <Card.Text style={{ textAlign: "justify", fontSize: "0.95rem", color: "#adb5bd" }}>
            {props.description}
          </Card.Text>

          {props.problem && (
            <div className="mt-3">
              <h6 className="purple" style={{ fontSize: "0.9rem", fontWeight: "700" }}>PROBLEM SOLVED:</h6>
              <p style={{ fontSize: "0.9rem" }}>{props.problem}</p>
            </div>
          )}

          {props.impact && (
            <div className="project-impact-box">
              <div className="project-impact-title">Impact & Outcome</div>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>{props.impact}</p>
            </div>
          )}

          <div className="project-tech-stack">
            {props.tech && props.tech.map((t, index) => (
              <span key={index} className="project-tech-tag">{t}</span>
            ))}
          </div>

          <div className="mt-auto pt-4">
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp; GitHub
            </Button>
            {"\n"}
            {"\n"}

            {props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp; Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
export default ProjectCards;
