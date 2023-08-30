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
  `;

  const TechContainer = styled.div`
    display: grid;
    align-content: center;
    justify-content: center;
    grid-auto-flow: row;
    grid-template-columns: repeat(5, 1fr);
    margin-bottom: 40px;
  `;

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
        {TechStackData.map((item) => {
          return (
            <TechItem>
              <TechIcon>{item.icon}</TechIcon>
              {item.name}
            </TechItem>
          );
        })}
      </TechContainer>
    </Container>
  );
};

export default TechStack;
