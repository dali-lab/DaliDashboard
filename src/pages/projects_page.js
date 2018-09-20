import React from 'react';
import ProjectCard from '../components/cards/project_card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import env from '../components/environment';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '17S',
      projects: [],
    };

    this.getProjects().then((projects) => {
      this.setState({ projects });
    });
  }

  getProjects() {
    return new Promise((resolve, reject) => {
      axios.get(`${env.serverURL}/api/projects`, {
        headers: { authorization: window.localStorage.token },
      }).then((response) => {
        resolve(response.data);
      });
    });
  }

  render() {
    const displayedProjects = this.state.projects.map((project) => {
      return (
        <Col xs={12} sm={6} md={4} key={project.id}>
          <ProjectCard project={project} />
        </Col>
      );
    });

    return (
      <Grid fluid>
        <Col xs={12}>
          <h4> Projects </h4>
        </Col>
        <Row>
          {displayedProjects}
        </Row>
      </Grid>
    );
  }

}

export default Projects;
