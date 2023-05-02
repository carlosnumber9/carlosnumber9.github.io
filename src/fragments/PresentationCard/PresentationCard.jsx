import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { StyledCard } from './StyledCard';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import { differenceInSeconds } from 'date-fns';
import {
  faInbox,
  faMobile,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from '@mui/material';

export const PresentationCard = () => {
  const getAgeInSeconds = () =>
    differenceInSeconds(new Date(), new Date(1995, 6, 21));
  const [age, setAge] = useState(getAgeInSeconds());

  const getAgeInYears = (ageInSeconds) => Math.floor(ageInSeconds / (60 * 60 * 24 * 365.25));

  useEffect(() => {
    const interval = setInterval(() => setAge(getAgeInSeconds()), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <StyledCard>
        <div className="card-column first-column">
          <FontAwesomeIcon icon={faSeedling} size={'lg'} id="age-icon" />
          <Tooltip
            placement="top"
            title={`Yep, that is ${getAgeInYears(age)} years old.`}
          >
            <span className="card-text" id="age-text">
              {`${age.toLocaleString()} seconds old`}
            </span>
          </Tooltip>
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
        </div>
        <div className="card-column second-column">
          <span id="linkedin-button" className="card-element">
            <a
              href="https://www.linkedin.com/in/carlos-pinedo-s%C3%A1nchez-b661a7130/"
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
    </>
  );
};

PresentationCard.propTypes = {
  selectedSection: PropTypes.object,
};
