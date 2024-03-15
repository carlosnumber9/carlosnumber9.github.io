import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Section } from '../../../constants';
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
    selected={selected}
    onClick={onClick}
  >
    <span className="navbar-item-title"> {`${section.name}`} </span>
    <FontAwesomeIcon className="section-icon" icon={section.icon} size="2xl" />
  </StyledSectionButton>
);
