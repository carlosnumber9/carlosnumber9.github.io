import { useEffect, useRef, useState } from 'react';
import { Theme } from './declarations';
import { VEIL_INTERACTION_SETTLE_MS, VEIL_THEME_APPLY_MS } from './Veil';

export const useVeilTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [veilLayerCount, setVeilLayerCount] = useState(0);
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);
  const themeTimeout = useRef<number | undefined>(undefined);
  const interactionTimeout = useRef<number | undefined>(undefined);

  const onVeilToggle = () => {
    if (isThemeTransitioning) return;

    const nextTheme = theme === 'light' ? 'dark' : 'light';

    setIsThemeTransitioning(true);
    setVeilLayerCount((currentLayerCount) => currentLayerCount + 1);

    themeTimeout.current = window.setTimeout(() => {
      setTheme(nextTheme);
    }, VEIL_THEME_APPLY_MS);

    interactionTimeout.current = window.setTimeout(() => {
      setIsThemeTransitioning(false);
    }, VEIL_INTERACTION_SETTLE_MS);
  };

  useEffect(() => {
    return () => {
      window.clearTimeout(themeTimeout.current);
      window.clearTimeout(interactionTimeout.current);
    };
  }, []);

  return {
    theme,
    veilLayerCount,
    isDarkTheme: theme === 'dark',
    isThemeTransitioning,
    onVeilToggle,
  };
};
