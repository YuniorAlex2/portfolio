import styled from "styled-components";
import LanguageBotton from "../components/LanguageBotton";
import { HiOutlineMenu } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";
import SideBar from "./SideBar";
import { useSidebar } from "../context/SidebarContext";
import LogoName from "./LogoName";

const StyledAppNav = styled.nav`
  margin-top: 1rem;
  margin-bottom: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    padding: 1.2rem 4.8rem;
    list-style: none;
    display: flex;
    gap: 2.4rem;
    align-items: center;
    justify-content: flex-end;
    background-color: var(--color-dark--2);
    border-radius: 7px;
  }
  /* 
  button {
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
    color: var(--color-grey-600);
    background: var(--color-dark--0);
    border: 1px solid var(--color-grey-200);
    border-radius: 30%;
    transition: all 0.2s;
  } */

  /* button:hover {
    background-color: var(--color-grey-100);
  } */

  /* a:link,
  a:visited {
    display: block;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0.5rem 2rem;
    border-radius: 5px;
  }

  a:active {
    background-color: var(--color-dark--0);
  } */
`;

function AppNav() {
  const { isOpen, dispatch } = useSidebar();

  return (
    <StyledAppNav>
      <LogoName />
      <ul>
        <li>
          <LanguageBotton />
        </li>
        <li>
          <ButtonIcon onClick={() => dispatch({ type: "sidebar/open" })}>
            <HiOutlineMenu />
          </ButtonIcon>
        </li>

        <li>{isOpen && <SideBar />}</li>
      </ul>
    </StyledAppNav>
  );
}

export default AppNav;
