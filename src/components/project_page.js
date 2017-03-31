import React from 'react';
import StatWidget from './stat_widget';
import UserCard from './user_card';
import ActivityList from './activity_list';
import { Grid, Row, Col } from 'react-flexbox-grid';


class Project extends React.Component {

  render() {
    const memArr = [1, 2, 3];
    const members = memArr.map((member, index) => {
      return (<Col xs={12} sm={6} md={4}>
        <UserCard id={0} />
      </Col>);
    });

    return (
      <div>
        <Grid fluid>
          <Col xs={12}>
            <h4> Projects </h4>
            <h1> Seabird Apps {this.props.params.id} </h1>
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
          <Row>
            <Col xs={12}>
              <h4> Description </h4>
            </Col>
            <Col xs={12}>
              <div className="main_card">
                <p> hello this is seabird apps </p>
              </div>
            </Col>
            <Col xs={12}>
              <h4> Members </h4>
            </Col>
          </Row>
          <Row center="xs">
            {members}
          </Row>
          <Col xs={12}>
            <h4> Activity Feed </h4>
          </Col>
          <Row center="xs">
            <Col center="xs" xs={12} sm={12} md={10} className="two-columns">
              <ActivityList activities={[1, 2, 3, 4]} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

}

export default Project;
