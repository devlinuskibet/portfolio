import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import { motion } from "framer-motion";
import { ImBlog } from "react-icons/im";
import { BiLinkExternal } from "react-icons/bi";
import { ARTICLES } from "../../data/profile";

function Writing() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Writing</strong>
        </h1>
        <p style={{ color: "white", fontSize: "1.2rem", marginBottom: "3rem" }}>
          Thoughts on AI, software engineering and the future of technology.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
          {ARTICLES.map((article, index) => (
            <Col md={6} key={index} className="project-card">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="project-card-view">
                  <div
                    style={{
                      background: "linear-gradient(135deg, rgba(190,80,244,0.3), rgba(12,8,24,0.9))",
                      height: "120px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    role="img"
                    aria-label={`Cover for ${article.title}`}
                  >
                    <ImBlog style={{ fontSize: "4rem", color: "#be50f4" }} aria-hidden="true" />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span className="project-category-badge">{article.platform}</span>
                    </div>
                    <Card.Title className="purple" style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                      {/* TODO(verify-title): confirm this matches the actual Hashnode article title */}
                      {article.title}
                    </Card.Title>
                    <Card.Text style={{ color: "#adb5bd", fontSize: "0.95rem" }}>
                      {article.description}
                    </Card.Text>
                    <div className="mt-auto pt-3">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ textDecoration: "none" }}
                      >
                        <BiLinkExternal style={{ marginBottom: "2px" }} /> &nbsp; Read on {article.platform}
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Writing;
