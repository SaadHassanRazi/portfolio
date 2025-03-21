import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SkillsRow from "../Skills/skillsRow";
import fiverIcon from "../img/logos/fiver-icon.png";

const Contact = () => {
  const contactData = [
    {
      title: "Phone",
      icon: <i className="bi bi-telephone mx-auto h1 pt-1"></i>,
      para: "+92 0309-5722806",
    },
    {
      title: "Email",
      icon: <i className="bi bi-envelope h1 mx-auto pt-1"></i>,
      para: "saadhassanrazi@gmail.com",
    },
  ];

  const socialMediaData = [
    {
      title: "LinkedIn",
      icon: <i className="bi bi-linkedin mx-auto h1 pt-1"></i>,
      link: "https://linkedin.com/in/saad-hassan-razi-479868276",
    },
    {
      title: "Facebook",
      icon: <i className="bi bi-facebook mx-auto h1 pt-1"></i>,
      link: "https://www.facebook.com/saad.razi.7374/",
    },
    {
      title: "Instagram",
      icon: <i className="bi bi-instagram mx-auto pt-1 h1"></i>,
      link: "https://www.instagram.com/sh.saadrazi",
    },
  ];

  const githubData = {
    title: "GitHub",
    icon: <i className="bi bi-github mx-auto pt-1 h1"></i>,
    link: "https://github.com/SaadHassanRazi",
  };

  const Fiver = {
    title: "Fiver",
    icon: (
      <img
        src={fiverIcon}
        alt="fiver-icon"
        className="img-fluid py-2 d-flex mx-auto"
        style={{ width: "35px" }}
      />
    ),
    link: "https://www.fiverr.com/s/yvLGwG0",
  };

  const cardBackground = "linear-gradient(124deg, #f5540a  70%, #000000 30%)";
  const cardWidth = "260px";

  return (
    <Container id="contact" className="py-5">
      {/* Contact Section */}
      <Section
        title="Contact Me"
        description="Contact me through these provided channels"
      >
        {contactData.map((item, index) => (
          <Col key={index}>
            <SkillsRow
              {...item}
              background={cardBackground}
              width={cardWidth}
            />
          </Col>
        ))}
      </Section>

      {/* Social Media Section */}
      <Section
        title="Social Media"
        description="Contact me through social media"
      >
        {socialMediaData.map((item, index) => (
          <Col key={index}>
            <SkillsRow
              {...item}
              background={cardBackground}
              width={cardWidth}
            />
          </Col>
        ))}
      </Section>

      {/* GitHub Section */}
      <Section title="GitHub" description="Link to My Github">
        <Col>
          <SkillsRow
            {...githubData}
            background={cardBackground}
            width={cardWidth}
          />
        </Col>
      </Section>

      {/* Fiver Section */}
      <Section title="Fiver" description="Link to My Fiver">
        <Col>
          <SkillsRow {...Fiver} background={cardBackground} width={cardWidth} />
        </Col>
      </Section>
    </Container>
  );
};

// Reusable Section Component
const Section = ({ title, description, children }) => (
  <Row className="gap-2 py-2">
    <Col lg>
      <h1 className="text-center text-lg-start">{title}</h1>
      <p className="text-center text-lg-start">{description}</p>
    </Col>
    {children}
  </Row>
);

export default Contact;
