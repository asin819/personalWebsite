import { InstagramEmbed } from "react-social-media-embed";
import React, { useContext } from "react";
import "@ptkdev/webcomponent-instagram-widget";
import styled from "styled-components";
import { ThemeContext } from "../contexts/theme";

const AUISSection = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${theme.background};

    @media only screen and (max-width: 540px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
    }
  `;

  const TextContainer = styled.div`
    width: 35vw;
    color: ${theme.font};
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 540px) {
      width: 80vw;
      color: ${theme.font};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
  `;

  const CustomSpan = styled.div`
    color: ${theme.accent};
    font-family: MaziusItalic;
    font-weight: bolder;
  `;

  const IGContainer = styled.div`
    width: 30vw;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 540px) {
      width: 100vw;
      display: flex;
      justify-content: center;
    }
  `;

  const Header = styled.div`
    font-size: 4rem;
    margin-bottom: 20px;
    text-align: center;
    width: 100%;
    @media only screen and (max-width: 540px) {
      font-size: 1.8rem;
      margin-bottom: 20px;
      margin-top: 20px;

    }
  `;

  const Content = styled.div`
    font-size: 1.5rem;
    font-family: "Switzer-Regular";
    @media only screen and (max-width: 540px) {
      font-size: 1rem;
      font-family: "Switzer-Regular";
      text-align: center;
    }
  `;

  const RenderContent = () => {
    return (
      <TextContainer>
        <Header>
          <span className="customColor customFont">Extra </span> - Curriculars
        </Header>
        <Content>
          Elected as <span className="customColor customFont"> President </span> for Auckland
          University Indian Society for 2023. Leading a team of 8 to execute fun
          social and cultural events for over 450 members.
        </Content>
      </TextContainer>
    );
  };

  const RenderIG = () => {
    return (
      <IGContainer>
        <InstagramEmbed
          url="https://www.instagram.com/p/Co1MI-ovJlk/"
          width={370}
          height={465}
          title="Embedded Instagram Post"
        />
      </IGContainer>
    );
  };

  if (window.innerWidth < 400) {
    return (
      <Container>
        {RenderContent()}
        {RenderIG()}
      </Container>
    );
  } else {
    return (
      <Container>
        {RenderIG()}
        {RenderContent()}
      </Container>
    );
  }
};

export default AUISSection;
