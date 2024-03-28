import { useEffect, useState } from 'react';
import { DEFAULT_LOAD_TIME } from './constants';

export const useDelay = (delayTime: number = DEFAULT_LOAD_TIME) => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, delayTime);

    return () => clearTimeout(timer);
  }, [delayTime]);

  return isReady;
};
