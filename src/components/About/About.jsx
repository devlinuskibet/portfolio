import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ExperienceTimeline from "./ExperienceTimeline";
import EducationSection from "./EducationSection";
import CertificationsSection from "./CertificationsSection";
import CommunitySection from "./CommunitySection";

import { motion } from "framer-motion";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Bio */}
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
              <img src={laptopImg} alt="Laptop representing software development" className="img-fluid" />
            </motion.div>
          </Col>
        </Row>

        {/* Experience */}
        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>
        <ExperienceTimeline />

        {/* Education */}
        <h1 className="project-heading">
          <strong className="purple">Education</strong>
        </h1>
        <EducationSection />

        {/* Certifications */}
        <h1 className="project-heading">
          <strong className="purple">Certifications</strong>
        </h1>
        <CertificationsSection />

        {/* Open Source & Community */}
        <h1 className="project-heading">
          Open Source <strong className="purple">&amp; Community</strong>
        </h1>
        <CommunitySection />

        {/* Tech Stack */}
        <h1 className="project-heading">
          Technical <strong className="purple">Expertise</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> Environment
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
