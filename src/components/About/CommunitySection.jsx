import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { COMMUNITY } from "../../data/profile";

function CommunitySection() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {COMMUNITY.map((item, index) => (
        <Col md={6} key={index} className="mb-4">
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="expertise-card"
          >
            <div style={{ fontSize: "2rem", color: "#be50f4", marginBottom: "0.8rem" }}>
              <AiFillGithub />
            </div>
            <h4 className="purple" style={{ fontWeight: 700 }}>
              {item.title}
            </h4>
            <p style={{ color: "#adb5bd" }}>{item.description}</p>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default CommunitySection;
