import { useEffect, useRef, useState } from 'react';
import { SECTIONS } from './constants';
import { FileButton, Footer, Navbar, PresentationCard } from './fragments';
import { MainColumn } from './MainColumn';
import { Section, Theme } from './declarations';
import { Veil, VEIL_INTERACTION_SETTLE_MS, VEIL_THEME_APPLY_MS } from './Veil';

export const MainLayout = () => {
  const [selectedSection, setSelectedSection] = useState<Section>(SECTIONS[0]);
  const [theme, setTheme] = useState<Theme>('light');
  const [veilLayerCount, setVeilLayerCount] = useState(0);
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);
  const themeTimeout = useRef<number | undefined>(undefined);
  const interactionTimeout = useRef<number | undefined>(undefined);
  const onSectionSelect = (section: Section) => setSelectedSection(section);
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

  return (
    <>
      <MainColumn data-veil-theme={theme}>
        <h1 className="site-name">Carlos Pinedo Sánchez</h1>
        <h3 className="site-subtitle">Frontend developer</h3>
        <PresentationCard />
        <Navbar
          onSectionSelect={onSectionSelect}
          selectedSection={selectedSection}
        />
        <selectedSection.component />
        <Footer />
      </MainColumn>
      <Veil
        layerCount={veilLayerCount}
        isDarkTheme={theme === 'dark'}
        isTransitioning={isThemeTransitioning}
        onToggle={onVeilToggle}
      />
      <FileButton />
    </>
  );
};
