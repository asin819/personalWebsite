import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { TechStackData } from "../data/TechStackData";
const TechStack = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  const Container = styled.div`
    width: 100%;
    background-color: ${theme.backgroundSecondary};
    padding-bottom: 40px;
    color: var(--lightColor);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Header = styled.div`
    font-size: 4rem;
    text-align: center;
  `;

  const TechContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (min-width: 1400px) {
    width: 50vw
  }
  `;

  const ChildItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 20%
  `

  const TechItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Switzer-Regular";
    margin: 20px;
  `;
  const TechIcon = styled.div`
    font-size: 4rem;
    margin-bottom: 10px;
  `;

  const CustomSpan = styled.span`
    color: ${theme.accent};
    font-family: MaziusItalic;
    font-weight: bolder;
  `;

  return (
    <Container>
      <Header>
        Technology <CustomSpan> Stack </CustomSpan>
      </Header>
      <TechContainer>
        {TechStackData.map((item, index) => {
          return (
            <ChildItem key={index}>
            <TechItem>
              <TechIcon>{item.icon}</TechIcon>
              {item.name}
            </TechItem>
            </ChildItem>
          );
        })}
      </TechContainer>
    </Container>
  );
};

export default TechStack;
