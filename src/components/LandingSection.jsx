import React, { useEffect, useRef, useState } from "react";
import "./LandingSection.css";
import { gsap } from "gsap";
import { Expo } from "gsap";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { ThemeSwitcher } from "./ThemeSwitcher";

const LandingSection = () => {
  const block1ref = useRef(null);
  const block2ref = useRef(null);
  const block3ref = useRef(null);
  const landingChildRef = useRef(null);
  const landingChildLeftRef = useRef(null);
  const landingChildMiddleRef = useRef(null);
  const landingChildRightRef = useRef(null);
  const block3ContentContainerRef = useRef(null);

  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  var counter = 0;

  useEffect(() => {
    var tl = gsap.timeline();
    tl.to(landingChildLeftRef.current, {
      x: "0px",
      duration: 1.5,
      ease: Expo.easeInOut,
    })
      .to(landingChildMiddleRef.current, {
        x: "0px",
        duration: 1.5,
        delay: -1.25,
        ease: Expo.easeInOut,
      })
      .to(landingChildRightRef.current, {
        x: "0px",
        duration: 1.5,
        delay: -1.25,
        ease: Expo.easeInOut,
      })

      .to(landingChildRef.current, {
        y: "-100%",
        duration: 0.7,
        delay: 1,
        ease: Expo.easeInOut,
      })
      .to(block1ref.current, {
        height: 0,
        duration: 1,
        ease: Expo.easeInOut,
      })
      .to(block2ref.current, {
        height: "100%",
        duration: 1,
        delay: -1,
        ease: Expo.easeInOut,
      })
      .to(block3ref.current, {
        height: "100%",
        duration: 1,
        delay: -0.7,
        ease: Expo.easeInOut,
      })
      .to(block3ContentContainerRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: Expo.easeInOut,
      });

    const changingTextElements =
      block3ContentContainerRef.current.querySelectorAll(".changingText");

    gsap.set(changingTextElements, { transformOrigin: "center center" });

    const flippingTimeline = gsap.timeline({ repeat: -2, yoyo: true });
    flippingTimeline
      .to(changingTextElements, {
        rotationX: -90,
        duration: 0.75,
        delay: 0.5,
        ease: Expo.easeInOut,
      })
      .call(() => {
        changingTextElements.forEach((element) => {
          element.textContent = getRandomText(); // Change the text content to a new random value
        });
      });
  }, [theme]);


  const getRandomText = () => {
    const texts = ["Passionate 😤", "Creative 💅", "Caffeine Addict ☕"]; // Add your desired texts here
    counter = counter + 1;
    return texts[counter % 3];
  };

  const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: red;
  `;

  const Block1 = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${theme.background};
    color: ${theme.font};
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Block2 = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: ${theme.accent};
  `;

  const Block3 = styled.div`
    width: 100%;
    height: 0%;
    position: absolute;
    bottom: 0;
    background-color: ${theme.background};
    color: #303030;
    display: flex;
    // justify-content: center;
    flex-direction: column;
    // margin-bottom: 40px;
  `;

  const Block3ContentContainer = styled.div`
    display: flex;
    height: 100%;
    overflow: hidden;
    justify-content: center;
    flex-direction: column;

    transform: translate(0, 1000px);
    opacity: 0;
    color: ${theme.font};
    transition: transform 0.5s, display 0.5s;
  `;

  const Block3Content = styled.div.attrs(() => ({
    className: "block3Content",
  }))`
  margin-left: calc(80vw/2);
  display: flex;
  font-family: 'Switzer-Extrabold';
  font-size: calc(100vw/13);
  line-height: calc(100vw/15)
  transition: margin-left 0.5s, font-size 0.5s, line-height 0.5s;

  @media only screen and (max-width: 500px) {
    margin-left: calc(80vw/3);
    font-size: calc(100vw/10);
    line-height: calc(100vw/10)
  }
  `;
  const SwitchContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  background-color: ${theme.background};
  display: flex;
  align-items: center;
  `;

  const ChangingText = styled.div.attrs(() => ({
    className: "changingText",
  }))`
    width: fit-content;
    height: fit-content;
    padding: 10px;
    background-color: ${theme.backgroundSecondary};
    color: ${theme.fontSecondary};
    transition: font-size 0.5s; /* Add a transition for font-size */

    @media only screen and (max-width: 500px) {
      font-size: calc(100vw / 12);
    }
  `;
  return (
    <Container>
      <Block1 ref={block1ref}>
        <h1 id="landingDiv">
          <span id="landingParent">
            <div id="landingChild" ref={landingChildRef}>
              <div id="landingChildLeft" ref={landingChildLeftRef}>
                Hi,{" "}
              </div>
              <div id="landingChildMiddle" ref={landingChildMiddleRef}>
                I'm{" "}
              </div>
              <div id="landingChildRight" ref={landingChildRightRef}>
                Aashish{" "}
              </div>
            </div>
          </span>
        </h1>
      </Block1>
      <Block2 ref={block2ref} />
      <Block3 ref={block3ref}>
        <Block3ContentContainer ref={block3ContentContainerRef}>
          <SwitchContainer>
            <ThemeSwitcher />
          </SwitchContainer>
          <div className="block3Content moveRight">I'M A</div>
          <div className="block3Content moveLeft">
            <ChangingText />
          </div>
          <Block3Content>FINAL YEAR</Block3Content>
          <div className="block3Content customColor customFont">SOFTWARE</div>
          <div className="block3Content moveLeft ">ENGINEERING</div>
          <div className="block3Content">STUDENT</div>
        </Block3ContentContainer>
      </Block3>
    </Container>
  );
};

export default LandingSection;
