import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PersonalPic from "../img/saad.jpg";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
const Header = () => {
  return (
    <>
      <div
        className=""
        style={{ background: "linear-gradient(rgb(255, 70, 147), black" }}
      >
        <Container id="brand">
          <div className="py-3"></div>
          <Row className="mx-auto py-5">
            <Col className="my-auto text-white text-center text-lg-start" lg>
              <h1 className="">Saad Hassan Razi</h1>
              <p className="">Front end Web Developer</p>
              <Button
                variant="outline-danger"
                href="#contact"
                className="text-white"
                type="button"
              >
                Hire Me
              </Button>
            </Col>
            <Col className="m-auto py-lg-0 py-3" lg>
              <img
                src={PersonalPic}
                className="img-fluid d-flex mx-auto rounded w-50"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
