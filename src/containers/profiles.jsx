/* eslint-disable react/prop-types */
import { Header, Profiles } from "../components"
import * as ROUTES from '../constants/routes'

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <Profiles.PageWrapper>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src="/images/misc/logo.svg"
            alt="Netflix"
          />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who is watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() => {
              const newProfile = {
                displayName: user.displayName,
                photoURL: user.photoURL,
              };
              localStorage.setItem('profile', JSON.stringify(newProfile));
              setProfile(newProfile);
            }}
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </Profiles.PageWrapper>
  );
}