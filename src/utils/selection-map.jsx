export default function selectionMap({ series, movies, genres }) {
  if (!series || !movies || !genres) {
    console.error('Données manquantes dans selectionMap : ', {
      series,
      movies,
      genres,
    });
    return { series: [], movies: [] }; // Retourne des tableaux vides si une donnée manque
  }

  return {
    // Traitement des séries : on mappe les genres des séries
    series: genres.series.map((genre) => ({
      title: genre.name, // Nom du genre
      data: series.filter((item) => item.genre_ids.includes(genre.id)), // Séries correspondant au genre
    })),

    // Traitement des movies : on mappe les genres des movies
    movies: genres.movies.map((genre) => ({
      title: genre.name, // Nom du genre
      data: movies.filter((item) => item.genre_ids.includes(genre.id)), // movies correspondant au genre
    })),
  };
}
