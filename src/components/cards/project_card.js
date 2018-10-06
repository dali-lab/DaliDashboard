import React, { Component } from 'react';
import ProjectUserList from '../project_card_user_list';
import { Link } from 'react-router';

class ProjectCard extends Component {
  formatTitle(title) {
    const splitTitle = title.split(' ');
    let finalFormat = [];
    splitTitle.forEach((word, index) => {
      console.log(word);
      if (index % 2 == 0) {
        finalFormat.push(`${word} `);
      } else {
      finalFormat.push(<span className="semi-bold">{word}</span>)
      }
    })
    return finalFormat;
  }
  render() {
    return (
      <div className={`project_card grid-item ${this.props.blockSize}`} style={{ textDecoration: 'none', width: this.props.width, height: this.props.height }}>
        <Link to={`/projects/${this.props.project.id}`} className="link">
          <div className="mask"/>
          <div id="top">
            <h4>{this.formatTitle('College Pulse')}</h4>
            {/* <h4>{this.props.project.title}</h4>
            <p>{this.props.project.techStack}</p> */}
          </div>
          <div id="bottom">
            {/* <h3>{this.props.project.shortDescription}</h3> */}
            <h3>Gauging public opinion on college campuses</h3>
            {/* <ProjectUserList members={this.props.project.members} /> */}
          </div>
        </Link>
      </div>
    );
  }
}

export default ProjectCard;
