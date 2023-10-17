import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import ResumeUndraw from '../img/undraw/undraw_resume_re_hkth.svg'
import Cv from '../img/cv/Saad-Hassan-Razi-goodcv.com-161023.121034_page-0001.jpg'

const Resume = () =>{
    const handleDownload = () => {
        // Get the image URL
        const imageUrl = {Cv}; // Replace with your image URL or import the image
    
        // Create an anchor element
        const a = document.createElement('a');
        a.href = imageUrl;
        a.download = 'Saad-Hassan-Razi-goodcv.com-161023.121034_page-0001.jpg'; // Specify the desired file name
    
        // Trigger a click event on the anchor element to initiate the download
        a.click();
      };
    
    return(
        <>
        <Container className="text-white" id="resume">
           
            <Row>
                <Col className="my-auto" >
                <h2>
                    Download My Resume From Here
                </h2>
                </Col>
                <Col className="my-auto">
                <Button className='' onClick={handleDownload} variant='primary'>Download Resume</Button>
                </Col>
                <Col>
                <img className="img-fluid" src={ResumeUndraw} alt="Resume Img"/>
                </Col>
            </Row>
   
          
        </Container>
        </>
    )
}

export default Resume;