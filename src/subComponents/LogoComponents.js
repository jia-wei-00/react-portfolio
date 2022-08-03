import React from "react";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";

const Logo = styled.h1`
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
  return <Logo theme={props.theme}>Jia Wei</Logo>;
};

export default LogoComponents;