import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

import { 
  BiTargetLock, 
  BiCodeCurly, 
  BiSelection, 
  BiTrendingUp, 
  BiUserVoice 
} from "react-icons/bi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Linus Kibet</span>, a Software Engineer and AI Systems Developer based in <span className="purple">Nairobi, Kenya.</span>
            <br /><br />
            My focus is on engineering <span className="purple">scalable web applications</span> and <span className="purple">intelligent digital products</span> that drive business value. 
            I specialize in bridging the gap between robust backend systems and intuitive frontend experiences, powered by modern AI architectures.
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
            <BiTrendingUp /> Career Journey
          </h3>
          <p style={{ textAlign: "justify" }}>
            Starting from specialized academic projects, I have transitioned into developing <strong>healthcare systems, enterprise-grade applications, and AI-powered automation tools</strong>. 
            My professional experience at companies like Venturseed and Zeraki has shaped my ability to deliver in fast-paced, production environments.
          </p>

          <h3 className="purple" style={{ fontSize: "1.5rem", marginTop: "20px" }}>
            Professional Commitments
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
