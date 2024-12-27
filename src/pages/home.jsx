import { FaqsContainer } from "../containers/faqs"
import { JumbotronContainer } from "../containers/jumbotron"
import { FooterContainer } from "../containers/footer"

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer/>
      <FooterContainer/>
    </>
  )
}