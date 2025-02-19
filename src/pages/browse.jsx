// import { useEffect, useState } from 'react';
import selectionMap from '../utils/selection-map';
import { useGenres, useMovies, useSeries } from '../hooks';
import BrowseContainer from '../containers/browse';
import { Loading } from "../components"

export default function Browse() {
  const { content: genresMovies, loading: loadingGenresMovies } =
    useGenres('movie');
  const { content: genresSeries, loading: loadingGenresSeries } =
    useGenres('tv');
  const { movies, loading: loadingMovies } = useMovies();
  const { series, loading: loadingSeries } = useSeries();

  const loading =
    loadingGenresMovies ||
    loadingGenresSeries ||
    loadingMovies ||
    loadingSeries;

  if (loading) {
    return <Loading></Loading>; // Affiche un état de chargement global
  }

  const slides = selectionMap({
    series,
    movies,
    genres: { movies: genresMovies, series: genresSeries },
  });

  return <BrowseContainer slides={slides} loadingMovies={loadingMovies} loadingSeries={loadingSeries} />;
}