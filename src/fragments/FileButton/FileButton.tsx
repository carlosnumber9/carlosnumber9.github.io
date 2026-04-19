import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledFileButton } from './StyledFileButton';

export const FileButton: React.FC = () => (
  <StyledFileButton title="Download my CV in PDF format">
    <a download="" href="/CV10_CarlosPinedoSanchez_EN.pdf">
      <FontAwesomeIcon icon={faFileAlt} size="xl" className="file-icon" />
    </a>
  </StyledFileButton>
);
