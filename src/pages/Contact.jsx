import AppNav from "../ui/AppNav";
import LinkItem from "../components/LinkItem";
import StyledPageContainer, { variants } from "../ui/PageContainer";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const { heading, description } = t("contact");

  return (
    <StyledPageContainer
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
    >
      <AppNav />
      <section>
        <h1>{heading}</h1>
        <h2>{description}</h2>
        <LinkItem />
      </section>
    </StyledPageContainer>
  );
}

export default Contact;
