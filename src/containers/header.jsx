/* eslint-disable react/prop-types */
import { Header } from "../components"
import * as ROUTES from "../constants/routes"

export function HeaderContainer({ children, ...restProps }) {
  return (
    <Header >
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix"/>
        <Header.ButtonLink to={ROUTES.SIGN_IN} {...restProps}>Sign  In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}