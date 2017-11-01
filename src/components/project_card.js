import React, { Component } from 'react';
import ProjectUserList from './project_card_user_list';
import { Link } from 'react-router';

class ProjectCard extends Component {
  render() {
    return (
      <div className="project_card" style={{ textDecoration: 'none' }}>
        <Link to={`/projects/${this.props.project.id}`} className="link">
          <div id="top">
            <h4>{this.props.project.title}</h4>
            <p>{this.props.project.techStack}</p>
          </div>
        </Link>
        <div id="bottom">
          <p>{this.props.project.shortDescription}</p>
          <ProjectUserList members={this.props.project.members} />
        </div>
      </div>
    );
  }
}

export default ProjectCard;
