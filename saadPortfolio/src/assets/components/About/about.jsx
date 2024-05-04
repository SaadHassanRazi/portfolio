import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutPic from '../img/undraw/undraw_about_me_re_82bv.svg'
import Container from "react-bootstrap/esm/Container";
import '../About/about.css'
const About = () =>{
    return(
        <>
        <Container className="text-white"  id="about">
        <Row className="mx-auto py-5">
            <Col className="py-5 py-lg-0" lg>
            <img className="img-fluid" src={AboutPic} alt=""/>
            </Col>
            <Col className="my-auto" lg>
            <h1 className="text-center" >About Me</h1>
            <p className="" style={{textAlign:'justify'}}>I am a passionate front-end developer with [2] years of experience creating user-friendly and visually appealing websites. I specialize in  and I'm dedicated to delivering responsive and optimized web solutions.</p>
            <Row>
            <Col lg>
            <h4 className="text-center">Educational Background</h4>
            <p className=""  style={{textAlign:'justify',wordWrap:'break-word'}}>I am Currently studying IT (Information Technology) from Islamia University Of Bahawalpur</p>

            </Col>
            <Col lg>
            <h4 className="text-center">Working Experience</h4>
            <p className=""  style={{textAlign:'justify',wordWrap:'break-word'}}>I've got a 2 year Working Experience in Code In Bracket Software House and Currently working as an intern in Enigmatix</p>

            </Col>
            </Row>
            </Col>
        </Row>
        </Container>
      
        </>
    )
}

export default About