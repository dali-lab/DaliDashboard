import React from 'react';
import ProjectCard from '../components/cards/project_card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Isotope from 'isotope-layout';
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

  // [850, 300] - long width
  // [350, 750] - long height
  // [400, 400] - block
  render() {
    const displayedProjects = [[850, 300], [350, 750], [400, 400], [400, 400]].map((item) => {
      return (
        <div className="grid-item" style={{ width: item[0], height: item[1], marginBottom: '50px' }}>
          {item[0]} - testing
        </div>
      );
    });
    // const displayedProjects = this.state.projects.map((project) => {
    //   return (
    //     <div id={project.id} className="grid-item">
    //       <ProjectCard project={project} />
    //     </div>
    //   );
    // });

    return (
      <div className="grid" style={{ width: '1400px', maxWidth: '1400px' }} data-isotope='{ "itemSelector": ".grid-item", "masonry": { "columnWidth": 400, "gutter": 50, "fitWidth": true } }'>
        {displayedProjects}
      </div>
      // <Grid fluid>
      //   <Col xs={12}>
      //     <h4> Projects </h4>
      //   </Col>
      //   <Row>
      //     {displayedProjects}
      //   </Row>
      // </Grid>
    );
  }

}

export default Projects;
