import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../Skills/skills.css'
const Skills =()=>{
    return(
        <>
        <Container className="py-3"id="skills">
            <Row className="gap-2 py-2" >
                <Col>
                <h1 className="text-center text-lg-start">Skills</h1>
                
                <p className="text-center text-lg-start">I've got working experience in these skills</p>
                </Col>
                <Col className="rounded text-white skillCol" lg>
                    <div className="d-flex">
                <i className="bi bi-filetype-html mx-auto pt-1 h1"></i>
                </div>
                <h5 className="text-center">
                    Html/Css    
                </h5>
                </Col>
                <Col className="rounded text-white skillCol" lg>
                    
                <div className='d-flex'>
                <i class="bi bi-bootstrap h1 mx-auto pt-1"></i>
                </div>
                <h5 className="text-center">
                    Bootstrap   
                </h5>
                </Col>
                <Col className="rounded text-white skillCol" lg>
                <div className="d-flex">
                <i class="bi bi-filetype-js mx-auto h1 pt-1"></i>
                </div>
                <h5 className="text-center">
                    Javascript    
                </h5>
                </Col>
            </Row>
            <Row className="gap-2">
            <Col className="rounded text-white skillCol" lg>
                <div className="d-flex">
                <i class="bi bi-filetype-jsx mx-auto pt-1 h1"></i>
                </div>
                <h5 className="text-center">
                    React Js   
                </h5>
                </Col>
                <Col className="rounded text-white skillCol" lg>
                <div className="d-flex">
                <i class="bi bi-hexagon-fill mx-auto h1 pt-1 "></i>
                </div>
                <h5 className="text-center">
                  Node js   
                </h5>
                </Col>
                <Col className="rounded text-white skillCol" lg>
                <div className='d-flex'>
                <i class="bi bi-file-code-fill h1 pt-1 mx-auto"></i>
                </div>
                <h5 className="text-center">
                    Flutter    
                </h5>
                </Col>
                <Col className="rounded text-white skillCol py-1" lg>
                <div className="d-flex">
                <i class="bi bi-clipboard-data h1 mx-auto pt-1"></i>
                </div>
                <h5 className="text-center">
                    Data Entry   
                </h5>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Skills