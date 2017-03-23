import React from 'react';
import ProjectCard from './project_card';
import { Grid, Row, Col } from 'react-flexbox-grid';


class Projects extends React.Component {

  render() {
    return (
      <Grid fluid>
        <Row center="xs">
          <Col xs={12} sm={10} md={4}>
            <ProjectCard id={0} />
          </Col>
          <Col xs={12} sm={10} md={4}>
            <ProjectCard id={1} />
          </Col>
          <Col xs={12} sm={10} md={4}>
            <ProjectCard id={2} />
          </Col>
          <Col xs={12} sm={10} md={4}>
            <ProjectCard id={2} />
          </Col>

        </Row>
      </Grid>
    );
  }

}

export default Projects;
