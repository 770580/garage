import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import LeftPanel from './LeftPanel';
import Main from './Main';
import Footer from './Footer';

import projectImage1 from './img/project-list-1.jpg';
import projectImage2 from './img/project-list-2.jpg';
import projectImage3 from './img/project-list-3.jpg';
import projectImage4 from './img/project-list-4.jpg';
import projectImage5 from './img/project-list-5.jpg';

const projectList = [
  { client: 'Uber', name: 'UBER AD\nHONG KONG', image: projectImage1},
  { client: 'olay', name: 'Project name', image: projectImage2},
  { client: 'Urban', name: 'The Austin', image: projectImage3},
  { client: 'olay', name: 'Project name', image: projectImage4},
  { client: 'olay', name: 'Project name', image: projectImage5}
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      leftPanelIsExpanded: false,
      activeProject: -1,
      windowWidth: window.innerWidth
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  projectActive(index) {
    this.setState({
      activeProject: index
    })
  }

  projectActiveReset() {
    this.setState({
      activeProject: -1
    })
  }

  leftChoiceAreaMouseWheel(event) {
    const delta = event.deltaY > 0 ? 1 : - 1;
    let newActiveProject = this.state.activeProject + delta;
    if (newActiveProject < -1 ) {
      newActiveProject = projectList.length - 1;
    } else if (newActiveProject > projectList.length) {
      newActiveProject = 0;
    }
    this.setState({
      activeProject: newActiveProject
    })
  }

  leftPanelExpand() {
    this.setState({
      leftPanelIsExpanded: !this.state.leftPanelIsExpanded
    })
  }

  leftPanelIsScrollable() {
    return document.documentElement.clientHeight < 180 * projectList.length + 100;
  }

  handleResize(e) {
    this.setState({
      windowWidth: window.innerWidth
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.windowWidth > 768 &&
          <video
            className='container__video'
            autoPlay
            loop
            muted
          >
            <source src='img/469340401.mp4' type="video/mp4" />
          </video>
        }
        <Header
          leftPanelIsExpanded={this.state.leftPanelIsExpanded}
        />
        <LeftPanel
          leftPanelIsExpanded={this.state.leftPanelIsExpanded}
          leftPanelIsScrollable={this.leftPanelIsScrollable()}
          activeProject={this.state.activeProject}
          projectActive={this.projectActive.bind(this)}
          projectActiveReset={this.projectActiveReset.bind(this)}
          projectList={projectList}
        />
        <Main
          leftChoiceAreaMouseWheel={this.leftChoiceAreaMouseWheel.bind(this)}
          leftPanelExpand={this.leftPanelExpand.bind(this)}
          leftPanelIsExpanded={this.state.leftPanelIsExpanded}
        />
        <Footer
          leftPanelIsExpanded={this.state.leftPanelIsExpanded}
        />
      </div>
    );
  }
}

export default App;
