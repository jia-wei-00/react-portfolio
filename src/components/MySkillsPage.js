import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vh;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${[(props) => props.theme.text]};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Main>1</Main>
        <Main>2</Main>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
