import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import LogoComponents from "../subComponents/LogoComponents";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import PowerButton from "../subComponents/PowerButton";

import astronaut from "../assets/Images/spaceman.png";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% {
  transform:translateY(-10px)
}
50% {
  transform:translateY(15px) translateX(15px)
}
100% {
  transform:translateY(-10px)
}
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
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

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <LogoComponents theme="dark" />
        <SocialIcons theme="dark" page="about" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>

        <Main>
          I'm a front-end developer who likes to create beautiful websites with
          a great user experience. I can turn a design into a real working
          website with responsive design.
          <br />
          <br />
          I enjoy creating beautiful websites because it feels like an
          accomplishment to complete one.
          <br />
          <br />
          I graduated from Universiti Utara Malaysia with a degree in bachelor
          of science (multimedia).
          <br />
          <br />I am a positive thinker, and I think this helps me the most in
          difficult moments.
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
