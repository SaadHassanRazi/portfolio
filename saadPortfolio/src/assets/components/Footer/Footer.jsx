import React from "react";

import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Footer = () => {
  return (
    <>
      <footer className=" pt-1" style={{ background: "black" }}>
        <Container fluid className="d-flex mx-auto">
          <hr />
          <Row className="w-100">
            <Col lg className="">
              <p className="text-white pt-3  text-center">
                © [Saad Hassan Razi] [2023]
              </p>
              <p className="text-center text-white">All rights reserved</p>
            </Col>
            <hr className="text-white mx-auto" />
            <Col xxl className=" m-auto ">
              <Nav
                variant="pills"
                activeKey="1"
                className="mx-auto justify-content-center d-block d-lg-flex text-center"
              >
                <Nav.Item>
                  <Nav.Link href="#about">About</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="#skills">Skills</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="#resume">Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav.Item>

                <Nav.Item className="">
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
