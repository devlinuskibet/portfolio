import React from "react";
import Card from "react-bootstrap/Card";
import {
  BiTargetLock,
  BiCodeCurly,
  BiSelection,
  BiUserVoice,
  BiTrendingUp,
} from "react-icons/bi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Linus Kibet</span>, a Computer Science graduate (
            <span className="purple">Second Class Honours, Upper Division</span>) from Murang'a University of Technology,
            based in <span className="purple">Nairobi, Kenya</span>. I build LLM-powered applications in Python
            and full-stack and mobile software using React, React Native, Node.js, and FastAPI.
          </p>

          <p style={{ textAlign: "justify" }}>
            My professional journey includes serving as a <span className="purple">Technical Trainer</span> at
            Murang'a University of Technology, where I deliver practical mobile application development sessions;
            working as a <span className="purple">Frontend Developer (Contract)</span> at Venturseed — where I built
            a React Native mobile version of a production web product, reduced page load time by 45%, and designed
            a reusable component library of 30+ components; and completing an <span className="purple">IT Support &amp;
            Application Developer Attachment</span> at Kenyatta University Teaching, Referral &amp; Research Hospital,
            where I developed internal web applications and provided technical support to clinical teams.
            I have also gained experience at <strong>Zeraki</strong>.
          </p>

          <p style={{ textAlign: "justify" }}>
            I am deeply interested in <span className="purple">AI systems, RAG and LLM applications</span>, and the
            intersection of technology with healthcare and business challenges.
          </p>

          <h3 className="purple" style={{ fontSize: "1.5rem", marginTop: "20px" }}>
            <BiTargetLock /> Engineering Philosophy
          </h3>
          <p style={{ textAlign: "justify" }}>
            I believe in building systems that are <strong>clean, maintainable, and performance-driven</strong>.
            My approach is rooted in clean architecture principles and a commitment to continuous improvement.
            I don't just write code; I design solutions that solve real-world problems with technical precision.
          </p>

          <h3 className="purple" style={{ fontSize: "1.5rem", marginTop: "20px" }}>
            <BiTrendingUp /> Professional Commitments
          </h3>
          <ul>
            <li className="about-activity">
              <BiCodeCurly /> Solving Complex Problems
            </li>
            <li className="about-activity">
              <BiSelection /> User-Centric Design
            </li>
            <li className="about-activity">
              <BiUserVoice /> Collaborative Innovation
            </li>
          </ul>

          <p style={{ color: "#adb5bd", marginTop: "30px", fontStyle: "italic" }}>
            "Excellence is not an act, but a habit. I strive to bring this mindset to every system I build."
          </p>
          <footer className="blockquote-footer">Linus Kibet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
