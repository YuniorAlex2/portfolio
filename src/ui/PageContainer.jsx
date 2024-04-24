import { motion } from "framer-motion";
import styled from "styled-components";

const StyledPageContainer = styled(motion.div)`
  height: calc(70vh - 5rem);
  margin: 1.3rem;
  padding: 1.5rem 1.5rem;

  h1 {
    font-size: 6.5rem;
    font-weight: 200;
    line-height: 1.3;
  }

  h2 {
    width: 70%;
    font-size: 2rem;
    font-weight: 500;
    color: var(--color-light--1);
    margin-bottom: 2.5rem;
  }
`;

export const variants = {
  hidden: {
    opacity: 0,
    y: -30, // Adjust as needed for the direction of the animation
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1, // Adjust as needed for the speed of the animation
      ease: "easeInOut", // Adjust as needed for the easing of the animation
    },
  },
};

export default StyledPageContainer;
