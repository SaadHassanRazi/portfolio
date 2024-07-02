import React from "react";

const CertificationComponent = (props) => {
  return (
    <div>
      <div class="card rounded shadow mx-auto" style={{ width: "18rem" }}>
        <img
          class="card-img-top img-fluid w-75 mx-auto d-flex"
          src={props.image}
          alt="Card image cap"
        />
        <div
          class="card-body rounded text-center text-white"
          style={{ background: "#f5540a" }}
        >
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.text}</p>
          <a href={props.link} target="_blank" class="btn btn-primary">
            Verification
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificationComponent;
