import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import SwiperProjectCard from "./SwiperProjectCard";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { CardData } from "../data/CardData";
import { useViewport } from "../hooks/useViewport";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { MdSwipe } from "react-icons/md";
import "swiper/css";
import "swiper/css/effect-cards";

const ProjectContainer = () => {
  const { width } = useViewport();
  const breakpoint = 500;
  const [isGrid, setIsGrid] = useState(true);

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
      width: 80vw;
    }
  `;

  const CardChild = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 33.33%;
  `;

  const ButtonContainer = styled.div``;

  const Button = styled.button`
    font-size: 18px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 10px;
    width: 100px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    border-outline: none;
  `;
  const Span = styled.span`
  margin-bottom: 20px;
`;

  const HandleGridClick = () => {
    setIsGrid(true);
  };

  const HandleSwiperClick = () => {
    setIsGrid(false);
  };
  const RenderGrid = () => {
    return (
      <CardContainer>
        {CardData.map((item, index) => {
          return (
            <CardChild key={index}>
              <ProjectCard
                name={item.name}
                desc={item.description}
                image={item.image}
                tech={item.tech}
                altText={item.altText}
              />
            </CardChild>
          );
        })}
      </CardContainer>
    );
  };

  const RenderSwiper = () => {
    return (
      <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        loop={true}
        className="mySwiper"
        style={{
          width: "300px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        {CardData.map((item, index) => {
          return (
            <SwiperSlide key={index} style={{}}>
              <SwiperProjectCard
                name={item.name}
                desc={item.description}
                image={item.image}
                tech={item.tech}
                altText={item.altText}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Span>
        Swipe <MdSwipe />
      </Span>
      </>
    );
  };
  const RenderDesktop = () => {
    return (
      <>
        <ButtonContainer>
          <Button
            style={{
              backgroundColor: isGrid ? theme.accent : "transparent",
              color: isGrid ? "#fefefe" : theme.accent,
              borderColor: isGrid ? "none" : theme.accent,
              border: isGrid ? "none" : "2px solid",
            }}
            onClick={HandleGridClick}
          >
            Grid
          </Button>
          <Button
            style={{
              backgroundColor: isGrid ? "transparent" : theme.accent,
              color: isGrid ? theme.accent : "#fefefe",
              borderColor: isGrid ? theme.accent : "none",
              border: isGrid ? "2px solid" : "none",
            }}
            onClick={HandleSwiperClick}
          >
            Swiper
          </Button>
        </ButtonContainer>
        {isGrid ? RenderGrid() : RenderSwiper()}
      </>
    );
  };

  const RenderMobile = () => {
    return RenderSwiper();
  };

  return (
    <Container>
      <Header>
        <CustomSpan>University </CustomSpan>Projects
      </Header>
      {width < breakpoint ? RenderMobile() : RenderDesktop()}
    </Container>
  );
};

export default ProjectContainer;
