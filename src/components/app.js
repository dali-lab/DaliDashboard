import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import CalendarComponent from './calendar_component.js';

import graphPic from '../../Assets/imgs/graph.png';
import membersPic from '../../Assets/imgs/members.png';
import searchPic from '../../Assets/imgs/search.png';
import progressPic from '../../Assets/imgs/progress.png';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      activities: [1, 2, 3, 4],
      events: [1, 2, 3],
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    if (this.state.width < 1024) {
      return (
        <Grid fluid className="homepage">
          <Row center="xs" middle="xs" id="topRow">
            <Col xs={12} sm={12} md={5} lg={5} id="calendarContainer" class="calendar_component">
              <CalendarComponent id="image" />
            </Col>
            <Col xs={10} sm={10} md={7} lg={7} id="graphContainer">
              <img alt="graph" src={graphPic} id="image" />
            </Col>
          </Row>
          <Row center="xs" middle="xs" id="secondRow">
            <Col xs={12} sm={6} md={3} lg={3} id="membersContainer">
              <img alt="members" src={membersPic} />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} id="progressContainer">
              <img alt="progress" src={progressPic} />
            </Col>
            <Col xs={12} sm={12} md={5} lg={5} id="searchContainer">
              <img alt="search" src={searchPic} />
            </Col>
          </Row>
        </Grid>
      );
    } else {
      return (
        <Grid fluid className="homepage">
          <Row center="xs" middle="xs" id="topRow">
            <Col xs={12} sm={12} md={5} lg={5} id="calendarContainer">
              <CalendarComponent class="calendar_component" id="image" />
            </Col>
            <Col xs={12} sm={12} md={7} lg={7} id="graphContainer">
              <img alt="graph" src={graphPic} />
            </Col>
          </Row>
          <Row center="xs" middle="xs" id="secondRow">
            <Col xs={12} sm={6} md={3} lg={3} id="membersContainer">
              <img alt="members" src={membersPic} />
            </Col>
            <Col xs={12} sm={12} md={5} lg={5} id="searchContainer">
              <img alt="search" src={searchPic} />
            </Col>
            <Col xs={12} sm={6} md={3} lg={3} id="progressContainer">
              <img alt="progress" src={progressPic} />
            </Col>
          </Row>
        </Grid>
      );
    }
  }
}

export default App;
