import { useEffect, useState } from 'react';
import { fetchGenres } from '../utils/fetchTmdb';

export default function useGenres(type) {
  const [content, setContent] = useState([]); // Stocke les films/séries
  const [loading, setLoading] = useState(true); // État de chargement

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Début du chargement
        
        // Appel à la fonction pour récupérer les genres
        const genres = await fetchGenres(type);

        // Tu peux maintenant organiser ou traiter les données comme nécessaire
        console.log(`Genres de type ${type} récupérés :`, genres);
        setContent(genres); // Pour l'instant, on stocke juste les genres
      } catch (error) {
        console.error(`Erreur lors de la récupération du contenu de type ${type}:`, error);
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchData();
  }, [type]); // Réexécution si le type (movie/tv) change

  return { content, loading }; // Retourne le contenu et l'état de chargement
}
