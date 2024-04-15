import styled, { css } from "styled-components";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const LinkList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.8rem;

  text-decoration: none;

  & svg {
    width: 4.5rem;
    height: 4.5rem;
    color: var(--color-grey-400);
  }
`;

const StyledGmail = styled.li`
  a :hover {
    color: var(--color-red-500);
    transition: all 0.3s;

    /* transform: scale(); */
  }
`;

const StyledGitHub = styled.li`
  a :hover {
    color: var(--color-grey-500);
    transition: all 0.3s;

    /* transform: scale(); */
  }
`;

const StyledLinkedin = styled.li`
  a :hover {
    color: var(--color-blue-900);
    transition: all 0.3s;
  }
`;

function LinkItem() {
  return (
    <LinkList>
      <StyledGmail>
        <a href="mailto:elempresario228@gmail.com">
          <BiLogoGmail />
        </a>
      </StyledGmail>

      <StyledGitHub>
        <a target="blank" href="https://github.com/YuniorAlex2">
          <IoLogoGithub />
        </a>
      </StyledGitHub>

      <StyledLinkedin>
        <a target="blank" href="https://www.linkedin.com/in/yuniorsuero/">
          <FaLinkedin />
        </a>
      </StyledLinkedin>
    </LinkList>
  );
}

export default LinkItem;
