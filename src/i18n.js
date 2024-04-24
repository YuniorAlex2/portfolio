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
          description:
            "My name is yunior and I am a passionate and dedicated web developer with a keen eye for detail and a love for creative problem-solving. With a strong background in front-end technologies such as HTML, CSS, and JavaScript, I thrive in crafting engaging user experiences and pixel-perfect designs.",
          buttons: {
            btn1: "Home",
            btn2: "Projects",
            btn3: "Skills",
            btn4: "Contact",
            btn5: "Contact Me",
          },
          contact: {
            heading: "Contact Me!!",
            description: "You can get in contact with me, through these links.",
          },
          skills: {
            heading:
              "These are the skills that I have obtained from courses like udemy and freecodeCamp.",
          },
          projects: {
            heading:
              "These apps were built with the languages and frameworks that I've learned from the skills section.",
            theWildOasis:
              "The app allows the employees to book reservations for the customers, you can also create, delete, and edit the cabins.",
            fastPizza:
              "This is app allows the user to select and order from a list of their favorite pizzas, with geolocation it can track the location of the user and improve the delivery performance.",
            worldwise:
              "This is app allows the user to track and save the cities that they have visited so they can remember all the amazing experiences of their adventures.",
            theReactQuiz:
              "You can practice your skills about react with this quiz.",
          },
        },
      },
      es: {
        translation: {
          greeting: "Bienvenido",
          description:
            "Mi nombre es yunior y soy un desarrollador web apasionado y dedicado, con gran ojo para los detalles y amor por la resolución creativa de problemas. Con una sólida experiencia en tecnologías front-end como HTML, CSS y JavaScript, me encanta crear experiencias de usuario atractivas y diseños perfectos en píxeles.",
          buttons: {
            btn1: "Casa",
            btn2: "Projectos",
            btn3: "Habilidades",
            btn4: "Contactos",
            btn5: "Para Contactarme",
          },
          contact: {
            heading: "Contáctame!!",
            description:
              "Puedes ponerte en contacto conmigo, a través de estos enlaces.",
          },
          skills: {
            heading:
              "Estas son las habilidades que he obtenido de cursos como udemy y freecodeCamp.",
          },
          projects: {
            heading:
              "Estas aplicaciones se crearon con los lenguajes y frameworks que aprendí en la sección de habilidades.",
            theWildOasis:
              "Esta aplicación permite a los empleados hacer reservas para los clientes, también puedes crear, eliminar y editar las cabañas.",
            fastPizza:
              "Esta es una aplicación que permite al usuario seleccionar y ordenar de una lista de sus pizzas favoritas, con geolocalización puede rastrear la ubicación del usuario y mejorar el rendimiento de la entrega.",
            worldwise:
              "Esta es una aplicación que permite al usuario rastrear y guardar las ciudades que ha visitado para poder recordar todas las increíbles experiencias de sus aventuras.",
            theReactQuiz:
              "Puedes practicar tus habilidades de react con este quiz.",
          },
        },
      },
    },
  });

export default i18n;
