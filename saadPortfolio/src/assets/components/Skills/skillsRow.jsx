import React from "react";
import Col from "react-bootstrap/Col";

const SkillsRow = (props) => {
  return (
    <>
      <Col className="rounded text-white skillCol mx-auto py-1" style={{width:'150px'}} lg>
        <a href={props.link} className="nav-link">
          <div className="d-flex">{props.icon}</div>
          <h5 className="text-center">{props.title}</h5>
          <p className="text-center">{props.para}</p>
        </a>
      </Col>
    </>
  );
};

export default SkillsRow;
