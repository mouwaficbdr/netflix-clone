/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { Card, Header, Loading, Player, Carousel } from '../components';
import * as ROUTES from '../constants/routes';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { fetchBannerInfos } from '../utils/fetchTmdb';
import { truncateText } from '../hooks';

export default function BrowseContainer({
  slides,
  loadingSeries,
  loadingMovies,
}) {
  const [profile, setProfile] = useState(() => {
    return JSON.parse(localStorage.getItem('profile')) || {};
  });
  const [category, setCategory] = useState('movies');
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [areMoviesLoading, setAreMoviesLoading] = useState(loadingMovies);
  // eslint-disable-next-line no-unused-vars
  const [areSeriesLoading, setAreSeriesLoading] = useState(loadingSeries);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);
  const [user, setUser] = useState({ displayName: '', photoURL: '' });
  const [bannerInfos, setBannerInfos] = useState({});
  const [truncatedOverview, setTruncatedOverview] = useState('');
  const [windowWidth, setWindowidth] = useState(window.innerWidth);
  // const [showFeature, setShowFeature] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  /* VARIABLES LOCALES */
  const areCurrentlyLoading =
    category === 'series' ? areSeriesLoading : areMoviesLoading;
  const BASE_URL = 'https://image.tmdb.org/t/p/w780';

  /* Infos de base en cas de problème de chargement */
  const defaultBannerDescription = 'Watch it Now ! Watch it Here !';
  const auth = getAuth(); // Obtenir l'instance d'authentification

  /* UseEffects */


useEffect(() => {
  localStorage.setItem('profile', JSON.stringify(profile));

}, [profile]); 
  
  useEffect(() => {
    async function fetchBanner() {
      try {
        const data = await fetchBannerInfos(category);
        setBannerInfos(data);
      } catch (error) {
        console.error(
          'Erreur lors de la récupération des infos de la banière:',
          error
        );
      }
    }
    fetchBanner();
  }, [category]);

  useEffect(() => {
    const handleResize = () => {
      setWindowidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Nettoyage de l'écouteur d'événements
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setTruncatedOverview(truncateText(bannerInfos.overview));
  }, [bannerInfos, windowWidth]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          displayName: user.displayName || 'User',
          photoURL: user.photoURL || '1',
        });
      } else {
        setUser({ displayName: '', photoURL: '' });
      }
    });

    return () => unsubscribe(); // Nettoyage de l'écouteur
  }, [auth]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

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

  /* FONCTIONS UTILITAIRES */

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Déconnexion de l'utilisateur
      localStorage.removeItem('profile');
      console.log('Successful sign out');
    } catch (error) {
      console.error('Error during sign out:', error.message);
    }
  };

  function shouldDisplay(movies, minCount = 5) {
    return Array.isArray(movies) && movies.length >= minCount;
  }


  /* FIN DES FONCTIONS UTILITAIRES */

  return profile.displayName ? (
    <div
      style={{
        backgroundColor: '#151515',
        margin: '-8px',
        overflowX: 'hidden',
      }}
    >
      {loading ? (
        <Loading>
          <Loading.Picture src={`${user.photoURL}`} />
        </Loading>
      ) : (
        <Loading.ReleaseBody />
      )}
      <Header
        src={`https://image.tmdb.org/t/p/original/${bannerInfos.backdrop_path}`}
      >
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src="/images/misc/logo.svg"
              alt="Netflix"
            />
            <Header.Link
              $active={category === 'series'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.Link>
            <Header.Link
              $active={category === 'movies'}
              onClick={() => setCategory('movies')}
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
          <Header.FeatureCallOut>
            {bannerInfos.title
              ? bannerInfos.title
              : bannerInfos.name
            }
          </Header.FeatureCallOut>
          <Header.Text>
            {bannerInfos.overview
              ? truncatedOverview
              : defaultBannerDescription}
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => {
          return shouldDisplay(slideItem.data) ? (
            <Card
              key={`${category}-${slideItem.title.toLowerCase()}`}
              selectedItemId={selectedItemId}
              setSelectedItemId={setSelectedItemId}
            >
              {areCurrentlyLoading ? (
                <Loading key={slideItem.id}></Loading>
              ) : (
                <>
                  <Card.Title>{slideItem.title}</Card.Title>
                  <Carousel
                    items={slideItem.data} // Liste des films ou séries
                    renderCard={(item) => (
                      <>
                        <Card.Item
                          key={item.id}
                          $backgroundImage={`${BASE_URL}${item.poster_path}`}
                          onClick={() => setSelectedItemId(item.id)}
                        />
                        <Card.Feature
                          src={`${BASE_URL}${item.backdrop_path}`}
                          item={item}
                          category={category}
                        >
                          <Player>
                            <Player.Button />
                            <Player.Video />
                          </Player>
                        </Card.Feature>
                      </>
                    )}
                    containerClass="custom-slider-class" // Optionnel : classe CSS supplémentaire
                    itemClass="custom-item-class" // Optionnel : classe CSS supplémentaire
                  />
                </>
              )}
            </Card>
          ) : null;
        })}
      </Card.Group>

      <FooterContainer />
    </div>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
