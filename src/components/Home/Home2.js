import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Ever since I wrote my first line of code, I’ve been hooked 
              — now I’m building real-world projects, learning new stacks, and loving the grind (most days 😅)
           
              <br />
              <br />
Hi, I'm <i><b className="purple">Linus Kibet</b></i>, a passionate Computer Science student at Murang'a University of Technology.
<br />
<br />
I’m fluent in languages like
<i>
  <b className="purple"> C++, JavaScript, and Go</b>
</i>, and I'm currently sharpening my skills in
<i>
  <b className="purple"> TypeScript and Angular</b>
</i> through my internship at <b className="purple">Zeraki</b>.
<br />
<br />
My key interests lie in developing scalable
<i>
  <b className="purple"> web applications</b>
</i>, crafting intelligent
<i>
  <b className="purple"> AI solutions</b>
</i>, and exploring
<i>
  <b className="purple"> blockchain technology</b>
</i> for decentralized innovation.
<br />
<br />
I love turning ideas into reality using tools like <b className="purple">Node.js</b> and
<i>
  <b className="purple"> modern JavaScript libraries and frameworks</b>
</i>, such as
<i>
  <b className="purple"> React.js and Next.js</b>
</i>. I also work with
<i>
  <b className="purple"> Firebase, PostgreSQL, and MongoDB</b>
</i> to power full-stack applications.
<br />
<br />
Outside coding, I participate in local hackathons, build community WiFi infrastructure, and collaborate on tech initiatives across Kenya.

</p>
</Col>
<Col md={4} className="myAvtar">
  <Tilt>
    <img src={myImg} className="img-fluid" alt="avatar" />
  </Tilt>
</Col>
</Row>
<Row>
  <Col md={12} className="home-about-social">
    <h1>FIND ME ON</h1>
    <p>
      Let's <span className="purple">connect</span> and build something impactful together!
    </p>
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/devlinuskibet"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/linuskibet/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="mailto:linuslinus020@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          
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
