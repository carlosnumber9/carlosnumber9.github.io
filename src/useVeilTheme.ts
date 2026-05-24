import { useCallback, useEffect, useRef, useState } from 'react';
import { Theme } from './declarations';
import { VEIL_INTERACTION_SETTLE_MS, VEIL_THEME_APPLY_MS } from './Veil';

const PREFERS_DARK_QUERY = '(prefers-color-scheme: dark)';

export const useVeilTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [veilLayerCount, setVeilLayerCount] = useState(0);
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);
  const hasAppliedInitialSystemTheme = useRef(false);
  const themeTimeout = useRef<number | undefined>(undefined);
  const interactionTimeout = useRef<number | undefined>(undefined);

  const triggerVeilThemeTransition = useCallback(
    (nextTheme: Theme) => {
      if (isThemeTransitioning || theme === nextTheme) return;

      setIsThemeTransitioning(true);
      setVeilLayerCount((currentLayerCount) => currentLayerCount + 1);

      const themeDelay = nextTheme === 'light' ? 0 : VEIL_THEME_APPLY_MS;

      themeTimeout.current = window.setTimeout(() => {
        setTheme(nextTheme);
      }, themeDelay);

      interactionTimeout.current = window.setTimeout(() => {
        setIsThemeTransitioning(false);
      }, VEIL_INTERACTION_SETTLE_MS);
    },
    [isThemeTransitioning, theme],
  );

  const onVeilToggle = () => {
    triggerVeilThemeTransition(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const prefersDarkTheme = window.matchMedia?.(PREFERS_DARK_QUERY).matches;
    if (!prefersDarkTheme || hasAppliedInitialSystemTheme.current) return;

    const triggerInitialDarkVeil = () => {
      hasAppliedInitialSystemTheme.current = true;
      triggerVeilThemeTransition('dark');
    };

    if (document.readyState === 'complete') {
      const animationFrame = window.requestAnimationFrame(triggerInitialDarkVeil);

      return () => {
        window.cancelAnimationFrame(animationFrame);
      };
    }

    window.addEventListener('load', triggerInitialDarkVeil, { once: true });

    return () => {
      window.removeEventListener('load', triggerInitialDarkVeil);
    };
  }, [triggerVeilThemeTransition]);

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
