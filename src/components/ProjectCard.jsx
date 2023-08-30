import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

const ProjectCard = (props) => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  const Container = styled.div`
    height: 400px;
    width: 340px;
    background-color: ${theme.background};
    color: ${theme.font};
    margin: 20px;
    margin-bottom: 60px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    
  `;

  const ImageContainer = styled.div`
    width: 340px;
    height: 200px;
  `;

  const ProjectImage = styled.img`
    height: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `;

  const ProjectName = styled.p`
    margin-left: 20px;
    margin-bottom: 5px;
    margin-top: 10px;
    font-size: 1.5rem;
  `;

  const ProjectTech = styled.p`
    margin-left: 20px;
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 0.8rem;
    white-space: pre;
    color: ${theme.accent};
  `;

  const ProjectDescription = styled.p`
    margin-top: 5px;
    margin-left: 20px;
    margin-right: 20px;
    text-align: justify;
  `;
  return (
    <Container>
      <ImageContainer>
        <ProjectImage src={props.image} />
      </ImageContainer>
      <ProjectName>{props.name}</ProjectName>
      <ProjectTech>{props.tech}</ProjectTech>
      <ProjectDescription>{props.desc}</ProjectDescription>
    </Container>
  );
};

export default ProjectCard;
