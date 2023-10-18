import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import SnapMod from '../img/snapchat-mod-apk.jpg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Taclog from '../img/taclog-moving.jpg'
import IBenefits from '../img/ibenefits.jpg'
import Carousel from 'react-bootstrap/Carousel';
import SnapSecondSlide from '../img/snapchat-mod-second.jpg'
import SnapThirdSlide from '../img/snapchat-mod-third.jpg'
import SnapFourthSlide from '../img/snapchat-mod-fourth.jpg'
const Project = ()=>{
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <>
        
      <Modal className="modal modal-lg" show={show} onHide={handleClose}>
        <Modal.Header style={{background:'linear-gradient(124deg, #f5540a  70%, white 30%)'}} closeButton>
          <Modal.Title className="text-white">Snapchat-mod-apk</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
        <Carousel fade>
      <Carousel.Item>
      <img src={SnapMod} className="img-fluid rounded d-flex mx-auto w-75" alt="" />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={SnapSecondSlide} className="img-fluid rounded d-flex mx-auto w-75" alt="" />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={SnapThirdSlide} className="img-fluid rounded d-flex mx-auto w-75" alt="" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={SnapFourthSlide} className="img-fluid rounded d-flex mx-auto w-75" alt="" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Modal.Body>
        <Modal.Footer className="">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <Container className="py-5 text-white" id="projects">
            <h1 className="text-center">
                My Projects
            </h1>
            <Row>
               
            <Col lg>
            <div className="mx-auto py-2">
                <img src={SnapMod} className="img-fluid rounded d-flex mx-auto w-75" alt="" />
                </div>
                <Button className='d-flex mx-auto' onClick={handleShow} variant="primary">
                    Show
                </Button>
                </Col>
                <Col lg>
                <div className="mx-auto py-2">
                <img src={Taclog} className="img-fluid rounded d-flex mx-auto w-75" alt="" />
                </div>
                <Button className='d-flex mx-auto' variant="primary">
                    Show
                </Button>
                </Col>
                <Col lg>
                <div className="mx-auto py-2">
                <img src={IBenefits} className="img-fluid rounded  d-flex mx-auto w-75" alt="" />
                </div>
                <Button className='d-flex mx-auto' variant="primary">
                    Show
                </Button>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Project