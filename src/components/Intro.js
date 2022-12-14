import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/profile-img.png";
import CV from "../assets/Resume/resume.pdf";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 70vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    border-left: none;
    border-right: none;
    background: none;

    &::before {
      content: "";
      width: 2px;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      background: linear-gradient(
        to bottom,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    }

    &::after {
      content: "";
      width: 2px;
      height: 100%;
      right: 0;
      top: 0;
      position: absolute;
      background: linear-gradient(
        to bottom,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    }
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;

    @media (max-width: 768px) {
      align-items: center;
      position: block;
      transform: translate(-50%, 0%);
      width: 16rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

const Text = styled(motion.div)`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(0.5rem + 1.5vw);
  }

  button {
    background: ${(props) => props.theme.body};
    width: 200px;
    color: ${(props) => props.theme.text} !important;
    padding: 10px;
    border-radius: 20px;
    border: 2px solid ${(props) => props.theme.body};
    transition: all 0.5s ease;
    z-index: 10;
    cursor: pointer;

    &:hover {
      background-color: transparent;
      color: ${(props) => props.theme.body} !important;
    }

    @media (max-width: 768px) {
      padding: 5px;
      width: 100px;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
    align-items: center;
    text-align: center;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "70vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1>Hi,</h1>
          <h3>I'm Jia Wei</h3>
          <h6>Frontend developer that create simple and beautiful website.</h6>
          <a href={CV} download="Leong_Jia_Wei_Resume.pdf">
            <button>
              <h6>Download CV</h6>
            </button>
          </a>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
