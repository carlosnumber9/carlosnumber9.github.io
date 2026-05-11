import { useState } from 'react';
import { SECTIONS } from './constants';
import { FileButton, Footer, Navbar, PresentationCard } from './fragments';
import { MainColumn } from './MainColumn';
import { Section, Theme } from './declarations';
import { Veil } from './Veil';

export const MainLayout = () => {
  const [selectedSection, setSelectedSection] = useState<Section>(SECTIONS[0]);
  const [theme, setTheme] = useState<Theme>('light');
  const onSectionSelect = (section: Section) => setSelectedSection(section);
  const onVeilToggle = () =>
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));

  return (
    <>
      <MainColumn>
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
      <Veil theme={theme} onToggle={onVeilToggle} />
      <FileButton />
    </>
  );
};
