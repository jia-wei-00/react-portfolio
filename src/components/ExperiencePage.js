import React from "react";
import styled from "styled-components";
import img from "../assets/Images/experience-bg.jpg";
import Timeline from "@mui/lab/Timeline";
import WorkTimeline from "./WorkTimeline";
import WaterWave from "react-water-wave";

import LogoComponent from "../subComponents/LogoComponents";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Experience } from "../data/ExperienceData";

const MainContainer = styled.div`
  /* background-image: url(${img}); */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: auto;
  height: 100vh;

  @media only screen and (max-width: 1024px) {
    height: auto;
  }

  @media only screen and (max-width: 400px) {
    width: 400px;
  }
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10rem;
  width: 75%;

  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;

const PageTitle = styled.h1`
  position: fixed;
  top: 5rem;
  left: 5rem;
  color: rgba(0, 0, 0, 0.1);
  font-size: calc(5rem + 5vw);
  z-index: 1;
`;

const ExperiencePage = () => {
  return (
    <MainContainer>
      <Container>
        <PageTitle>Experience</PageTitle>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <WaterWave
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            backgroundSize: "cover",
            background: `url(${img}) no-repeat center center fixed`,
          }}
          dropRadius={50}
          perturbance={0.05}
          interactive={true}
        />

        <Center>
          <Timeline position="alternate">
            {Experience.map((data) => {
              return <WorkTimeline key={data.id} data={data} />;
            })}
          </Timeline>
        </Center>
      </Container>
    </MainContainer>
  );
};

export default ExperiencePage;
