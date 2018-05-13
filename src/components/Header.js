import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainNav from '../atoms/MainNav';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container header__container">
          <div className="header__logo">
            <Link
              to="/"
              title="Alexandra Melniciuc"
              className="header__logo-link"
            >AM.</Link>
          </div>
          <div className="header__nav">
            <MainNav />
          </div>
        </div>
      </div>
    )
  }
}
