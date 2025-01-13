import { FaqsContainer } from "../containers/faqs"
import { JumbotronContainer } from "../containers/jumbotron"
import { FooterContainer } from "../containers/footer"
import { HeaderContainer} from "../containers/header"
import { Feature, OptForm } from "../components"
import { Wrapper } from "../components"

export default function Home() {
  return (
    <Wrapper>
      <HeaderContainer animate={true}>
          <Feature>
            <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
            <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
            <OptForm>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Try it Now</OptForm.Button>
                <OptForm.Break />
            </OptForm>
          </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </Wrapper>
  );
}