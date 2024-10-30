import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import hairsalonFE from "../../Assets/Projects/hairsalonFE.png";
import images from "../../Assets/Projects/images.jpg";

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
              imgPath={hairsalonFE}
              isBlog={false}
              title="HairSalonBooking Front-End Project"
              description="Our platform makes it easy for users to book haircuts tailored to their preferred services and stylists, 
                          with access to ratings and reviews from other customers and secure online payments. It also includes a comprehensive management system for staff scheduling and payroll.
                          Built with a modern tech stack, the platform leverages React.js and Vite.js on the front-end, 
                          with Node.js and Express.js powering the back-end. MySQL and PostgreSQL databases ensure robust data management, 
                          secured by JSON Web Tokens (JWT) for safe access. Deployed across Firebase, Azure, Supabase, and DigitalOcean, 
                          it delivers a reliable and scalable user experience."
              ghLink="https://github.com/HairSalonBooking/HairSalonBooking_FE"
              demoLink="https://hair-salon-vjp.azurewebsites.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hairsalonFE}
              isBlog={false}
              title="HairSalonBooking Back-End Project"
              description="Our platform offers a seamless experience for users to book haircuts tailored to their preferred services and stylists, 
                          browse customer ratings and reviews, and make secure online payments. 
                          For staff, it includes a comprehensive management system covering scheduling and payroll.
                          Powered by React.js and Vite.js on the front-end, with Node.js and Express.js on the back-end, 
                          the platform ensures reliable performance and a smooth user experience. 
                          It leverages MySQL and PostgreSQL databases, secured by JSON Web Tokens (JWT) for robust data protection. 
                          Deployments on Firebase, Azure, Supabase, and DigitalOcean make the platform scalable and accessible across multiple environments."
              ghLink="https://github.com/devalain/Backend-HairSalonBooking"
              demoLink="https://oyster-app-pc2gd.ondigitalocean.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="This is my portfolio website. It is built using React.js and React-Bootstrap. The website is responsive and has a dark mode feature. The website is deployed on GitHub Pages."
              ghLink="https://github.com/DevvAlain/Portfolio"
              demoLink="portfolio-2srxlxkmb-dylans-projects-084f2ea4.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={images}
              isBlog={false}
              title="BilliardsManagement Back-End Project"
              description="This is a project for managing billiards. The project is built using C#, Entity Framework. I am coding this project"
              ghLink="https://github.com/DevvAlain/BilliardsManagement"
              demoLink="https://billiardsmanagement.azurewebsites.net/"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
