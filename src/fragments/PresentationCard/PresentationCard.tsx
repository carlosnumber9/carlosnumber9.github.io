import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledCard } from './StyledCard';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faInbox,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';

export const PresentationCard: React.FC = () => (
  <StyledCard>
    <div className="card-column first-column">
      <FontAwesomeIcon icon={faMobile} size={'lg'} id="phone-number-icon" />
      <span className="card-text" id="phone-number-text">
        <a href="tel:686637099">686637099</a>
      </span>
      <div className="card-hr" id="second-hr">
        <hr />
      </div>
      <FontAwesomeIcon icon={faInbox} size={'lg'} id="email-icon" />
      <span id="email-text">
        <a href="mailto:cpinedocsb@gmail.com">
          <span className="card-text">cpinedocsb@gmail.com</span>
        </a>
      </span>
    </div>
    <div className="card-column second-column">
      <span id="linkedin-button" className="card-element">
        <a
          href="https://www.linkedin.com/in/carlos-pinedo-b661a7130/"
          target="blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size={'3x'}
            className={'card-icon'}
          />
        </a>
      </span>
      <span id="github-logo">
        <a href="https://www.github.com/carlosnumber9" target="blank">
          <FontAwesomeIcon
            icon={faGithub}
            size={'3x'}
            className={'card-icon'}
          />
        </a>
      </span>
    </div>
  </StyledCard>
);
