import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";

function LanguageBotton() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  function changeLanguage() {
    setLanguage((lng) => (lng === "en" ? "es" : "en"));
    return i18n.changeLanguage(language);
  }

  return (
    <div>
      <Button size="medium" variation="primary" onClick={changeLanguage}>
        {language}
      </Button>
    </div>
  );
}

export default LanguageBotton;
