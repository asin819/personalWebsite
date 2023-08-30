import React from "react";
import { Spotify } from "react-spotify-embed";
import './SpotifyCard.css'
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";


const SpotifyCard = () => {

  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);


  const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${theme.background};
  color: ${theme.font};
  

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  `

  const Text = styled.div`
  width: 30vw;
  font-size: 4rem;
  
  @media only screen and (max-width: 500px) {
    font-size: 1.8rem;
    width: 70vw;
    margin-bottom: 50px;
    text-align: center;

  }
`

  const CustomSpan = styled.span`
    color: ${theme.accent};
    font-family: MaziusItalic;
    font-weight: bolder;
  `;


  return (
    <Container>
        <Text>Here's what I <CustomSpan>listen</CustomSpan> to 🎧</Text>
    <Spotify
      className="SpotifyPlayer"
      link="https://open.spotify.com/playlist/41VAFy2alm71P5kyFckLdW?si=19179be7676e4505"
    />
    
    </Container>
  );
};

export default SpotifyCard;
