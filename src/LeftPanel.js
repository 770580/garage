import React, { Component } from 'react';
import './LeftPanel.css';

class LeftPanel extends Component {
  constructor(props) {
    super(props);
    this.scrollListHeight = 180 * this.props.projectList.length + 100;
    this.state = {
      currentDelta: 0,
    }
  }

  calculateOpacity(index) {
    if (this.props.activeProject === -1) return 0.1;
    switch (Math.abs(this.props.activeProject - index)) {
      case 0:
        return 1;
      case 1:
        return 0.8;
      case 2:
        return 0.6;
      case 3:
        return 0.2;
      default:
        return 0.1;
    }
  }

  render() {
    return (
      <div
        className={this.props.leftPanelIsExpanded
          ? 'leftPanel leftPanel--expand'
          : 'leftPanel'}
        onMouseLeave={this.props.projectActiveReset.bind(this)}
      >
        <div
          className={this.props.leftPanelIsScrollable
          ? 'leftPanel__scrollWrapper leftPanel__scrollWrapper--hideScrollBar'
          : 'leftPanel__scrollWrapper'}
        >
          <ul
            className='leftPanel__list'
            style={{minHeight: `${this.scrollListHeight}px`}}
          >
            {this.props.projectList.map( (project, index) => (
              <li
                key={index}
                className='leftPanel__item'
                onMouseOver={this.props.projectActive.bind(this, index)}
                style={{opacity: `${this.calculateOpacity(index)}`}}
              >
                <a className='leftPanel__link'>
                  <div className={this.props.activeProject === index
                    ? 'leftPanel__eyeCirle leftPanel__eyeCirle--expand'
                    : 'leftPanel__eyeCirle'}
                  >
                    <span className='leftPanel__eye' />
                  </div>
                  <img className={this.props.activeProject === index
                    ? 'leftPanel__image leftPanel__image--expand'
                    : 'leftPanel__image'}
                    src={project.image}
                    alt=''
                  />
                  <div className='leftPanel__description'>
                    <h3 className='leftPanel__client'>
                      {project.client}
                    </h3>
                    <p className='leftPanel__project'>
                      {project.name}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className='leftPanel__showAllProjects'>Full portfolio</a>
      </div>
    );
  }
}

export default LeftPanel;
