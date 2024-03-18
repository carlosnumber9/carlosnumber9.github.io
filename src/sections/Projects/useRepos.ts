import { useEffect, useState } from 'react';
import { Repository } from '../../declarations';

export const useRepos = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [repos, setRepos] = useState<Repository[]>([]);

  const fetchUserRepos = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/${import.meta.env.VITE_USERNAME}/repos`,
        {
          headers: {
            Authorization: `token ${import.meta.env.VITE_TOKEN}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRepos(data.filter((repo: any) => repo.topics.includes('showcase')));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      throw error;
    }
  };

  useEffect(() => {
     if (!loading) {
       fetchUserRepos();
     }
  }, [loading]);
 
  if (loading) {
     throw fetchUserRepos(); // Throw the promise to be caught by Suspense
  }

  return { loading, repos };
};
