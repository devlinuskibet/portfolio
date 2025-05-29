import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello surfer,welcome to my space, I am <span className="purple">Linus Kibet</span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I am currently a student at Murang'a University pursuing a
            Bachelor's degree in Computer Science.
            <br />
            I have been able to complete several projects in web development,
            mobile development, and machine learning. 
          
            <br />
            <br />
            Apart from coding, some other activities that I love to do are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I am inspired by real world problems and love to solve them using technology."{" "}
          </p>
          <footer className="blockquote-footer">Linus Kibet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
