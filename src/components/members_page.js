import React from 'react';
import UserCard from './user_card';
import { Grid, Row, Col } from 'react-flexbox-grid';


class Members extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (

      <Grid fluid>
        <Row center="xs">
          <Col xs={12} sm={6} md={4}>
            <UserCard id={0} />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <UserCard id={1} />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <UserCard id={2} />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <UserCard id={2} />
          </Col>

        </Row>
      </Grid>
    );
  }

}

export default Members;
