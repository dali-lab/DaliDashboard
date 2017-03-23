import React, { Component } from 'react';
import WeatherCard from './weather_card';
import CodeCard from './code_card';
import ActivityList from './activity_list';
import EventList from './events_list';
import LeaderBoard from './leaderboard_chart';
import Gallery from './gallery_card';

import { Grid, Row, Col } from 'react-flexbox-grid';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      activities: [1, 2, 3, 4],
      events: [1, 2, 3],
    };
  }

  render() {
    return (
      <Grid fluid>
        <Row center="xs">
          <Col xs={12} sm={8} md={3}>
            <WeatherCard />
          </Col>
          <Col xs={12} sm={8} md={3}>
            <CodeCard idStyle={"code2"} />
          </Col>
          <Col xs={12} sm={8} md={3}>
            <CodeCard idStyle={"code"} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <LeaderBoard />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={4}>
            <ActivityList activities={this.state.activities} />
          </Col>
          <Col xs={12} sm={12} md={8}>
            <EventList events={this.state.events} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Gallery />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
