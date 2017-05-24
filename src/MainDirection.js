import React, { Component } from 'react';
import './MainDirection.css';

class MainDirection extends Component {
  render() {
    return (
      <div className={this.props.leftPanelIsExpanded
          ? 'mainDirection mainDirection--leftPanelOpen'
          : 'mainDirection'}
      >
        <div className='mainDirection__outer'>
          <div className='mainDirection__inner'>
            <div className='mainDirection__leftArrow'></div>
            <div
              className={this.props.leftPanelIsExpanded
                ? 'mainDirection__rightArrow mainDirection__rightArrow--leftPanelOpen'
                : 'mainDirection__rightArrow'}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainDirection;
