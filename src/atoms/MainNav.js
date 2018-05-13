import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = props => {
  return (
    <ul className="main-nav">
      <li className="main-nav__item">
        <Link to="/about" className="main-nav__link">About</Link>
      </li>
      <li className="main-nav__item">
        <Link to="/portfolio" className="main-nav__link">Portfolio</Link>
      </li>
      <li className="main-nav__item">
        <Link to="/contact" className="main-nav__link">Contact</Link>
      </li>
    </ul>
  )
}

export default MainNav;
