import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Linkedin, Whatsapp } from "../components/AllSvgs";
import { darkTheme } from "../components/Themes";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: calc(1rem + 2vw);
  transform: translateX(-50%);

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.theme === "dark" ? darkTheme.text : darkTheme.body};

  @media (max-width: 768px) {
    background-color: ${(props) => props.color};
  }
`;

const SocialIcons = (props) => {
  const [color, setColor] = useState(darkTheme.text);

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  useEffect(() => {
    if (!props.page) {
      if (isMobile) {
        setColor(darkTheme.body);
      } else {
        setColor(darkTheme.text);
      }
    } else {
      setColor(darkTheme.text);
    }
  }, [isMobile]);

  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://wa.link/s1uxa5" }}
        >
          <Whatsapp
            width={30}
            height={25}
            fill={props.theme === "dark" ? color : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/jia-wei-00" }}
        >
          <Github
            width={30}
            height={25}
            fill={props.theme === "dark" ? color : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.linkedin.com/in/leong-jia-wei-/" }}
        >
          <Linkedin
            width={30}
            height={25}
            fill={props.theme === "dark" ? color : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.facebook.com/weijia.leong/" }}
        >
          <Facebook
            width={30}
            height={25}
            fill={props.theme === "dark" ? color : darkTheme.body}
          />
        </NavLink>
      </motion.div>

      <Line
        theme={props.theme}
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
        color={color}
      />
    </Icons>
  );
};

export default SocialIcons;
