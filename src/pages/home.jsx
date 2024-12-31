import { FaqsContainer } from "../containers/faqs"
import { JumbotronContainer } from "../containers/jumbotron"
import { FooterContainer } from "../containers/footer"
import { HeaderContainer} from "../containers/header"

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <p>Hello</p>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer/>
      <FooterContainer/>
    </>
  )
}