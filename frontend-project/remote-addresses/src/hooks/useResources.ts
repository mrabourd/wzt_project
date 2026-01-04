import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Resource } from '../types/Resource';

export const useResources = (category: string) => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const url = `http://localhost:3000/resources${
          category !== 'all' ? `?category=${category}` : ''
        }`;
        const response = await axios.get<Resource[]>(url);
        setResources(response.data);
      } catch (err) {
        setError("Impossible to load datas.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { resources, isLoading, error };
};