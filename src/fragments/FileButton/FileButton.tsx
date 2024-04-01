import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledFileButton } from './StyledFileButton';
import { Tooltip } from '@mui/material';

export const FileButton: React.FC = () => (
  <Tooltip placement="left" title={'Download my CV in PDF format'}>
    <StyledFileButton>
      <a download="" href="/CV8_CarlosPinedoSanchez_EN.pdf">
        <FontAwesomeIcon icon={faFilePdf} size="xl" className="file-icon" />
      </a>
    </StyledFileButton>
  </Tooltip>
);
