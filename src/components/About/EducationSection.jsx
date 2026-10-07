import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { BiBook } from "react-icons/bi";
import { EDUCATION } from "../../data/profile";

function EducationSection() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {EDUCATION.map((edu, index) => (
        <Col md={8} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="achievement-card"
            style={{ textAlign: "center" }}
          >
            <div style={{ fontSize: "3rem", color: "#be50f4", marginBottom: "0.5rem" }}>
              <BiBook />
            </div>
            <h3 className="purple">{edu.degree}</h3>
            <h4 style={{ color: "#adb5bd", fontSize: "1.1rem" }}>{edu.institution}</h4>
            <p style={{ color: "#6c757d", marginBottom: "0.3rem" }}>{edu.location}</p>
            <p style={{ color: "#adb5bd" }}>{edu.period}</p>
            <p
              style={{
                display: "inline-block",
                background: "rgba(190,80,244,0.15)",
                border: "1px solid rgba(190,80,244,0.3)",
                borderRadius: "20px",
                padding: "0.3rem 1rem",
                color: "#be50f4",
                fontWeight: 600,
              }}
            >
              {edu.honours}
            </p>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default EducationSection;
