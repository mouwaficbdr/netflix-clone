/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { Card, Header, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import { getAuth, signOut } from 'firebase/auth'; // Importer auth et signOut

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [category, setCategory] = useState('series');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  const user = {
    displayName: 'Karl',
    photoURL: '1',
  };

  const auth = getAuth(); // Obtenir l'instance d'authentification

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []); // Ajout de dépendances (vide ici pour n'exécuter qu'une fois)

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: [
        { name: 'data.title', weight: 0.7 },
        { name: 'data.description', weight: 0.2 },
        { name: 'data.genre', weight: 0.1 },
      ],
      includeScore: true,
      threshold: 0.3,
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm, slideRows, category, slides]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Déconnexion de l'utilisateur
      console.log('Déconnexion réussie');
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error.message);
    }
  };

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src="/images/misc/logo.svg"
              alt="Netflix"
            />
            <Header.Link
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.Link>
            <Header.Link
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}
            >
              Films
            </Header.Link>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.Link>{user.displayName}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={handleSignOut}>Sign out</Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he is part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>

      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
