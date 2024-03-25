import { useEffect, useState } from 'react';
import { Repository } from '../../declarations';

export const useRepos = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [repos, setRepos] = useState<Repository[]>([]);

  const getRepos = async () => {
    setLoading(true);
    await fetch(import.meta.env.VITE_API_URL)
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
    if (!loading && repos.length < 1) {
      getRepos();
    }
  }, [loading]);

  return { loading, repos };
};
