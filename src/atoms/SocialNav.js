import React from 'react';

import Icon from './Icon';

const SocialNav = ({ email = false, start = false }) => (
  <ul className={`social ${start ? 'social--start' : ''}`}>
    <li className="social__item">
      <a
        href="https://www.linkedin.com/in/sasha-melniciuc-b8b38067"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
      >
        <Icon name="linkedin" color="current" />
      </a>
    </li>
    <li className="social__item">
      <a
        href="https://www.facebook.com/sasha.melniciuc"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
      >
        <Icon name="facebook" color="current" />
      </a>
    </li>
    <li className="social__item">
      <a
        href="https://www.facebook.com/sasha.melniciuc"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
      >
        <Icon name="instagram" color="current" />
      </a>
    </li>
    {email && <li className="social__item">
      <a
        href="mailto:sasha.melniciuc@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
      >
        <Icon name="envelope" color="current" />
      </a>
    </li>}
  </ul>
);

export default SocialNav;
