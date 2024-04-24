import { useTranslation } from "react-i18next";
import SkillsItem from "../components/SkillsItem";
import AppNav from "../ui/AppNav";
import StyledPageContainer, { variants } from "../ui/PageContainer";

function Skills() {
  const { t } = useTranslation();
  const { heading } = t("skills");
  return (
    <StyledPageContainer
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
    >
      <AppNav />
      <section>
        <h2>{heading}</h2>
        <SkillsItem />
      </section>
    </StyledPageContainer>
  );
}

export default Skills;
