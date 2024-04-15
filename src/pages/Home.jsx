import AppNav from "../ui/AppNav";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import StyledPageContainer from "../ui/PageContainer";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { btn2, btn5 } = t("buttons");

  return (
    <StyledPageContainer>
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
              {btn2}
            </Button>
          </li>
          <li>
            <Button
              size="large"
              variation="secondary"
              onClick={() => navigate("/contact")}
            >
              {btn5}
            </Button>
          </li>
        </ul>
      </section>
    </StyledPageContainer>
  );
}

export default Home;
