import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  cursor: pointer;

  /* 
  &:hover {
    background-color: var(--color-grey-100);
  } */

  & svg {
    width: 2.7rem;
    height: 2.7rem;
    color: var(--color-brand-600);
  }
`;

export default ButtonIcon;
