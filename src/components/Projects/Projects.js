import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const projects = [
    {
      imgPath: suicide,
      title: "MamaCare",
      category: "AI-Powered Healthcare System",
      description: "A life-saving intelligent maternal healthcare platform acting as a 24/7 digital nurse for expectant mothers.",
      problem: "Addresses the 'Three Delays' in maternal healthcare: identifying danger signs, reaching facilities, and receiving care.",
      impact: "Automatically identifies danger signs and routes GPS location/health data to the nearest hospital during emergencies.",
      tech: ["React.js", "Node.js", "Python", "Geolocation", "Cloud Integration"],
      ghLink: "https://github.com/devlinuskibet",
      demoLink: "#"
    },
    {
      imgPath: emotion,
      title: "AI Skin Disease Detection",
      category: "Deep Learning / Healthcare",
      description: "CNN-based deep learning system for classifying skin conditions using medical image analysis.",
      problem: "Improving accessibility to early diagnosis support for dermatological conditions in underserved regions.",
      impact: "Winner of an Inter-University AI Hackathon; provides real-time predictions via a web-based interface.",
      tech: ["Python", "TensorFlow", "CNNs", "Flask", "React.js"],
      ghLink: "https://github.com/devlinuskibet",
      demoLink: "#"
    },
    {
      imgPath: leaf,
      title: "NumeraAI",
      category: "AI Automation / FinTech",
      description: "Intelligent bookkeeping assistant designed to automate financial record management for SMEs.",
      problem: "High manual workload and reporting inefficiencies in traditional small business accounting processes.",
      impact: "Reduced manual bookkeeping workload and significantly improved reporting efficiency through automated workflows.",
      tech: ["Python", "AI APIs", "Automation Workflows", "PostgreSQL", "React.js"],
      ghLink: "https://github.com/devlinuskibet",
      demoLink: "#"
    },
    {
      imgPath: chatify,
      title: "Murang’a University RAG Chatbot",
      category: "Generative AI / RAG",
      description: "Advanced Retrieval-Augmented Generation chatbot for high-precision academic information retrieval.",
      problem: "Delayed and fragmented access to academic queries and university-specific documentation.",
      impact: "Implemented vector search architecture with Pinecone, resulting in optimized contextual response generation.",
      tech: ["Python", "Pinecone", "Mistral", "OpenRouter", "n8n"],
      ghLink: "https://github.com/devlinuskibet",
      demoLink: "#"
    },
    {
      imgPath: editor,
      title: "Customer Intelligence System",
      category: "AI Analytics / BI",
      description: "AI-driven platform for analyzing customer behavior and generating actionable sales insights.",
      problem: "Difficulty in identifying churn risks and high-value customers within complex business datasets.",
      impact: "Built predictive models for customer segmentation and churn risk identification, driving personalized engagement.",
      tech: ["Python", "Machine Learning", "Data Analytics", "Predictive Modeling", "React.js"],
      ghLink: "https://github.com/devlinuskibet",
      demoLink: "#"
    }
  ];

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
          {projects.map((project, index) => (
            <Col md={4} key={index} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                category={project.category}
                description={project.description}
                problem={project.problem}
                impact={project.impact}
                tech={project.tech}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
