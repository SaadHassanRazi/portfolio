import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SkillsRow from "../Skills/skillsRow";

const Project = () => {
  const dataset = [
    {
      name: "React Calculator",
      url: "https://github.com/SaadHassanRazi/react-Calculator.git",
    },
    {
      name: "Angular Tic Tac Toe Game",
      url: "https://github.com/SaadHassanRazi/angular-tictactoe.git",
    },
    {
      name: "Angular Sudoku game",
      url: "https://github.com/SaadHassanRazi/sudoko-game.git",
    },
    {
      name: "React Crud Operations",
      url: "https://github.com/SaadHassanRazi/crud-operations-react.git",
    },
    {
      name: "Clean Website Figma Design",
      url: "https://github.com/SaadHassanRazi/clean-figma-design.git",
    },
    {
      name: "Reactgram",
      url: "https://github.com/SaadHassanRazi/reactgram-offical.git",
    },
    {
      name: "TodoList",
      url: "https://github.com/SaadHassanRazi/todolist-reactjs.git",
    },
    {
      name: "Role Based Authentication",
      url: "https://github.com/SaadHassanRazi/role-based-authentication.git",
    },
    {
      name: "Newsletter",
      url: "https://github.com/SaadHassanRazi/news-letter.git",
    },
    {
      name: "Number Guessing Game",
      url: "https://github.com/SaadHassanRazi/Number_guessing_game.git",
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
                      " linear-gradient(124deg, #f5540a  70%, #000000 30%)"
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
