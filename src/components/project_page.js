import React from 'react';
import StatWidget from './stat_widget';
import { Grid, Row, Col } from 'react-flexbox-grid';


class Project extends React.Component {

  render() {
    return (
      <div>
        <h4> PROJECTS </h4>
        <h1> Seabird Apps {this.props.params.id} </h1>
        <Grid fluid>
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
        </Grid>
      </div>
    );
  }

}

export default Project;
