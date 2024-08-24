import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Skills/skills.css";
import SkillsRow from "./skillsRow";

const Skills = () => {
  const rows = [
    {
      title: "Html/Css",
      icon: <i className="bi bi-filetype-html mx-auto pt-1 h1"></i>,
    },
    {
      title: "Bootstrap",
      icon: <i className="bi bi-bootstrap h1 mx-auto pt-1"></i>,
    },
    {
      title: "Javascript",
      icon: <i className="bi bi-filetype-js mx-auto h1 pt-1"></i>,
    },
    {
      title: "React Js",
      icon: <i className="bi bi-filetype-jsx mx-auto pt-1 h1"></i>,
    },
    {
      title: "Redux",
      icon: <i className="bi bi-filetype-jsx mx-auto pt-1 h1"></i>,
    },
    {
      title: "Firebase",
      icon: <i class="bi bi-fire mx-auto pt-1 h1"></i>,
    },
    {
      title: "Node Js",
      icon: <i className="bi bi-hexagon-fill mx-auto h1 pt-1 "></i>,
    },
    {
      title: "TypeScript",
      icon: <i className="bi bi-file-code-fill h1 pt-1 mx-auto"></i>,
    },
    {
      title: "DataEntry",
      icon: <i className="bi bi-clipboard-data h1 mx-auto pt-1"></i>,
    },
    {
      title: "Data Annotation",
      icon: <i className="bi bi-clipboard-data h1 mx-auto pt-1"></i>,
    },
    {
      title: "Stream Io",
      icon: <i class="bi bi-app h1 mx-auto pt-1"></i>,
    },
  ];

  // Split rows into chunks of 4 for rendering in rows
  const chunkedRows = rows.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 4);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <Container className="py-3" id="skills">
      <Row className="gap-2 py-2">
        <Col lg>
          <h1 className="text-center text-lg-start">Skills</h1>
          <p className="text-center text-lg-start">
            I've got working experience in these skills
          </p>
        </Col>
        {chunkedRows.map((chunk, rowIndex) => (
          <Row key={rowIndex} className="gap-2">
            {chunk.map((item, itemIndex) => (
              <Col lg key={itemIndex}>
                <SkillsRow
                  title={item.title}
                  background={"linear-gradient(124deg, #000000  30%, #f5540a  70%)"}
                  width={"200px"}
                  icon={item.icon}
                />
              </Col>
            ))}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
