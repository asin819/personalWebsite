import React from "react";
import ProjectCard from "./ProjectCard";
import { BsDownload } from "react-icons/bs";
import AashishCV_25May from "../assets/AashishCV_25May.pdf";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { CardData } from "../data/CardData";

const ProjectContainer = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "../assets/AashishCV_25May.pdf";
    link.download = "AashishCV_25May.pdf";
    link.click();
  };

  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.backgroundSecondary};
    margin-top: 40px;
    color: ${theme.fontSecondary};
  `;

  const Header = styled.h1`
    font-size: 4rem;
  `;

  const CustomSpan = styled.span`
    color: ${theme.accent};
    font-family: MaziusItalic;
    font-weight: bolder;
  `;

  const CardContainer = styled.div`
    display: grid;
    align-content: center;
    justify-content: center;
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 1fr);
  `;

  const Resume = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
  `;

  const ResumeText = styled.h4`
    margin-right: 10px;
    cursor: pointer;
  `;
  return (
    <Container>
      <Header>
        <CustomSpan>University </CustomSpan>Projects
      </Header>
      <CardContainer>
        {CardData.map((item) => {
          return (
            <ProjectCard
              name={item.name}
              desc={item.description}
              image={item.image}
              tech={item.tech}
            />
          );
        })}
      </CardContainer>
      <Resume onClick={downloadResume}>
        <ResumeText>Download my resume</ResumeText>
        <BsDownload />
      </Resume>
    </Container>
  );
};

export default ProjectContainer;
