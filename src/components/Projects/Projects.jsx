import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { PROJECTS } from "../../data/profile";
import {
  BiBrain,
  BiHealth,
  BiData,
  BiCodeAlt,
  BiServer,
} from "react-icons/bi";
import { AiFillRobot } from "react-icons/ai";

// Map each project to a distinct gradient + icon for visual identity
const PROJECT_VISUALS = [
  {
    coverGradient: "linear-gradient(135deg, rgba(100,0,200,0.6) 0%, rgba(12,8,24,0.95) 100%)",
    coverIcon: <AiFillRobot style={{ fontSize: "4rem", color: "#be50f4" }} />,
  },
  {
    coverGradient: "linear-gradient(135deg, rgba(0,140,80,0.5) 0%, rgba(12,8,24,0.95) 100%)",
    coverIcon: <BiHealth style={{ fontSize: "4rem", color: "#40d494" }} />,
  },
  {
    coverGradient: "linear-gradient(135deg, rgba(200,100,0,0.5) 0%, rgba(12,8,24,0.95) 100%)",
    coverIcon: <BiData style={{ fontSize: "4rem", color: "#f4a261" }} />,
  },
  {
    coverGradient: "linear-gradient(135deg, rgba(0,100,200,0.5) 0%, rgba(12,8,24,0.95) 100%)",
    coverIcon: <BiServer style={{ fontSize: "4rem", color: "#4cc9f0" }} />,
  },
  {
    coverGradient: "linear-gradient(135deg, rgba(190,80,244,0.4) 0%, rgba(12,8,24,0.95) 100%)",
    coverIcon: <BiBrain style={{ fontSize: "4rem", color: "#c77dff" }} />,
  },
  {
    coverGradient: "linear-gradient(135deg, rgba(220,20,60,0.4) 0%, rgba(12,8,24,0.95) 100%)",
    coverIcon: <BiCodeAlt style={{ fontSize: "4rem", color: "#ff6b6b" }} />,
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Engineering Works </strong>
        </h1>
        <p style={{ color: "white", fontSize: "1.2rem", marginBottom: "3rem" }}>
          Showcasing impact-driven projects focused on architecture, scalability, and solving real-world business problems.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((project, index) => (
            <Col
              md={project.featured ? 8 : 4}
              key={index}
              className="project-card"
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                description={project.description}
                tech={project.tech}
                ghLink={project.ghLink}
                demoLink={project.demoLink || null}
                live={project.live}
                featured={project.featured}
                coverGradient={PROJECT_VISUALS[index]?.coverGradient}
                coverIcon={PROJECT_VISUALS[index]?.coverIcon}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
