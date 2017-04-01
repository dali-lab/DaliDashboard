import React from 'react';
import ProjectCard from './project_card';
import { Grid, Row, Col } from 'react-flexbox-grid';


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '17S',
    };
  }

  render() {
    const projects = [1, 2, 3, 4, 5];
    let displayedProjects = [];
    let inputTerms = [];

    const terms = ['17S', '17W'];
    terms.forEach((term, index) => {
      inputTerms.push(
        <input type="radio" value={term} name="term" onChange={(e) => {
          this.setState({
            term: e.currentTarget.value,
          });
        }} checked={this.state.term === term}
        />
      );
    });

    projects.forEach((project, index) => {
      if (this.state.term === '17S') {
        displayedProjects.push(
          <Col xs={12} sm={6} md={4} key={index}>
            <ProjectCard id={index} />
          </Col>
        );
      }
    });

    return (
      <Grid fluid>
        <Col xs={12}>
          <h4> Projects </h4>
        </Col>
        <Col xs={12}>
          {inputTerms}
        </Col>
        <Row>
          {displayedProjects}
        </Row>
      </Grid>
    );
  }

}

export default Projects;
