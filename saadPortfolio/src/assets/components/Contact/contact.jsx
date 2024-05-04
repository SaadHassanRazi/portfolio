import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SkillsRow from "../Skills/skillsRow";
const Contact = () => {
  const contactRow = [
    {
      title: "  Phone  ",
      icon: <i class="bi bi-telephone mx-auto h1 pt-1"></i>,
      para: " +92 0309-5722806",
    },
    {
      title: "  Email    ",
      icon: <i class="bi bi-envelope h1 mx-auto h1 pt-1"></i>,
      para: "  saadhassanrazi@gmail.com",
    },
    {
      title: "    Linkedin     ",
      icon: <i class="bi bi-linkedin mx-auto h1 pt-1"></i>,
      link: "https://linkedin.com/in/saad-hassan-razi-479868276",
    },
    {
      title: " Facebook ",
      icon: <i class="bi bi-facebook mx-auto h1 pt-1"></i>,
      link: "https://www.facebook.com/saad.razi.7374/",
    },
    {
      title: "  Instagram  ",
      icon: <i class="bi bi-instagram mx-auto pt-1 h1"></i>,
      link: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fsh.saadrazi%3Ffbclid%3DIwAR2VZ24jNIoeScFsE6BIQIjdst1_-mhybsejOFm6db1clq5UVtT9CcTnieE&h=AT3bLtS-4wmasReJLfO6f_f39yNwQiOLpeUvRYHldcrHHWTpMWPwQsCE35xDvnhXTRF-j0N-IEbjZJR3w8aHfJfpzhRb8SBSJNdsfPX05_IuM8zWeaToxIvuKGtHABMKdDeT",
    },
    {
      title: "  Github  ",
      icon: <i class="bi bi-github mx-auto pt-1 h1"></i>,
      link: "https://github.com/SaadHassanRazi",
    },
  ];

  return (
    <>
      <Container id="contact" className="py-5">
        <Row className="gap-2 py-2">
          <Col lg>
            <h1 className="text-center text-lg-start">Contact Me</h1>

            <p className="text-center text-lg-start">
              Contact me through these provided channels
            </p>
          </Col>
          <SkillsRow
            title={contactRow[0].title}
            icon={contactRow[0].icon}
            para={contactRow[0].para}
          />
          <SkillsRow
            title={contactRow[1].title}
            icon={contactRow[1].icon}
            para={contactRow[1].para}
          />

          <SkillsRow
            title={contactRow[2].title}
            icon={contactRow[2].icon}
            link={contactRow[2].link}
          />
        </Row>
        <Row className="gap-2 py-2">
          <Col lg>
            <h1 className="text-center text-lg-start">Social Media</h1>

            <p className="text-center text-lg-start">
              Contact me through social media
            </p>
          </Col>

          <SkillsRow
            title={contactRow[3].title}
            icon={contactRow[3].icon}
            link={contactRow[3].link}
          />
          <SkillsRow
            title={contactRow[4].title}
            icon={contactRow[4].icon}
            link={contactRow[4].link}
          />
        </Row>
        <Row className="gap-2 py-2">
          <Col lg>
            <h1 className="text-center text-lg-start">GitHub</h1>
          </Col>

          <SkillsRow
            title={contactRow[5].title}
            icon={contactRow[5].icon}
            link={contactRow[5].link}
          />
        </Row>
      </Container>
    </>
  );
};

export default Contact;
