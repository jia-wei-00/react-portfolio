import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import DoneIcon from "@mui/icons-material/Done";
import styled from "styled-components";
import { motion } from "framer-motion";

const List = styled(motion.ul)`
  list-style-type: none;
  border: 2px solid ${(props) => props.theme.text};
  padding: 10px;

  &:hover {
    background: ${(props) => props.theme.text};
    transition: all 1s ease;

    & > div {
      & > :first-child {
        color: ${(props) => props.theme.body};
      }

      & > li {
        color: ${(props) => props.theme.body};
      }
    }
  }

  & > div {
    display: flex;
    align-items: center;

    & > :first-child {
      padding-right: 10px;
      width: 20px;
    }

    & > li {
      text-align: justify;
      font-family: "Karla", sans-serif;
      font-weight: 700;
    }
  }
`;

const Title = styled(motion.div)`
  font-family: "Karla", sans-serif;
  font-weight: 700;

  & > div {
    padding: 10px;
    color: ${(props) => props.theme.text};

    &:hover {
      color: ${(props) => props.theme.body};
      background: ${(props) => props.theme.text};
    }
  }
`;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const WorkTimeline = (props) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        <Title variants={Item}>
          <div>
            {props.data.name} <br /> ({props.data.date})
          </div>
        </Title>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <List variants={Item}>
          {props.data.desc.map((data) => {
            return (
              <div>
                <DoneIcon />
                <li>{data}</li>
              </div>
            );
          })}
        </List>
      </TimelineContent>
    </TimelineItem>
  );
};

export default WorkTimeline;
