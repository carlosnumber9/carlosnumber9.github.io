import { useState } from 'react';
import { SECTIONS } from './constants';
import {
  Navbar,
  PresentationCard,
  SectionWrapper,
} from './fragments';
import { MainColumn } from './MainColumn';
import { Section } from './declarations';

export const MainLayout = () => {
  const [selectedSection, setSelectedSection] = useState<Section>(SECTIONS[0]);
  const onSectionSelect = (section: Section) => setSelectedSection(section);

  return (
    <MainColumn>
      <h1 className="site-name">Carlos Pinedo Sánchez</h1>
      <h3 className="site-subtitle">Frontend developer</h3>
      <PresentationCard />
      <Navbar
        onSectionSelect={onSectionSelect}
        selectedSection={selectedSection}
      />
      <SectionWrapper>
        <selectedSection.component />
      </SectionWrapper>
    </MainColumn>
  );
};
