import LanguageBotton from "../components/LanguageBotton";
import AppNav from "../ui/AppNav";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledHome = styled.div`
  height: calc(70vh - 5rem);
  margin: 1.3rem;
  padding: 1.5rem 1.5rem;

  section {
    display: flex;
    flex-direction: column;
    height: 85%;
    align-items: center;
    justify-content: center;
    gap: 1.7rem;
    text-align: center;
  }

  section ul {
    display: flex;
    list-style: none;
    height: 25%;
    align-items: center;
    justify-content: center;
    gap: 2.3rem;
    text-align: center;
  }

  h1 {
    font-size: 6.5rem;
    font-weight: 200;
    line-height: 1.3;
  }

  h2 {
    width: 80%;
    font-size: 2rem;
    font-weight: 500;
    color: var(--color-light--1);
    margin-bottom: 2.5rem;
  }
`;

function Home() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <StyledHome>
      <AppNav />
      <section>
        <h1>{t("greeting")}</h1>
        <h2>{t("description")}</h2>

        <ul>
          <li>
            <Button
              size="large"
              variation="secondary"
              onClick={() => navigate("/projects")}
            >
              Projects
            </Button>
          </li>
          <li>
            <Button
              size="large"
              variation="secondary"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </Button>
          </li>
        </ul>
      </section>
    </StyledHome>
  );
}

export default Home;
