import React from 'react';
import ProjectCard from './project_card';

class Projects extends React.Component {

  render() {
    return (
      <div>
        <ProjectCard id={0} />
        <ProjectCard id={1} />
      </div>
    );
  }

}

export default Projects;
