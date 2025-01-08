import { useState, useEffect } from 'react';
import { fetchSeries } from '../utils/fetchTmdb';

export default function useSeries() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSeries = async () => {
      try {
        setLoading(true);
        const data = await fetchSeries();
        setSeries(data.results);
        console.log('Les séries récupérés: ', data);
      } catch (error) {
        console.error('Erreur lors de la récupération des séries :', error);
      } finally {
        setLoading(false);
      }
    };

    getSeries();
  }, []);

  return { series, loading };
}
