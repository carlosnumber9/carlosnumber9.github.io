import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Section } from '../../../declarations';
import { StyledSectionButton } from './StyledSectionButton';

interface SectionButtonProps {
  section: Section;
  onClick: () => void;
  selected: boolean;
}

export const SectionButton: React.FC<SectionButtonProps> = ({
  section,
  onClick,
  selected,
}) => (
  <StyledSectionButton
    aria-label={section.name}
    aria-pressed={selected}
    selected={selected}
    onClick={onClick}
    title={section.name}
    type="button"
  >
    <span className="navbar-item-title">{section.name}</span>
    <FontAwesomeIcon className="section-icon" icon={section.icon} size="2xl" />
  </StyledSectionButton>
);
