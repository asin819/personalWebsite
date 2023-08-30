import React from "react";
import LandingSection from "../components/LandingSection";
import ProjectContainer from "../components/ProjectContainer";
import TechStack from "../components/TechStack";
import AUISSection from "../components/AUISSection";
import SpotifyCard from "../components/SpotifyCard";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import styled from "styled-components";

const Desktop = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  const NonTechHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    background-color: ${theme.background};
    color: ${theme.font};
    padding-bottom: 40px;
  `;
  return (
    <>
      <LandingSection />
      <ProjectContainer />
      <TechStack />
      <NonTechHeader>Some non-🤓 stuff</NonTechHeader>
      <AUISSection />
      <SpotifyCard />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Desktop;
