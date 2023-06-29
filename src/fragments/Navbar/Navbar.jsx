import React from 'react';
import { SECTIONS } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledNavbar } from './StyledNavbar';
import PropTypes from 'prop-types';

const SectionButton = ({ section, onClick, selected, hasBorderRight }) => (
  <div
    className={`navbar-item ${selected ? 'selected' : ''} ${
      hasBorderRight ? 'border-right' : ''
    }`}
    onClick={onClick}
  >
    <span className="navbar-item-title"> {`${section.name}`} </span>
    <FontAwesomeIcon className="section-icon" icon={section.icon} size="2xl" />
  </div>
);

export function Navbar({ onSectionSelect, selectedSection }) {
  return (
    <StyledNavbar>
      {SECTIONS.map((section, i) => (
        <SectionButton
          section={section}
          onClick={() => onSectionSelect(section)}
          selected={selectedSection.id === section.id}
          key={section.id}
          hasBorderRight={i !== SECTIONS.length - 1}
        />
      ))}
    </StyledNavbar>
  );
}

Navbar.propTypes = {
  onSectionSelect: PropTypes.func,
  selectedSection: PropTypes.object,
};

SectionButton.propTypes = {
  section: PropTypes.object,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  hasBorderRight: PropTypes.bool,
};
