import { motion } from "framer-motion";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import LogoComponents from "../subComponents/LogoComponents";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import WaterWave from "react-water-wave";
import bg from "../assets/Images/bg.jpg";
import ContactBox from "./ContactBox";
import { ToastContainer } from "react-toastify";

const MainContainer = styled.div`
  /* background: ${(props) => props.theme.body}; */
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`;

const Experience = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(0.4rem + 0.5vw);
  transform: translate(25%, -50%) rotate(90deg);
  text-decoration: none;
  z-index: 1;
`;

const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg)
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > *:first-child {
    animation: ${rotate} infinite 1.5s linear;
    &:hover {
      cursor: pointer;
      -webkit-animation-play-state: paused;
      -moz-animation-play-state: paused;
      -o-animation-play-state: paused;
      animation-play-state: paused;
    }
  }

  & > *:last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const [contactBox, setContactBox] = useState(false);

  const close = (data) => {
    setContactBox(data);
  };

  const contactFunction = () => {
    setContactBox(!contactBox);
    setClick(false);
  };

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <WaterWave
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          background: `url(${bg}) no-repeat center center fixed`,
        }}
        dropRadius={50}
        perturbance={0.05}
        interactive={true}
      />
      <Container>
        {/* <PowerButton /> */}
        <LogoComponents theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />
        <Center click={click}>
          <YinYang
            onClick={() => setClick(!click)}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>click here</span>
        </Center>

        <Contact onClick={contactFunction}>
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say hi...
          </motion.h2>
        </Contact>

        <Experience to="/experience">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Experience
          </motion.h2>
        </Experience>

        <Work to="/work" click={click}>
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Work
          </motion.h2>
        </Work>

        <BottomBar>
          <About to="/about" click={click}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About
            </motion.h2>
          </About>

          <Skills to="/skills">
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              My Skills
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>

      {click && <Intro />}
      {contactBox && <ContactBox close={close} />}
      <ToastContainer theme="dark" />
    </MainContainer>
  );
};

export default Main;
