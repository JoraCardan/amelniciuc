import React, { Component } from 'react';

import SocialNav from '../atoms/SocialNav';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <h2 className="footer__title">Get in touch</h2>
          <p className="footer__content">
            Have any interesting thoughts, projects or offers?<br/>
            Contact me at:
          </p>
          <SocialNav email start />
        </div>
      </div>
    )
  }
}
