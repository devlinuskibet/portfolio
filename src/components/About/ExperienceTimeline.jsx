import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { EXPERIENCE } from "../../data/profile";

function ExperienceTimeline() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={10}>
        <div className="timeline">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="timeline-item"
            >
              <div className="timeline-dot">
                <BiBriefcaseAlt2 />
              </div>
              <div className="timeline-content achievement-card">
                <div className="timeline-header">
                  <h4 className="purple" style={{ marginBottom: "0.2rem", fontWeight: 700 }}>
                    {exp.role}
                  </h4>
                  <div className="timeline-meta">
                    <span className="timeline-company">{exp.company}</span>
                    {exp.location && (
                      <span className="timeline-location"> &mdash; {exp.location}</span>
                    )}
                    <span
                      className={`timeline-badge ${exp.current ? "timeline-badge--current" : ""}`}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>
                {exp.bullets.length > 0 && (
                  <ul className="timeline-bullets">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Col>
    </Row>
  );
}

export default ExperienceTimeline;
