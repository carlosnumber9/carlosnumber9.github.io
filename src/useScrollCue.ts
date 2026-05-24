import { useEffect, useRef, useState } from 'react';

const SCROLL_CUE_DELAY_MS = 3000;

export const useScrollCue = () => {
  const [isScrollCueVisible, setIsScrollCueVisible] = useState(false);
  const contentStageRef = useRef<HTMLElement>(null);

  const onScrollCueClick = () => {
    contentStageRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const scrollCueTimeout = window.setTimeout(() => {
      setIsScrollCueVisible(true);
    }, SCROLL_CUE_DELAY_MS);

    return () => {
      window.clearTimeout(scrollCueTimeout);
    };
  }, []);

  return {
    contentStageRef,
    isScrollCueVisible,
    onScrollCueClick,
  };
};
