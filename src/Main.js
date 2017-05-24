import React, { Component } from 'react';
import './Main.css';
import MainDirection from './MainDirection';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      touchStart: 0
    }
  }

  handleTouchStart(event) {
    this.setState({
      touchStart: event.touches[0].clientX
    })
  }

  handleTouchEnd(event) {
    const deltaX = event.changedTouches[0].clientX - this.state.touchStart;
    if ((
        deltaX > 0 && !this.props.leftPanelIsExpanded
      ) || (
        deltaX < 0 && this.props.leftPanelIsExpanded
      )) {
      this.props.leftPanelExpand();
    }
  }

  render() {
    return (
      <main
        className={this.props.leftPanelIsExpanded
          ? 'choice choice--leftPanelOpen'
          : 'choice'}
        onTouchStart={this.handleTouchStart.bind(this)}
        onTouchEnd={this.handleTouchEnd.bind(this)}
      >
        <div
          className={this.props.leftPanelIsExpanded
          ? 'choice__area choice__areaLeft choice__areaLeft--leftPanelOpen'
          : 'choice__area choice__areaLeft'}
          onMouseEnter={this.props.leftPanelExpand}
          onWheel={this.props.leftChoiceAreaMouseWheel.bind(this)}
        >
          <span className='choice__title'>
            Creative<br />
            Production
          </span>
        </div>
        <MainDirection
          leftPanelIsExpanded={this.props.leftPanelIsExpanded}
        />
        <div className='choice__area choice__areaRight'>
          <p className='choice__title'>
            brand design<br />
            marketing
          </p>
        </div>
      </main>
    );
  }
}

export default Main;
