import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="py-3" style={{ background: "black" }}>
      <Container>
        <Row className="align-items-center text-center">
          {/* Footer Text */}
          <Col lg={6} className="text-white">
            <p className="mb-1">© Saad Hassan Razi {currentYear}</p>
            <p className="mb-0">All rights reserved</p>
          </Col>

          {/* Navigation Links */}
          <Col lg={6}>
            <Nav
              variant="pills"
              className="justify-content-center justify-content-lg-end"
            >
              {["About", "Skills", "Resume", "Projects","Certifications", "Contact"].map(
                (section, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link href={`#${section.toLowerCase()}`} className="text-white">
                      {section}
                    </Nav.Link>
                  </Nav.Item>
                )
              )}
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
