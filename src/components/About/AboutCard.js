import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I am an aspiring <span className="purple">Software developer</span>  and a determined problem solver. I have a passion for building scalable web applications. 
            <br />
           Throughout my journey as a developer, I have gained proficiency in <span className="purple">MERN Stack. </span> I enjoy creating responsive and attractive layouts that enhance the user experience.
            <br />
            Apart from my technical skills, I possess valuable soft skills such as being a <span className="purple"> team player,</span> managing time effectively, and adapting to new situations. These skills have been instrumental in collaborating with teams and delivering successful projects. <br />
            Let's collaborate and build something great together!
            <br />
            <br />
            In addition to coding, here are a few professional activities I engage in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Staying Updated with Industry Trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
          </ul>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
