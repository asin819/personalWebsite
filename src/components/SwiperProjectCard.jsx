import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

const ProjectCard = (props) => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  const Container = styled.div`
    height: auto;
    width: 300px;
    background-color: ${theme.background};
    color: ${theme.font};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-right: 0px;
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
    padding-left: 20px;
    margin-bottom: 5px;
    // padding-top: 10px;
    font-size: 1.5rem;
  `;

  const ProjectTech = styled.p`
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    word-break: break-all;
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 0.7rem;
    white-space: pre;
    color: ${theme.accent};
  `;

  const ProjectDescription = styled.p`
    // padding-top: 5px;
    padding-left: 20px;
    padding-right: 20px;
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
