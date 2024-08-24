import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SnapMod from "../img/snapchat-mod-apk.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Taclog from "../img/taclog-moving.jpg";
import IBenefits from "../img/ibenefits.jpg";
import Carousel from "react-bootstrap/Carousel";
import SnapSecondSlide from "../img/snapchat-mod-second.jpg";
import SnapThirdSlide from "../img/snapchat-mod-third.jpg";
import SnapFourthSlide from "../img/snapchat-mod-fourth.jpg";
import SkillsRow from "../Skills/skillsRow";

const Project = () => {
  const dataset = [
    {
      name: "React Calculator",
      url: "https://github.com/SaadHassanRazi/react-Calculator.git",
    },
    {
      name: "React Crud Operations",
      url: "https://github.com/SaadHassanRazi/crud-operations-react.git",
    },
    {
      name: "Reactgram",
      url: "https://github.com/SaadHassanRazi/reactgram-offical.git",
    },
    {
      name: "TodoList",
      url: "",
    },
    {
      name: "Role Based Authentication",
      url: "",
    },
    {
      name: "Newsletter",
      url: "",
    },
    {
      name: "Number Guessing Game",
      url: "",
    },
    {
      name: "Snake Game",
      url: "https://github.com/SaadHassanRazi/Javascript-snake-game.git",
    },
    {
      name: "Portfolio Template",
      url: "https://github.com/SaadHassanRazi/Portfolio-Template.git",
    },
    {
      name: "Chat Application",
      url: "https://github.com/SaadHassanRazi/chat-application.git",
    },
  ];

  // Function to split the dataset into chunks of 3 items each
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedDataset = chunkArray(dataset, 3);

  return (
    <>
      <div
        className="py-3"
        style={{
          background: "linear-gradient(#f5540a 70%,124deg, #000000 30%)",
        }}
      >
        <div className="container text-center  text-white">
          <h2>Projects</h2>
          <p>Click on the project to get the source code</p>
          {chunkedDataset.map((row, rowIndex) => (
            <Row key={rowIndex} className="mb-4 ">
              {row.map((item, colIndex) => (
                <Col key={colIndex}>
                  <SkillsRow
                    width={"200px"}
                    height={"60px"}
                    title={item.name}
                    link={item.url}
                    background={
                      "linear-gradient(124deg, #000000  30%, purple  70%)"
                    }
                  />
                </Col>
              ))}
            </Row>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
