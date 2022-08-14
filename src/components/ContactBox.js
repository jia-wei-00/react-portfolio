import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CancelIcon from "@mui/icons-material/Cancel";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;

  width: 65vw;
  max-width: 750px;
  height: 55vh;
  display: flex;

  background: ${(props) => props.theme.text};
  background-repeat: no-repeat;

  z-index: 1;

  & > :first-child {
    position: absolute;
    top: -1.8rem;
    right: -1.8rem;
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

const SubBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;

  & > :first-child {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    height: 100%;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: calc(5px + 0.8vw) 0;

      & > h5,
      h2 {
        color: ${(props) => props.theme.body};
        padding: 5px;
      }
    }

    & > input,
    textarea {
      width: 100%;
      height: calc(1em + 0.8vw);
      max-width: 600px;
      padding: 10px;
      margin: 10px 0;
      border-radius: 10px;
      border: 1px solid ${(props) => props.theme.body};
      background: ${(props) => props.theme.body};
    }

    & > textarea {
      resize: none;
      height: calc(1em + 4.8vw);
    }

    & > button {
      padding: 10px;
      margin: calc(5px + 0.8vw) 0;
      width: 150px;
      border-radius: 10px;
      border: 1px solid ${(props) => props.theme.body};
      background: ${(props) => props.theme.body};
      color: ${(props) => props.theme.text};
      transition: all 0.5s ease;

      &:hover {
        background: ${(props) => props.theme.text};
        color: ${(props) => props.theme.body};
        cursor: pointer;
      }
    }
  }
`;

const ContactBox = (props) => {
  const form = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const sendEmail = async (e) => {
    e.preventDefault();

    await toast.promise(
      emailjs
        .sendForm(
          "service_altpp9t",
          "template_icep27l",
          form.current,
          "uLGAa7lNHpoKmGu0q"
        )
        .then(
          (result) => {
            console.log(result.text);
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        ),
      {
        pending: "Loading... Please wait",
        success: "Success 👌",
        error: "Error occur 🤯",
        theme: "dark",
      }
    );
  };

  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2 }}
    >
      <CancelIcon onClick={() => props.close(false)} />
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <h5>Get In Touch</h5>
              <h2>Contact Me</h2>
            </div>

            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              row="7"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              required
            />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default ContactBox;
