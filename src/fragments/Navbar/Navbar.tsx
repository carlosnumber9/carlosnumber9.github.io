import React from 'react';
import { SECTIONS } from '../../constants';
import { StyledNavbar } from './StyledNavbar';
import { SectionButton } from './SectionButton';
import { Section } from '../../declarations';

interface Props {
  onSectionSelect: (section: Section) => void;
  selectedSection: Section;
}

export const Navbar: React.FC<Props> = ({
  onSectionSelect,
  selectedSection,
}) => {
  return (
    <StyledNavbar>
      {SECTIONS.map((section) => (
        <SectionButton
          section={section}
          onClick={() => onSectionSelect(section)}
          selected={selectedSection.id === section.id}
          key={section.id}
        />
      ))}
    </StyledNavbar>
  );
};
