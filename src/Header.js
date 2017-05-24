import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className={this.props.leftPanelIsExpanded
        ? 'header header--leftPanelOpen'
        : 'header'}
      >
        <div className={this.props.leftPanelIsExpanded
          ? 'header__hamburger header__hamburger--leftPanelOpen'
          : 'header__hamburger'}
        />
        <div className='header__logo' />
      </header>
    );
  }
}

export default Header;
