import styled, { css } from "styled-components";

const iconcolors = {
  react: css`
    color: var(--color-sky-500);
  `,

  supabse: css`
    color: var(--color-green-500);
  `,

  postgreSql: css`
    color: var(--color-blue-800);
  `,

  javaScript: css`
    color: var(--color-yellow-400);
  `,

  html: css`
    color: var(--color-orange-700);
  `,

  css: css`
    color: var(--color-blue-700);
  `,

  node: css`
    color: var(--color-lime-700);
  `,

  expressJs: css`
    color: var(--color-lime-400);
  `,

  redux: css`
    color: var(--color-purple-500);
  `,
};

const SkillsBox = styled.li`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  padding: 2.4rem 3.2rem;
  display: flex;
  align-items: center;
  width: 25%;
  flex-direction: column;
  gap: 2.4rem;

  svg {
    width: 6.5rem;
    height: 6.5rem;
    ${(props) => iconcolors[props.iconcolor]}

    transition: width 0.3s ease, height 0.3s ease;
  }

  svg:hover {
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export default SkillsBox;
