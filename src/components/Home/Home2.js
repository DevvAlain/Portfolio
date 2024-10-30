import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

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
              My journey into programming has been one of passion and discovery.
              I’ve fallen in love with it, and along the way, I've gained valuable skills.
              <br />
              <br />I’m well-versed in foundational technologies like
              <i>
                <b className="purple"> .NET, JavaScript, and TypeScript. </b>
              </i>
              <br />
              <br />
              I’m particularly interested in creating new{" "}
              <i>
                <b className="purple">Web Technologies and Products</b>
              </i>, especially in the realms of{" "}
              <b className="purple">Web Applications and Software</b>.
              <br />
              <br />
              Whenever possible, I bring my enthusiasm to product development
              with <b className="purple">Node.js</b> and modern JavaScript libraries
              and frameworks such as <b className="purple">React.js</b> and <b className="purple">Angular</b>.
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
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DevvAlain"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100011534896887"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discord.com/channels/@me"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDiscord />
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
