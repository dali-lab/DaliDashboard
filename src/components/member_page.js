import React from 'react';
import TimeLn from './timeline';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ActivityList from './activity_list';
import StatWidget from './stat_widget';


const imgUrl = 'http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg';

class Member extends React.Component {

  render() {
    return (
      <Grid fluid className="member_page">
        <Col xs={12} className="header">
          <div>
            <img className="profile rounded" src={imgUrl} alt="profile" />
          </div>
          <div>
            <h1> Armin Mahban, {this.props.params.id} </h1>
            <h3> blah blah blah </h3>
          </div>
        </Col>
        <Row around="xs">
          <Col xs={10} sm={4} md={3}>
            <StatWidget />
          </Col>
          <Col xs={10} sm={4} md={3}>
            <StatWidget />
          </Col>
          <Col xs={10} sm={4} md={3}>
            <StatWidget />
          </Col>
        </Row>
        <Col xs={12}>
          <h4> About Me </h4>
        </Col>
        <Col xs={12}>
          <div className="main_card">
            <p> hello this is seabird apps </p>
          </div>
        </Col>
        <Col xs={12}>
          <h4> Activity Feed </h4>
        </Col>
        <Row center="xs">
          <Col center="xs" xs={12} sm={12} md={10} className="two-columns">
            <ActivityList activities={[1, 2, 3, 4]} />
          </Col>
        </Row>
        <Col xs={12}>
          <h4> Milestones </h4>
        </Col>
        <TimeLn />

      </Grid>
    );
  }

}

export default Member;
