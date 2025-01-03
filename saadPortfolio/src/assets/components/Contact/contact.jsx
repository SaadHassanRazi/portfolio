import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SkillsRow from "../Skills/skillsRow";
const Contact = () => {
  const contactRow = [
    {
      title: "  Phone:  ",
      icon: <i class="bi bi-telephone mx-auto h1 pt-1"></i>,
      para: " +92 0309-5722806",
    },
    {
      title: "  Email:    ",
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

  const contact = contactRow.slice(0, 2);
  const socialMedia = contactRow.slice(2, 5);
  const git = contactRow.slice(-1);
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

          {contact.map((item) => {
            return (
              <>
                <Col>
                  <SkillsRow
                    title={item.title}
                    icon={item.icon}
                    para={item.para}
                    background={
                      " linear-gradient(124deg, #f5540a  70%, #000000 30%)"
                    }
                    width={"260px"}
                  />
                </Col>
              </>
            );
          })}
        </Row>
        <Row className="gap-2 py-2">
          <Col lg>
            <h1 className="text-center text-lg-start">Social Media</h1>

            <p className="text-center text-lg-start">
              Contact me through social media
            </p>
          </Col>

          {socialMedia.map((item) => {
            return (
              <>
                <Col>
                  <SkillsRow
                    title={item.title}
                    icon={item.icon}
                    para={item.para}
                    width={"260px"}
                    link={item.link}
                    background={
                      " linear-gradient(124deg, #f5540a  70%, #000000 30%)"
                    }
                  />
                </Col>
              </>
            );
          })}
        </Row>
        <Row className="gap-2 py-2">
          <Col lg>
            <h1 className="text-center text-lg-start">GitHub</h1>
            <p>Link to My Github</p>
          </Col>

          {git.map((item) => {
            return (
              <>
                <Col>
                  <SkillsRow
                    title={item.title}
                    icon={item.icon}
                    para={item.para}
                    width={"260px"}
                    link={item.link}
                    background={
                      " linear-gradient(124deg, #f5540a  70%, #000000 30%)"
                    }
                  />
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Contact;
