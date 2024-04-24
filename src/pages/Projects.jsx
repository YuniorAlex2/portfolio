import { useTranslation } from "react-i18next";
import ProjectContent from "../components/ProjectContent";
import AppNav from "../ui/AppNav";
import StyledPageContainer, { variants } from "../ui/PageContainer";

function Projects() {
  const { t } = useTranslation();
  const { heading } = t("projects");
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
        <ProjectContent />
      </section>
    </StyledPageContainer>
  );
}

export default Projects;
