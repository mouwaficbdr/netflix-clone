import { useState, useEffect } from 'react';
import { fetchMovies } from '../utils/fetchTmdb';

export default function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchMovies();
        setMovies(data);
        console.log("Les films récupérés: ", data)
      } catch (error) {
        console.error('Erreur lors de la récupération des séries :', error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  return { movies, loading };
}
