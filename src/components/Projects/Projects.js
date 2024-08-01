import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import typeM from "../../Assets/Projects/typeM.png";
import food_blog from '../../Assets/Projects/food_blog.png'
import blogg from '../../Assets/Projects/blogg.png'
import weather from '../../Assets/Projects/weather.png'



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={typeM}
              isBlog={false}
              title="Typing-Master"
              description="a web-based application for touch typing. Touch typing is typing without looking at the keyboard. The fundamental idea is that each finger is given its own section of the keyboard and your fingers learn the location of the keyboard through practising regularly and gaining muscle memory to eventually build up speed while typing."
              ghLink="https://github.com/naziya7/typing-master"
              demoLink="https://sparkling-squirrel-164183.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food_blog}
              isBlog={false}
              title="Food-blog"
              description="Developed a responsive and visually appealing static website using HTML/CSS. The site features modern design principles and optimized performance to deliver an excellent user experience."
              // ghLink="https://github.com/naziya7/salescapt.website"
              demoLink="https://resilient-bublanina-7b9ace.netlify.app/"  
            />
          </Col>
        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogg}
              isBlog={false}
              title="Blog App"
              description="This project involved creating a full-stack blog application using React.js for the front end and Node.js with Express for the back end. MongoDB was used as the database to store user and blog data. I implemented user authentication with JWT to ensure secure access to blog functionalities. The application is fully responsive, providing a seamless user experience across different devices. Additional features include a basic comment system and validation for user inputs."
              ghLink="https://github.com/naziya7/innobyte"
             // demoLink="https://gorgeous-kitten-7366c2.netlify.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="weather_App"
              description="The app displays local temperature after searching location name. Responsive and attractive layout."
              ghLink="https://github.com/naziya7/weatherApp"
              demoLink="https://startling-pudding-a021ca.netlify.app/"
            />
          </Col>
         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
