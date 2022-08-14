import React from "react";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";
import { motion } from "framer-motion";

const Logo = styled(motion.h1)`
  display: inline-block;
  color: ${(props) =>
    props.theme === "dark" ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoComponents = (props) => {
  return (
    <Logo
      initial={{
        y: -200,
        transition: { type: "spring", duration: 1.5, delay: 1 },
      }}
      animate={{
        y: 0,
        transition: { type: "spring", duration: 1.5, delay: 1 },
      }}
      theme={props.theme}
    >
      Jia Wei
    </Logo>
  );
};

export default LogoComponents;
