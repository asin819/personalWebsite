import React from "react";
import ProjectCard from "./ProjectCard";
import { BsDownload } from "react-icons/bs";
import AashishCV_25May from "../assets/AashishCV_25May.pdf";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { CardData } from "../data/CardData";
import { ThemeSwitcher } from "./ThemeSwitcher";

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
    padding-top: 20px;
    color: ${theme.fontSecondary};
  `;

  const Header = styled.h1`
    font-size: 4rem;
    text-align: center;
  `;

  const CustomSpan = styled.span`
    color: ${theme.accent};
    font-family: MaziusItalic;
    font-weight: bolder;
  `;

  const CardContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (min-width: 1400px) {
    width: 80vw
  }
  `;

  const CardChild = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 33.33%
  `

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

  const SwitchContainer = styled.div`
  width: 100%;
  background-color: ${theme.backgroundSecondary};
  display: flex;
  justify-content: end;
`;
  return (
    <Container>
      {/* <SwitchContainer>
        <ThemeSwitcher/>
      </SwitchContainer> */}
      <Header>
        <CustomSpan>University </CustomSpan>Projects
      </Header>
      <CardContainer>
        {CardData.map((item) => {
          return (
            <CardChild>
            <ProjectCard
              name={item.name}
              desc={item.description}
              image={item.image}
              tech={item.tech}
            /></CardChild>
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
