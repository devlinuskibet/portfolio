import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

import { motion } from "framer-motion";
import { BiCertification, BiRocket, BiTargetLock } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

function About() {
  const experiences = [
    {
      company: "Venturseed",
      role: "Frontend Developer",
      period: "Current",
      desc: "Architecting AI-powered web applications and modern frontend systems."
    },
    {
      company: "Zeraki",
      role: "Software Engineering Intern",
      period: "2024",
      desc: "Developed scalable educational technology solutions using Angular and TypeScript."
    },
    {
      company: "Kenyatta University Hospital",
      role: "Technical Contributor",
      period: "2023",
      desc: "Assisted in the optimization of healthcare management systems and data workflows."
    }
  ];

  const certifications = [
    "Cisco Cybersecurity Essentials",
    "Cisco AI Fundamentals",
    "DevOps Engineering Path",
    "Avalanche Ecosystem Contributor",
    "Fedora Project Contributor"
  ];

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                ABOUT THE <strong className="purple">ENGINEER</strong>
              </h1>
              <Aboutcard />
            </motion.div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </motion.div>
          </Col>
        </Row>

        {/* Experience Snapshot */}
        <h1 className="project-heading">
          Professional <strong className="purple">Experience </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {experiences.map((exp, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="expertise-card"
              >
                <h3 className="purple" style={{ fontSize: "1.4rem" }}>{exp.company}</h3>
                <h4 style={{ fontSize: "1.1rem", color: "#adb5bd" }}>{exp.role}</h4>
                <p className="text-muted" style={{ fontSize: "0.9rem" }}>{exp.period}</p>
                <p>{exp.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        <h1 className="project-heading">
          Technical <strong className="purple">Expertise </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> Environment
        </h1>
        <Toolstack />

        {/* Certifications & Open Source */}
        <Row style={{ justifyContent: "center", padding: "50px 0" }}>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="achievement-card"
            >
              <h2 className="purple"><BiCertification /> Certifications</h2>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {certifications.map((cert, i) => (
                  <li key={i} className="mb-2" style={{ fontSize: "1.1rem" }}>
                    <BiTargetLock className="purple" /> {cert}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="achievement-card"
            >
              <h2 className="purple"><BiRocket /> Future Vision</h2>
              <p style={{ fontSize: "1.1rem", textAlign: "justify" }}>
                My vision is to contribute to the global engineering landscape by developing 
                autonomous AI systems and decentralized infrastructures that empower communities. 
                I am actively exploring advanced <strong>RAG optimizations, agentic workflows, and secure AI integrations</strong>.
              </p>
              <div className="mt-4">
                <AiFillGithub className="purple" /> Contributing to Open Source at <strong>Fedora Project</strong> and <strong>Avalanche Ecosystem</strong>.
              </div>
            </motion.div>
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
