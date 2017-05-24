import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className={this.props.leftPanelIsExpanded
        ? 'footer footer--leftPanelOpen'
        : 'footer'}
      >
        <p className='footer__title'>company</p>
        <div className='footer__line'></div>
      </footer>
    );
  }
}

export default Footer;
