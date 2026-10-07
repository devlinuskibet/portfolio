import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { BiCertification } from "react-icons/bi";
import { CERTIFICATIONS } from "../../data/profile";

function CertificationsSection() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {CERTIFICATIONS.map((cert, index) => (
        <Col md={6} key={index} className="mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="expertise-card"
            style={{ textAlign: "center" }}
          >
            <div style={{ fontSize: "2rem", color: "#be50f4", marginBottom: "0.5rem" }}>
              <BiCertification />
            </div>
            <h5 className="purple" style={{ fontWeight: 700 }}>
              {cert.title}
            </h5>
            <p style={{ color: "#adb5bd", marginBottom: "0.2rem" }}>{cert.issuer}</p>
            <p style={{ color: "#6c757d", fontSize: "0.9rem" }}>{cert.date}</p>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default CertificationsSection;
