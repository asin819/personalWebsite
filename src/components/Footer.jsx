import React from "react";
import { FaReact, FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiGreensock } from "react-icons/si";
import styled from 'styled-components'
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

const Footer = () => {

  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  function linkedIn() {
    window.location.href = "https://www.linkedin.com/in/aashish4real/";
  }

  function gitHub() {
    window.location.href = "https://github.com/asin819";
  }

  function greenSock() {
    window.location.href = "https://greensock.com/gsap/";
  }

  const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  background-color: ${theme.backgroundSecondary};

  @media only screen and (max-width: 400px) {
    flex-direction: column;
    height: auto;
  }
  `

  const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Switzer-Regular";
  font-size: 1.5rem;
  margin: 20px;

  @media only screen and (max-width: 400px) {
    font-size: 2rem;
  }
  `
  return (
    <Container>
      <Content>
        <FaLinkedin
          className="reactIcon"
          style={{ marginRight: "20px", cursor: "pointer" }}
          onClick={linkedIn}
        />
        <FaGithub
          className="reactIcon"
          style={{ cursor: "pointer" }}
          onClick={gitHub}
        />
      </Content>
      <Content>
        <span className="mobileFooter">Made using</span><FaReact className="reactIcon" style={{ margin: "5px" }} />{" "}
        <BiLogoJavascript
          className="reactIcon"
          style={{ marginRight: "5px" }}
        />{" "}
        <SiGreensock
          className="reactIcon"
          style={{ cursor: "pointer" }}
          onClick={greenSock}
        />
      </Content>
    </Container>
  );
};

export default Footer;
