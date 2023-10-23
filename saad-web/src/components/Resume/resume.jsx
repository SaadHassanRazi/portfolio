import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import ResumeUndraw from '../img/undraw/undraw_resume_re_hkth.svg'
const CV = 'https://saadhassanrazi.github.io/portfolio/Saad-Hassan-Razi-goodcv.com-161023.121034_page-0001.jpg'

const Resume = () =>{
    const handleDownload = (url) => {
        const link = document.createElement('a');
        link.href = url; // Replace with the actual image URL
        link.download = 'SaadHassanRazi-Cv.jpg'; // Specify the desired download file name
    
        // Trigger a click event on the anchor element
        document.body.appendChild(link);
        link.click();
    
        // Clean up the anchor element
        document.body.removeChild(link);
      };
    
    return(
        <>
        <Container className="text-white py-3" id="resume">
           
            <Row>
                <Col className="my-auto text-center text-lg-start py-3" lg>
                <h2>
                    Download My Resume From Here
                </h2>
                </Col>
                <Col className="my-auto" lg>
                <Button className='d-flex mx-auto my-3' onClick={()=>{
                    handleDownload(CV)
                }} variant='primary'>Download Resume</Button>
                </Col>
                <Col lg>
                <img className="img-fluid" src={ResumeUndraw} alt="Resume Img"/>
                </Col>
            </Row>
   
          
        </Container>
        </>
    )
}

export default Resume;