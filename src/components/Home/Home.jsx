import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import { motion } from "framer-motion";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { BiBriefcaseAlt2 } from "react-icons/bi";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> LINUS KIBET</strong>
                </h1>

                <div style={{ padding: "30px 50px", textAlign: "left" }}>
                  <Type />
                </div>

                <div style={{ padding: "0px 50px", textAlign: "left" }}>
                  <p className="home-intro-text">
                    I build scalable web applications, AI-powered systems, and intelligent digital solutions that solve real business problems.
                  </p>
                  
                  <div className="home-cta-buttons">
                    <button 
                      onClick={() => window.open("/project", "_self")}
                      className="btn btn-primary home-cta-btn"
                    >
                      <BiBriefcaseAlt2 style={{ marginBottom: "2px" }} /> &nbsp;View Projects
                    </button>
                    <button 
                      onClick={() => window.open("https://github.com/devlinuskibet", "_blank")}
                      className="btn btn-primary home-cta-btn"
                    >
                      <CgFileDocument style={{ marginBottom: "2px" }} /> &nbsp;Download CV
                    </button>
                    <button 
                      onClick={() => window.open("mailto:linuslinus020@gmail.com")}
                      className="btn btn-primary home-cta-btn"
                    >
                      <AiFillMail style={{ marginBottom: "2px" }} /> &nbsp;Contact Me
                    </button>
                  </div>

                  <div className="home-social-hero">
                    <a
                      href="https://github.com/devlinuskibet"
                      target="_blank"
                      rel="noreferrer"
                      className="hero-social-link"
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/linuskibet/"
                      target="_blank"
                      rel="noreferrer"
                      className="hero-social-link"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
