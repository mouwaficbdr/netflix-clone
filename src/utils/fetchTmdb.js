// Clé API pour TMDB
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Base URL de TMDB
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchSeries(totalPages = 6) {

  const allResults = [];
  
  try {

    for (let page = 1; page <= totalPages; page++) {
      
      const response = await fetch(
        `${BASE_URL}/discover/tv?api_key=${API_KEY}&include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=${page}&sort_by=popularity.desc`
      );
  
      if (!response.ok) {
        throw new Error(`Erreur: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json()
      allResults.push(...data.results)
    }

    // console.log("Toutes les séries: ", allResults)
    return allResults;

  } catch (error) {
    console.error("Erreur avec fetchSeries: ", error)
  }
}

export async function fetchBannerInfos(type = 'movies') {
  // Validation des arguments et définition locale du type
  const mediaType = type === 'series' ? 'tv' : 'movie';

  try {
    const response = await fetch(
      `${BASE_URL}/trending/${mediaType}/day?api_key=${API_KEY}&language=fr-FR`
    );

    if (!['movies', 'series'].includes(type)) {
      throw new Error(`Type invalide: ${type}`);
    }

    // Vérification de la réponse
    if (!response.ok) {
      throw new Error(
        `Erreur HTTP: ${response.status} - ${response.statusText}`
      );
    }

    // Récupération et transformation des données
    const data = await response.json();

    // Vérifier si les résultats existent
    if (!data.results || data.results.length === 0) {
      throw new Error('Aucun résultat trouvé dans les données retournées.');
    }
    // Retourner un résultat aléatoire entre 0 et 5
    const result = data.results[Math.floor(Math.random() * 5)];
    console.log("Banner Series Info: ", result)
    return result
  } catch (error) {
    console.error('Erreur dans fetchBannerInfos:', error.message);
    return null; // Retourne une valeur par défaut explicite
  }
}


export async function fetchMovies(totalPages = 6) {

  const allResults = [];
  
  try {

    for (let page = 1; page <= totalPages; page++) {
      
      const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=${page}&sort_by=popularity.desc`
      );
  
      if (!response.ok) {
        throw new Error(`Erreur: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json()
      allResults.push(...data.results)
    }

    // console.log("Tous les films: ", allResults)
    return allResults;

  } catch (error) {
    console.error("Erreur avec fetchMovies: ", error)
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
