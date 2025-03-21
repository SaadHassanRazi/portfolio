import React from "react";
import Col from "react-bootstrap/Col";

const SkillsRow = (props) => {
  return (
    <Col
      className="rounded text-white skillCol my-2 m-auto shadow-lg d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        width: props.width,
        height: props.height || "auto", // Ensure height is defined or auto
        background: props.background,
        padding: "20px", // Adds spacing inside
      }}
      lg
    >
      <a href={props.link} className="nav-link d-flex flex-column align-items-center" target="-blank">
        <div className="mb-2">{props.icon}</div> {/* Adds margin below icon */}
        <h5>{props.title}</h5>
        {props.para && <p className="mb-0">{props.para}</p>}
      </a>
    </Col>
  );
};

export default SkillsRow;
