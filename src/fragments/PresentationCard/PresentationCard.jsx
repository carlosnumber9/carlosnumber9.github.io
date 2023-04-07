import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { StyledCard } from './StyledCard';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import { differenceInSeconds } from 'date-fns';
import {
  faHome,
  faInbox,
  faMobile,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';

export const PresentationCard = () => {
  const getAgeInSeconds = () =>
    differenceInSeconds(new Date(), new Date(1995, 6, 21));
  const [age, setAge] = useState(getAgeInSeconds());

  useEffect(() => {
    const interval = setInterval(() => setAge(getAgeInSeconds()), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledCard>
      <div className="card-column first-column">
        <FontAwesomeIcon icon={faSeedling} size={'lg'} id="age-icon" />
        <span className="card-text" id="age-text">
          {`${age} seconds old`}
        </span>
        <div className="card-hr" id="first-hr">
          <hr />
        </div>
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
        <div className="card-hr" id="third-hr">
          <hr />
        </div>
        <FontAwesomeIcon icon={faHome} size={'lg'} id="address-icon" />
        <span id="address-text">
          <div className="simple-list">
            <a href="https://goo.gl/maps/5x5kSMoPtA2Lbxf59" target="blank">
              <span className="card-text">Calle Rueza 42, 3ºB</span>
            </a>
            <span className="card-text">28011 Madrid, España </span>
          </div>
        </span>
      </div>
      <div className="card-column second-column">
        <span id="linkedin-button" className="card-element">
          <a
            href="https://www.linkedin.com/in/carlos-pinedo-s%C3%A1nchez-b661a7130/"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size={'3x'} />
          </a>
        </span>
        <span id="github-logo">
          <a href="https://www.github.com/carlosnumber9" target="blank">
            <FontAwesomeIcon icon={faGithub} size={'3x'} />
          </a>
        </span>
      </div>
    </StyledCard>
  );
};

PresentationCard.propTypes = {
  selectedSection: PropTypes.object,
};
