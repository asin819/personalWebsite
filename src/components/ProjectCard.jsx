import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

const ProjectCard = (props) => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  const Container = styled.div`
    height: 450px;
    width: 300px;
    background-color: ${theme.background};
    color: ${theme.font};
    margin: 20px;
    margin-bottom: 60px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    
  `;

  const ImageContainer = styled.div`
    width: 300px;
    height: 200px;
  `;

  const ProjectImage = styled.img`
    // height: 200px;
    width: 100%;
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
    margin-right: 20px;
    width: 100%;
    word-break: break-all;
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 0.7rem;
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
        <ProjectImage src={props.image} alt={props.altText} width={300} height={200}/>
      </ImageContainer>
      <ProjectName>{props.name}</ProjectName>
      <ProjectTech>{props.tech}</ProjectTech>
      <ProjectDescription>{props.desc}</ProjectDescription>
    </Container>
  );
};

export default ProjectCard;
