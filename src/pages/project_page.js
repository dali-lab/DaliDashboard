import React from 'react';
import UserCard from '../components/cards/user_card';
import { Grid, Row, Col } from 'react-flexbox-grid';

import axios from 'axios';
import env from '../components/environment';

const serverURL = 'https://dalilab-api.herokuapp.com';

class Project extends React.Component {
  constructor(props) {
    console.log('constructing....');
    super(props);

    this.state = {};
    console.log('this.props: ', this.props.params.id);
    if (this.props.params.id) {
      axios.get(`${serverURL}/api/projects/${this.props.params.id}`, {
        headers: { authorization: window.localStorage.token },
      }).then((project) => {
        console.log('made it to the proect!');
        console.log(project);
        this.setState({ project: project.data });
      });
    }
  }


  render() {
    if (this.state.project == null) {
      console.log('state is null');
      return (
        <div> Individual Project info should go here </div>
      );
    }

    const members = this.state.project.members.map((member) => {
      return (<Col xs={12} sm={6} md={4}>
        <UserCard member={member.user} />
      </Col>);
    });
    console.log('state not null');
    return (
      <div>
        <Grid fluid>
          <Col xs={12}>
            <h1>{(this.state.project.title) ? this.state.project.title : 'title'}</h1>
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

          </Row>
        </Grid>
      </div>
    );
  }

}

export default Project;
