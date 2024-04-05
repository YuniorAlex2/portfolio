import Heading from "../ui/Heading";
import { Trans, useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Heading as="h1">{t("Bienvenido")}</Heading>
    </div>
  );
}

export default Home;
