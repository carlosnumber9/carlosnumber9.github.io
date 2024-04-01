import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledFileButton } from './StyledFileButton';

export const FileButton: React.FC = () => (
  <StyledFileButton>
    <a download="" href="/CV8_CarlosPinedoSanchez_EN.pdf">
      <FontAwesomeIcon icon={faFilePdf} size="xl" className="file-icon" />
    </a>
  </StyledFileButton>
);
