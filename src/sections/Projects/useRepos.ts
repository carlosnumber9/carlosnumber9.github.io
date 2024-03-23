import { useEffect, useState } from 'react';
import { Repository } from '../../declarations';

export const useRepos = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [repos, setRepos] = useState<Repository[]>([]);

  const fetchUserRepos = async () => {
    setLoading(true);
    await fetch('/.netlify/functions/github')
      .then(async (response) => {
        const data = await response.json();
        setRepos(data.filter((repo: any) => repo.topics.includes('showcase')));
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
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
