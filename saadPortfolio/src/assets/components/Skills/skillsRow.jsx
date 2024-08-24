import React from "react";
import Col from "react-bootstrap/Col";

const SkillsRow = (props) => {
  return (
    <>
      <Col
        className="rounded text-white skillCol my-2 m-auto"
        style={{
          width: props.width,
          height: props.height,
          background: props.background,
        }}
        lg
      >
        <a href={props.link} className="nav-link" target="-blank">
          <div className="d-flex">{props.icon}</div>
          <div className="d-flex justify-content-center">
            <h5 className="text-center">{props.title}</h5>
            <p className="text-center">{props.para}</p>
          </div>
        </a>
      </Col>
    </>
  );
};

export default SkillsRow;
