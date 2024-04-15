import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "es",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          greeting: "Welcome",
          description: "My name is yunior, and i am a software developer",
          buttons: {
            btn1: "Home",
            btn2: "Projects",
            btn3: "Skills",
            btn4: "Contact",
            btn5: "Contact Me",
          },
        },
      },
      es: {
        translation: {
          greeting: "Bienvenido",
          description:
            "Mi nombre es yunior, y soy un desarrollador de software",
          buttons: {
            btn1: "Casa",
            btn2: "Projectos",
            btn3: "Habilidades",
            btn4: "Contactos",
            btn5: "Para Contactarme",
          },
        },
      },
    },
  });

export default i18n;
