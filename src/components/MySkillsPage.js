import React, { useState, useEffect } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { lightTheme } from "./Themes";
import { Develope, Game } from "./AllSvgs";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Frontend, Backend, Others } from "../data/SkillsData";
import LogoComponents from "../subComponents/LogoComponents";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 200vh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 10vh;

  @media only screen and (max-width: 767px) {
    display: flex;
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

  & > ul {
    font-size: calc(0.7rem + 1vw);
    & > div {
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
        font-size: calc(0.6rem + 0.5vw);

        & > :first-child {
          padding: 5px;
        }

        & > p {
          display: flex;
          flex-direction: column;
        }
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

const shake = keyframes`
from {
  transform: translateY(-50%);
}
to {
  transform: translateY(0%);
}
`;

const Arrow = styled.div`
  position: fixed;
  left: 50%;
  top: 90%;
  transform: translateX(-50%);
  animation: ${shake} infinite 1s alternate;

  & > :first-child {
    font-size: calc(2em + 1vw);
  }
`;

//Framer-motion configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const MySkillsPage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const check = () => {
      if (window.pageYOffset < 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", check);
    return () => {
      window.removeEventListener("scroll", check);
    };
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <LogoComponents theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend Development
          </Title>
          <Description>
            Experienced in frontend development using both CMS and codebase.
          </Description>

          <ul>
            <strong>SKILLS</strong>
            <div>
              {Frontend.map((data) => {
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
              {Backend.map((data) => {
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
            <Game width={40} height={40} />
            Others
          </Title>
          <Description>
            Experienced in game development, designing and video editing while
            studying in my university.
          </Description>

          <ul>
            <strong>SKILLS</strong>
            <div>
              {Others.map((data) => {
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
        <BigTitle text="SKILLS" top="80%" right="30%" />
        {visible && (
          <Arrow>
            <KeyboardDoubleArrowDownIcon />
          </Arrow>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
