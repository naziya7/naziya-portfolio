import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile_pic.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";


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
            I am a passionate frontend developer with a keen eye for detail and a strong foundation in {" "}
              <i>
                <b className="purple">HTML, CSS, and JavaScript,</b>
              </i>{" "}
              and advanced proficiency in{" "}
              <i>
                <b className="purple">React.js.</b>
              </i>{" "}
              My expertise lies in creating responsive and interactive web interfaces that prioritize user experience and{" "}
              <b className="purple">UI/UX design principles</b> and ensuring seamless user experiences. 🚀
              <br />
              <br />
              At Mobius by Gaian, I’ve successfully built and deployed critical frontend components, designed <i><b className="purple">robust software solutions</b></i> and orchestrated{" "}
              <i>
                <b className="purple">APIs.</b>
              </i> 🌐
              <br />
              <br />
              I thrive in dynamic environments, leveraging various libraries and frameworks to deliver innovative web technologies and products. Additionally, I am familiar with backend technologies like  <b className="purple">Node.js</b> enabling me to build comprehensive, scalable applications.
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt >
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
                  href="https://github.com/naziya7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://wa.link/4gxf44"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaWhatsappSquare />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/naziya-patel-106903241"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=naaziyapatel36@gmail.com"                  
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdAttachEmail />
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
