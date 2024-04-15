import AppNav from "../ui/AppNav";
import LinkItem from "../components/LinkItem";
import StyledPageContainer from "../ui/PageContainer";

function Contact() {
  return (
    <StyledPageContainer>
      <AppNav />
      <section>
        <h1>Contact Me!!</h1>
        <h2>You can get in contact with me, through one of these links.</h2>
        <LinkItem />
      </section>
    </StyledPageContainer>
  );
}

export default Contact;
