import React, { useState } from 'react';
import { SECTIONS } from './constants';
import { Navbar, PresentationCard, StyledSection } from './fragments';
import { MainColumn } from './MainColumn';

export const MainLayout = () => {
  const [selectedSection, setSelectedSection] = useState(SECTIONS[0]);
  const onSectionSelect = (section) => setSelectedSection(section);

  return (
    <MainColumn>
      <h1 className="site-name">Carlos Pinedo Sánchez</h1>
      <h3 className="site-subtitle">Frontend developer</h3>
      <PresentationCard />
      <Navbar
        onSectionSelect={onSectionSelect}
        selectedSection={selectedSection}
      />
      <StyledSection>
        <selectedSection.component />
      </StyledSection>
    </MainColumn>
  );
};
