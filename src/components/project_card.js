import React, { Component } from 'react';
import ProjectUserList from './project_card_user_list';
import { Link } from 'react-router';

class ProjectCard extends Component {
  render() {
    return (
      <Link className="project_card" style={{ textDecoration: 'none' }} to={`/projects/${this.props.project.id}`}>
        <div id="top">
          <h4>{this.props.project.title}</h4>
          <p>{this.props.project.techStack}</p>
        </div>
        <div id="bottom">
          <p>{this.props.project.shortDescription}</p>
          <ProjectUserList members={this.props.project.members} />
        </div>
      </Link>
    );
  }
}

export default ProjectCard;
