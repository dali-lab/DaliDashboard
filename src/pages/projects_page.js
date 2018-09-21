import React from 'react';
import ProjectCard from '../components/cards/project_card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import env from '../components/environment';

const serverURL = 'https://dalilab-api.herokuapp.com';
class Projects extends React.Component {
  constructor(props) {
    console.log('constructing....');
    super(props);
    this.state = {
      term: '17S',
      projects: [],
    };

    this.getProjects().then((projects) => {
      console.log('projects? ', projects);
      this.setState({ projects });
    });
  }

  getProjects() {
    return new Promise((resolve, reject) => {
      axios.get(`${serverURL}/api/projects`, {
        headers: { authorization: window.localStorage.token },
      }).then((response) => {
        console.log('succeeded? ', response);
        resolve(response.data);
      });
    });
  }

  render() {
    const displayedProjects = this.state.projects.map((project) => {
      console.log('indiv. project: ', project);
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
