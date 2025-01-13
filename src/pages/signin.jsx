import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"
import { Form } from "../components"
import * as ROUTES from "../constants/routes"
import { FirebaseContext } from "../context/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Wrapper } from "../components"

export default function Signin() {
  const navigate = useNavigate()
  const { auth } = useContext(FirebaseContext)
  const [error, setError] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')

  const isInvalid = emailAddress === "" || password === ""

  const handleSignin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, emailAddress, password)
      .then(() => {
        navigate(ROUTES.BROWSE);
      })
      .catch((error) => {
        setError(error.message);
        setEmailAddress('');
        setPassword('');
      });
  }

  return (
    <Wrapper>
    
    <HeaderContainer>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSignin} method="POST">
          <Form.Input
            placeholder="Email Address"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Form.Input
            type="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Submit disabled={isInvalid} type="submit">
            Sign In
          </Form.Submit>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA.
          </Form.TextSmall>
        </Form.Base>
      </Form>
    </HeaderContainer>
    <FooterContainer />
    </Wrapper>
  );
}