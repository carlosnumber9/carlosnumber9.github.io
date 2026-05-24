import { useState } from 'react';
import { SECTIONS } from './constants';
import {
  FileButton,
  Footer,
  Navbar,
  PresentationCard,
  ScrollCue,
} from './fragments';
import { MainColumn } from './MainColumn';
import { Section } from './declarations';
import { Veil } from './Veil';
import { useScrollCue } from './useScrollCue';
import { useVeilTheme } from './useVeilTheme';

export const MainLayout = () => {
  const [selectedSection, setSelectedSection] = useState<Section>(SECTIONS[0]);
  const { contentStageRef, isScrollCueVisible, onScrollCueClick } =
    useScrollCue();
  const {
    theme,
    veilLayerCount,
    isDarkTheme,
    isThemeTransitioning,
    onVeilToggle,
  } = useVeilTheme();
  const onSectionSelect = (section: Section) => setSelectedSection(section);

  return (
    <>
      <MainColumn data-veil-theme={theme}>
        <section className="hero-stage" aria-label="Presentation">
          <h1 className="site-name">Carlos Pinedo Sánchez</h1>
          <h3 className="site-subtitle">Frontend developer</h3>
          <PresentationCard />
          <ScrollCue
            isVisible={isScrollCueVisible}
            onClick={onScrollCueClick}
          />
        </section>

        <section
          className="content-stage"
          aria-label="Portfolio sections"
          ref={contentStageRef}
        >
          <Navbar
            onSectionSelect={onSectionSelect}
            selectedSection={selectedSection}
          />
          <main className="section-stage">
            <selectedSection.component />
          </main>
          <Footer />
        </section>
      </MainColumn>
      <Veil
        layerCount={veilLayerCount}
        isDarkTheme={isDarkTheme}
        isTransitioning={isThemeTransitioning}
        onToggle={onVeilToggle}
      />
      <FileButton />
    </>
  );
};
