import React, { Component } from 'react';
import ProjectUserList from '../project_card_user_list';
import { Link } from 'react-router';

class ProjectCard extends Component {
  render() {
    return (
      <div className={`project_card grid-item ${this.props.blockSize}`} style={{ textDecoration: 'none', width: this.props.width, height: this.props.height }}>
        <Link to={`/projects/${this.props.project.id}`} className="link">
          <div id="top">
          <h4>College Pulse</h4>
            {/* <h4>{this.props.project.title}</h4>
            <p>{this.props.project.techStack}</p> */}
          </div>
        </Link>
        <div id="bottom">
          {/* <h3>{this.props.project.shortDescription}</h3> */}
          <h3>Gauging public opinion on college campuses</h3>
          {/* <ProjectUserList members={this.props.project.members} /> */}
        </div>
      </div>
    );
  }
}

export default ProjectCard;
