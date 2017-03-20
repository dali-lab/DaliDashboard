import React, { Component } from 'react';
import ProjectUserList from './project_card_user_list';

class ProjectCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [1, 2, 3],
    };
  }

  render() {
    return (
      <div className="project_card">
        <div id="top">
          <h4> Seabird apps </h4>
          <p> React-Native - Express - Sketch </p>
        </div>
        <div id="bottom">
          <p> a multiline description blah blah alsjdf lskj woefj woij flskdjf lj </p>
          <ProjectUserList users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default ProjectCard;
