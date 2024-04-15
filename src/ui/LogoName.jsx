import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  :hover {
    color: var(--color-grey-600);
  }
`;

const StyledLogoNav = styled(NavLink)`
  font-size: 2.5rem;
  text-decoration: none;
  color: var(--color-grey-800);
  font-family: "Montserrat", sans-serif;
  border-bottom: 1px solid var(--color-grey-500); /* Makes the underline thicker */
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: normal;
`;

function LogoName() {
  return (
    <StyledLogo>
      <StyledLogoNav to="/">Yunior Suero</StyledLogoNav>
    </StyledLogo>
  );
}

export default LogoName;
