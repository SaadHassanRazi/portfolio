import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Contact =()=>{
 
    return(
        <>
        <Container id="contact">
        <Row className="gap-2 py-2" >
                <Col>
                <h1 className="text-center text-lg-start">Contact Me</h1>
                
                <p className="text-center text-lg-start">Contact me through these provided channels</p>
                </Col>
                <Col className="rounded text-white skillCol" lg>
                    <div className="d-flex">
                    <i class="bi bi-telephone mx-auto h1 pt-1"></i>
                </div>
                <h5 className="text-center">
                    Phone    
                </h5>
                <p className="text-center">
                  +92 0309-5722806
                </p>
                </Col>
                <Col className="rounded text-white skillCol" lg>
                    
                <div className='d-flex'>
                <i class="bi bi-envelope h1 mx-auto h1 pt-1"></i>
                </div>
                <h5 className="text-center">
                    Email   
                </h5>
                <p className="text-center">
                  saadhassanrazi@gmail.com
                </p>
                </Col>
               
                <Col className="rounded text-white skillCol" lg>
                <a href="https://www.linkedin.com/in/saad-hassan-razi-479868276/" className="nav-link">
                <div className="d-flex">
                <i class="bi bi-linkedin mx-auto h1 pt-1"></i>
                </div>
                <h5 className="text-center">
                    Linkedin    
                </h5>
              
                </a>
                </Col>
            </Row>
            <Row className="gap-2 py-2" >
            <Col>
                <h1 className="text-center text-lg-start">Social Media</h1>
                
                <p className="text-center text-lg-start">Contact me through social media</p>
                </Col>
              
                <Col className="rounded text-white skillCol" lg>
                  <a className="nav-link" href="https://www.facebook.com/saad.razi.7374/">
                  <div className="d-flex">
                    <i class="bi bi-facebook mx-auto h1 pt-1"></i>
                </div>
                <h5 className="text-center">
                    Facebook    
                </h5>
               
                  </a>
                 
                </Col>
                <Col className="rounded text-white skillCol" lg>
                  <a className="nav-link" href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fsh.saadrazi%3Ffbclid%3DIwAR2VZ24jNIoeScFsE6BIQIjdst1_-mhybsejOFm6db1clq5UVtT9CcTnieE&h=AT3bLtS-4wmasReJLfO6f_f39yNwQiOLpeUvRYHldcrHHWTpMWPwQsCE35xDvnhXTRF-j0N-IEbjZJR3w8aHfJfpzhRb8SBSJNdsfPX05_IuM8zWeaToxIvuKGtHABMKdDeT">
                  <div className='d-flex'>
                  <i class="bi bi-instagram mx-auto pt-1 h1"></i>
                </div>
                <h5 className="text-center">
                    Instagram
                </h5>
                <p className="text-center">
                  
                </p>
                    </a>  
             
                </Col>
               
            
            </Row>
        </Container>
      
        </>
    )
}

export default Contact