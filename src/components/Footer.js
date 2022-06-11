import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Footer = props => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <a
          href="https://github.com/ethyl2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://twitter.com/ethyl22000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.linkedin.com/in/heather-nuffer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>© {currentYear} Heather Nuffer</p>
        <NavLink activeClassName="active" to="/playlists" style={{ fontSize: '0.95rem'}}>
          <FontAwesomeIcon icon={faMusic} />
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
