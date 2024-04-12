import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { RiCodeView } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { MdFolderCopy } from "react-icons/md";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    /* background-color: var(--color-grey-50); */
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/">
            <IoHome />
            <span>Home</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/projects">
            <MdFolderCopy />
            <span>Projects</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/skills">
            <RiCodeView />
            <span>Skills</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact">
            <BsTelephoneFill />
            <span>Contact</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
