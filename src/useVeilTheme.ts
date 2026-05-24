import { useCallback, useEffect, useRef, useState } from 'react';
import { Theme } from './declarations';
import { VEIL_INTERACTION_SETTLE_MS, VEIL_THEME_APPLY_MS } from './Veil';

const PREFERS_DARK_QUERY = '(prefers-color-scheme: dark)';

export const useVeilTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [veilLayerCount, setVeilLayerCount] = useState(0);
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);
  const hasAppliedInitialSystemTheme = useRef(false);
  const isFollowingSystemTheme = useRef(true);
  const isThemeTransitioningRef = useRef(false);
  const pendingTheme = useRef<Theme | undefined>(undefined);
  const themeRef = useRef<Theme>('light');
  const transitionTargetTheme = useRef<Theme | undefined>(undefined);
  const queuedThemeAnimationFrame = useRef<number | undefined>(undefined);
  const themeTimeout = useRef<number | undefined>(undefined);
  const interactionTimeout = useRef<number | undefined>(undefined);

  const triggerVeilThemeTransition = useCallback(
    (nextTheme: Theme) => {
      if (isThemeTransitioningRef.current) {
        if (transitionTargetTheme.current !== nextTheme) {
          pendingTheme.current = nextTheme;
        }

        return;
      }

      if (themeRef.current === nextTheme) {
        pendingTheme.current = undefined;
        return;
      }

      isThemeTransitioningRef.current = true;
      transitionTargetTheme.current = nextTheme;
      setIsThemeTransitioning(true);
      setVeilLayerCount((currentLayerCount) => currentLayerCount + 1);

      const themeDelay = nextTheme === 'light' ? 0 : VEIL_THEME_APPLY_MS;

      themeTimeout.current = window.setTimeout(() => {
        themeRef.current = nextTheme;
        setTheme(nextTheme);
      }, themeDelay);

      interactionTimeout.current = window.setTimeout(() => {
        isThemeTransitioningRef.current = false;
        transitionTargetTheme.current = undefined;
        setIsThemeTransitioning(false);

        const queuedTheme = pendingTheme.current;
        pendingTheme.current = undefined;

        if (queuedTheme) {
          queuedThemeAnimationFrame.current = window.requestAnimationFrame(() => {
            triggerVeilThemeTransition(queuedTheme);
          });
        }
      }, VEIL_INTERACTION_SETTLE_MS);
    },
    [],
  );

  const onVeilToggle = () => {
    isFollowingSystemTheme.current = false;
    triggerVeilThemeTransition(themeRef.current === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia?.(PREFERS_DARK_QUERY);
    if (!mediaQuery) return;

    const triggerInitialDarkVeil = () => {
      if (hasAppliedInitialSystemTheme.current || !mediaQuery.matches) return;

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
    const mediaQuery = window.matchMedia?.(PREFERS_DARK_QUERY);
    if (!mediaQuery) return;

    const onSystemThemeChange = (event: MediaQueryListEvent) => {
      if (!isFollowingSystemTheme.current) return;

      triggerVeilThemeTransition(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', onSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', onSystemThemeChange);
    };
  }, [triggerVeilThemeTransition]);

  useEffect(() => {
    return () => {
      window.cancelAnimationFrame(queuedThemeAnimationFrame.current ?? 0);
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
