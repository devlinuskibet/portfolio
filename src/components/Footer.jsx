import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaHashnode } from "react-icons/fa6";
import { CONTACT } from "../data/profile";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Linus Kibet</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright &copy; {year} LK</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={CONTACT.github}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={CONTACT.linkedin}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={CONTACT.hashnode}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hashnode article"
              >
                <FaHashnode />
              </a>
            </li>
            {/* Twitter/X and Instagram left in place — owner should decide whether to keep on a professional site */}
            <li className="social-icons">
              <a
                href={CONTACT.twitter}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={CONTACT.instagram}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
