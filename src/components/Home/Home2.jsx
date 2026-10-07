import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  BiBriefcaseAlt2,
  BiCodeAlt,
  BiBrain,
  BiServer,
  BiCog,
  BiData,
} from "react-icons/bi";
import {
  AiFillGithub,
  AiFillTrophy,
} from "react-icons/ai";
import { FaLinkedinIn, FaUserTie } from "react-icons/fa";
import { CONTACT, ACHIEVEMENTS } from "../../data/profile";

function Home2() {
  const expertise = [
    {
      title: "Full-Stack Development",
      icon: <BiCodeAlt />,
      desc: "Architecting end-to-end solutions using modern frameworks and scalable architectures.",
    },
    {
      title: "Frontend Engineering",
      icon: <FaUserTie />,
      desc: "Creating immersive, high-performance user interfaces with React, Angular, and Next.js.",
    },
    {
      title: "AI Systems & RAG",
      icon: <BiBrain />,
      desc: "Developing LLM-powered applications using RAG architectures, vector databases, and retrieval systems.",
    },
    {
      title: "Backend APIs",
      icon: <BiServer />,
      desc: "Building robust, secure RESTful APIs and microservices with Node.js, FastAPI, Flask, and Python.",
    },
    {
      title: "Workflow Automation",
      icon: <BiCog />,
      desc: "Streamlining business processes through intelligent automation, system integrations, and automated CI/CD health checks via GitHub Actions.",
    },
    {
      title: "Data-Driven Apps",
      icon: <BiData />,
      desc: "Transforming complex data into actionable insights through intuitive digital products.",
    },
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* Currently Section */}
        <Row className="mb-5">
          <Col md={12}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="currently-box achievement-card"
              style={{ textAlign: "center" }}
            >
              <h2 className="purple"><BiBriefcaseAlt2 /> Currently</h2>
              <p style={{ fontSize: "1.2rem" }}>
                Technical Trainer at <strong>Murang'a University of Technology</strong> | Building AI-powered applications and modern web systems | Based in Nairobi, Kenya
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* Introduction Section */}
        <Row className="py-5">
          <Col md={8} className="home-about-description">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="section-title" style={{ textAlign: "left" }}>
                PROFESSIONAL <span className="purple"> PROFILE </span>
              </h1>
              <p className="home-about-body">
                I am a Computer Science graduate who builds{" "}
                <i><b className="purple">LLM-powered applications</b></i> in Python and full-stack and mobile software with React, React Native, Node.js, and FastAPI.
                <br /><br />
                My experience spans <i><b className="purple">healthcare systems, AI-driven products, and technical training</b></i>.
                I have built a React Native mobile version of a production web product, internal hospital applications, and AI systems including LeadForgeAI, MamaCare and NumeraAI.
                <br /><br />
                My technical foundation is rooted in{" "}
                <i><b className="purple">React, Angular, Node.js, and Python</b></i>, with a specialised focus on{" "}
                <i><b className="purple">Large Language Models (LLMs) and RAG architectures</b></i>.
              </p>
            </motion.div>
          </Col>
          <Col md={4} className="myAvtar">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Tilt>
                <img src={myImg} className="img-fluid" alt="Avatar of Linus Kibet" />
              </Tilt>
            </motion.div>
          </Col>
        </Row>

        {/* Core Expertise Section */}
        <Row className="py-5">
          <Col md={12}>
            <h1 className="section-title">CORE <span className="purple">EXPERTISE</span></h1>
          </Col>
          {expertise.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="expertise-card"
              >
                <div style={{ fontSize: "2.5rem", color: "#be50f4", marginBottom: "1rem" }}>
                  {item.icon}
                </div>
                <h3 className="purple">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Selected Achievements Section */}
        <Row className="py-5">
          <Col md={12}>
            <h1 className="section-title">SELECTED <span className="purple">ACHIEVEMENTS</span></h1>
          </Col>
          {ACHIEVEMENTS.map((ach, index) => (
            <Col md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="achievement-card"
              >
                <h4 className="purple"><AiFillTrophy /> {ach.title}</h4>
                <p>{ach.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Tech Stack Summary */}
        <Row className="py-5">
          <Col md={12}>
            <h1 className="section-title">TECH <span className="purple">STACK</span></h1>
            <div style={{ textAlign: "center" }}>
              <div className="mb-4">
                <h3 className="tech-group-title">Frontend &amp; Mobile</h3>
                <span className="tech-badge">React.js</span>
                <span className="tech-badge">React Native</span>
                <span className="tech-badge">Angular</span>
                <span className="tech-badge">Next.js</span>
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">Tailwind CSS</span>
              </div>
              <div className="mb-4">
                <h3 className="tech-group-title">Backend &amp; AI</h3>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">FastAPI</span>
                <span className="tech-badge">Flask</span>
                <span className="tech-badge">LangChain</span>
                <span className="tech-badge">OpenAI</span>
              </div>
              <div className="mb-4">
                <h3 className="tech-group-title">Databases, Cloud &amp; DevOps</h3>
                <span className="tech-badge">PostgreSQL</span>
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">Firebase</span>
                <span className="tech-badge">AWS</span>
                <span className="tech-badge">Docker</span>
                <span className="tech-badge">GitHub Actions</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Social Links */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Let's discuss <span className="purple">innovation</span> and technical excellence.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub profile"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
