import { useState } from 'react';
import { SECTIONS } from './constants';
import { FileButton, Footer, Navbar, PresentationCard } from './fragments';
import { MainColumn } from './MainColumn';
import { Section } from './declarations';
import { Veil } from './Veil';
import { useVeilTheme } from './useVeilTheme';

export const MainLayout = () => {
  const [selectedSection, setSelectedSection] = useState<Section>(SECTIONS[0]);
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
        </section>

        <section className="content-stage" aria-label="Portfolio sections">
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
