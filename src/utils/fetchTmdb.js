// Clé API pour TMDB
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Base URL de TMDB
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchSeries() {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc`
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des séries")
    }

    const data = await response.json()
    return data

  } catch (error) {
    console.error("Erreur avec fetchSeries: ", error)
  }
}

export async function fetchMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc`
    );

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des films');
    }  

    const data = await response.json()
    return data

  } catch (error) {
    console.log("Erreur avec fetch movies: ", error)
  }
}

// Fonction pour récupérer les genres
export async function fetchGenres(type = 'movie') {
  try {
    const response = await fetch(
      `${BASE_URL}/genre/${type}/list?api_key=${API_KEY}&language=fr-FR`
    );

    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération des genres (${type})`);
    }

    const data = await response.json();
    return data.genres; // Retourne un tableau de genres
  } catch (error) {
    console.error('Erreur avec fetchGenres :', error);
    return [];
  }
}

// Exemple : Autre fonction pour récupérer des films ou séries populaires
export async function fetchPopular(type = 'movie', page = 1) {
  try {
    const response = await fetch(
      `${BASE_URL}/${type}/popular?api_key=${API_KEY}&language=fr-FR&page=${page}`
    );

    if (!response.ok) {
      throw new Error(
        `Erreur lors de la récupération des populaires (${type})`
      );
    }

    const data = await response.json();
    return data.results; // Retourne un tableau de résultats
  } catch (error) {
    console.error('Erreur avec fetchPopular :', error);
    return [];
  }
}
