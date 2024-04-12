import styled from "styled-components";
import MainNav from "./MainNav";
import { HiXMark } from "react-icons/hi2";
import { useSidebar } from "../context/SidebarContext";
import { motion } from "framer-motion";

const StyleSidebar = styled(motion.div)`
  background-color: var(--color-grey-0);
  color: wheat;
  padding: 1rem 2rem 2.5rem 3rem;
  position: fixed;
  top: 0%;
  right: 0%;
  border: 1px solid var(--color-grey-200);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 20%;
  overflow-y: auto;
  overflow-x: hidden;
  /* overflow: auto; */
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 3s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

function SideBar() {
  const { isOpen, dispatch } = useSidebar();

  return (
    <>
      {isOpen && (
        <StyleSidebar
          initial={{ x: 80 }} // Initial position (off-screen to the right)
          animate={{ x: 0 }} // Animated to move in from the right
          transition={{ type: "spring", stiffness: 120 }}
        >
          <Button onClick={() => dispatch({ type: "sidebar/close" })}>
            <HiXMark />
          </Button>
          <MainNav />
        </StyleSidebar>
      )}
    </>
  );
}

export default SideBar;
