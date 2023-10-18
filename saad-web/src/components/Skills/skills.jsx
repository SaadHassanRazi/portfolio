import React from "react";
import Container from "react-bootstrap/esm/Container";
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
        icon:   <i class="bi bi-bootstrap h1 mx-auto pt-1"></i>,
      },
      {
        title: "Javascript",
        icon:  <i class="bi bi-filetype-js mx-auto h1 pt-1"></i>,
      },
      {
        title: "React Js",
        icon:  <i class="bi bi-filetype-jsx mx-auto pt-1 h1"></i>,
      },
      {
        title: "Node Js",
        icon:  <i class="bi bi-hexagon-fill mx-auto h1 pt-1 "></i>,
      },
      {
        title: "Flutter",
        icon: <i class="bi bi-file-code-fill h1 pt-1 mx-auto"></i>,
      },
      {
        title: "DataEntry",
        icon:  <i class="bi bi-clipboard-data h1 mx-auto pt-1"></i>,
      },

  ];
  return (
    <>
      <Container className="py-3" id="skills">
        <Row className="gap-2 py-2">
          <Col>
            <h1 className="text-center text-lg-start">Skills</h1>

            <p className="text-center text-lg-start">
              I've got working experience in these skills
            </p>
          </Col>
          <SkillsRow title={rows[0].title} icon={rows[0].icon} />
          <SkillsRow title={rows[1].title} icon={rows[1].icon} />
          <SkillsRow title={rows[2].title} icon={rows[2].icon} />
        
        
        </Row>
        <Row className="gap-2">
        <SkillsRow title={rows[3].title} icon={rows[3].icon} />
        <SkillsRow title={rows[4].title} icon={rows[4].icon} />
        <SkillsRow title={rows[5].title} icon={rows[5].icon} />
        <SkillsRow title={rows[6].title} icon={rows[6].icon} />
        </Row>
      </Container>
    </>
  );
};

export default Skills;
