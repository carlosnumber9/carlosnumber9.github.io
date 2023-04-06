import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { StyledCard } from './StyledCard';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export const PresentationCard = () => (
  <StyledCard>
    <div className="card-column first-column">
      <i id="age-icon" className="fas fa-seedling fa-lg"></i>
      <span className="card-text" id="age-text">
        {' '}
        25 years old{' '}
      </span>
      <div className="card-hr" id="first-hr">
        <hr />
      </div>
      <i id="phone-number-icon" className="fas fa-mobile-alt fa-lg"></i>
      <span className="card-text" id="phone-number-text">
        {' '}
        686637099{' '}
      </span>
      <div className="card-hr" id="second-hr">
        <hr />
      </div>
      <i id="email-icon" className="fas fa-inbox fa-lg"></i>
      <span id="email-text">
        <a href="mailto:cpinedocsb@gmail.com">
          <span className="card-text">cpinedocsb@gmail.com</span>
        </a>
      </span>
      <div className="card-hr" id="third-hr">
        <hr />
      </div>
      <i id="address-icon" className="fas fa-home fa-lg"></i>
      <span id="address-text">
        <div className="simple-list">
          <a href="https://goo.gl/maps/UwHnwr36bGWxSaPX7" target="blank">
            <span className="card-text">Calle Cebreros 103, 4º D</span>
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
          <FontAwesomeIcon style={{ fontSize: '2rem' }} icon={faLink}/>
        </a>
      </span>
      <span id="github-logo">
        <a href="https://www.github.com/carlosnumber9" target="blank">
          <FontAwesomeIcon style={{ fontSize: '2rem' }} icon={faLink}/>
        </a>
      </span>
    </div>
  </StyledCard>
);
