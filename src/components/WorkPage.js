import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import { motion } from "framer-motion";

import BigTitle from "../subComponents/BigTitle";
import LogoComponents from "../subComponents/LogoComponents";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  height: 700vh;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    height: 750vh;
  }
`;

const Main = styled(motion.div)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  align-items: center;

  color: white;

  @media (max-width: 768px) {
    top: 16rem;
    left: calc(5rem + 10vw);
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

//Framer-motion Configuration
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

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <LogoComponents theme="dark" />
        <SocialIcons theme="dark" page="work" />
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>

        <BigTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
