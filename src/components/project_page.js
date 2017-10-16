import React from 'react';
import UserCard from './user_card';
import { Grid, Row, Col } from 'react-flexbox-grid';

import axios from 'axios';
import env from './environment';

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    axios.get(`${env.serverURL}/api/projects/${this.props.params.id}`, {
      headers: {
        apiKey: env.apiKey,
      },
    }).then((project) => {
      console.log(project);
      this.setState({ project: project.data });
    });
  }


  render() {
    if (this.state.project == null) {
      return (
        <div />
      );
    }

    const members = this.state.project.members.map((member) => {
      return (<Col xs={12} sm={6} md={4}>
        <UserCard member={member.user} />
      </Col>);
    });

    return (
      <div>
        <Grid fluid>
          <Col xs={12}>
            <h1>{this.state.project.title}</h1>
          </Col>
          <Row>
            <Col xs={12}>
              <h4> Description </h4>
            </Col>
            <Col xs={12}>
              <div className="main_card">
                <p>{this.state.project.longDescription}</p>
              </div>
            </Col>
            <Col xs={12}>
              <h4> Members </h4>
            </Col>
          </Row>
          <Row center="xs">
            {members}
          </Row>
        </Grid>
      </div>
    );
  }

}

export default Project;
