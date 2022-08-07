import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Develope } from "./AllSvgs";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Skills } from "../data/SkillsData";
import LogoComponents from "../subComponents/LogoComponents";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import PowerButton from "../subComponents/PowerButton";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    height: auto;
    padding: 5.5rem 0;
  }
`;

const Main = styled.div`
  border: 2px solid ${[(props) => props.theme.text]};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  margin: 2rem;
  width: 30vw;
  height: 65vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 767px) {
    width: 50vw;
    height: 60vh;
  }

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  & > ul > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;

    @media only screen and (max-width: 1435px) {
      grid-template-columns: 1fr;
      font-size: 15px;
    }

    & > li {
      display: flex;
      list-style-type: none;
      align-items: center;

      & > :first-child {
        padding: 5px;
      }

      & > p {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  line-height: 20px;
  margin-left: 10px;

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.8em + 1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponents theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend Development
          </Title>
          <Description>
            I have experience in frontend development using both CMS and
            codebase.
          </Description>

          <ul>
            <strong>SKILLS</strong>
            <div>
              {Skills.map((data) => {
                return (
                  <li>
                    <TaskAltIcon />
                    <span>
                      {data.skill}({data.level})
                    </span>
                  </li>
                );
              })}
            </div>
          </ul>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} />
            Backend Development
          </Title>
          <Description>
            Experienced in creating api, database, and smart contract
            development.
          </Description>

          <ul>
            <strong>SKILLS</strong>
            <div>
              {Skills.map((data) => {
                return (
                  <li>
                    <TaskAltIcon />
                    <span>
                      {data.skill}({data.level})
                    </span>
                  </li>
                );
              })}
            </div>
          </ul>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
