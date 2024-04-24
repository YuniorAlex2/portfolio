import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StlyedProjectContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 8.5rem;
  height: 50%;
  gap: 1.5rem;

  li {
    list-style: none;
    background-color: var(--color-grey-100);
    border: 1px solid var(--color-grey-200);
    width: 70%;
    border-radius: var(--border-radius-md);
    opacity: 1;
    transition: 0.3s ease;
  }

  a {
    display: flex;
    gap: 1.5rem;
    width: 95%;
    align-items: center;
    text-decoration: none;
    color: aliceblue;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 600;
  }

  img {
    width: 20%;
    height: 20%;
    border-radius: var(--border-radius-md);
  }

  li:hover {
    transform: translateX(2.5rem);
  }
`;

function ProjectContent() {
  const { t } = useTranslation();
  const { theWildOasis, fastPizza, worldwise, theReactQuiz } = t("projects");
  return (
    <StlyedProjectContainer>
      <li>
        <a target="_blank" href="https://the-wild-oasis-ten-beta.vercel.app/">
          <img src="the-wild-oasis.jpg" alt="the-wild-oasis" />
          <h3> {theWildOasis}</h3>
        </a>
      </li>

      <li>
        <a
          target="_blank"
          href="https://fast-react-pizza-seven-drab.vercel.app/"
        >
          <img src="fast-pizza.jpg" alt="fast-pizza" />
          <h3> {fastPizza}</h3>
        </a>
      </li>

      <li>
        <a target="_blank" href="https://worldwise-puce.vercel.app/">
          <img src="wordwise.jpg" alt="wordwise" />
          <h3> {worldwise}</h3>
        </a>
      </li>

      <li>
        <a target="_blank" href="https://the-react-quiz-eight.vercel.app/">
          <img src="react-quiz.jpg" alt="react-quiz" />
          <h3> {theReactQuiz}</h3>
        </a>
      </li>
    </StlyedProjectContainer>
  );
}

export default ProjectContent;
