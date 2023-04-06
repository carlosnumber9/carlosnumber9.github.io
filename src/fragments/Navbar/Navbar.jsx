import React from 'react';
import { SECTIONS } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledNavbar } from './StyledNavbar';

const SectionButton = (section, onClick) => (
  <div className="navbar-item" onClick={onClick} key={section.key}>
    <span className="navbar-item-title"> {`${section.name}`} </span>
    <FontAwesomeIcon className="section-icon" icon={section.icon} size="2xl" />
  </div>
);

export function Navbar(onSectionSelect) {
  return (
    <StyledNavbar>
      {SECTIONS.map((section) => (
        <>
          <div className="vertical-separator"></div>
          <SectionButton
            section={section}
            onClick={() => onSectionSelect(section)}
          />
        </>
      ))}
    </StyledNavbar>
  );
}
