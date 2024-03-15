import React from 'react';
import { SECTIONS, Section } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledNavbar } from './StyledNavbar';

interface SectionButtonProps {
  section: Section;
  onClick: () => void;
  selected: boolean;
}

interface NavbarProps {
  onSectionSelect: (section: Section) => void;
  selectedSection: Section;
}

const SectionButton: React.FC<SectionButtonProps> = ({
  section,
  onClick,
  selected,
}) => (
  <button
    className={`navbar-item ${selected ? 'selected' : ''}`}
    onClick={onClick}
  >
    <span className="navbar-item-title"> {`${section.name}`} </span>
    <FontAwesomeIcon className="section-icon" icon={section.icon} size="2xl" />
  </button>
);

export const Navbar: React.FC<NavbarProps> = ({
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
