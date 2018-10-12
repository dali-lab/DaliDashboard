import React, { Component } from 'react';
import ProjectUserList from '../project_card_user_list';
import { Link } from 'react-router';

class ProjectCard extends Component {
  formatTitle(title) {
    const splitTitle = title.split(' ');
    let finalFormat = [];
    splitTitle.forEach((word, index) => {
      if (index % 2 == 0) {
        finalFormat.push(<span className="light">{word} </span>);
      } else {
      finalFormat.push(<span className="semi-bold">{word} </span>)
      }
    })
    return finalFormat;
  }
  render() {
    console.log(this.props.project);
    return (
      <div className={`project_card grid-item ${this.props.blockSize}`} style={{
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
        backgroundImage: "url('https://news.dartmouth.edu/sites/dart_news.prod/files/styles/slide/public/news/images/pulse_app_028-810.jpg?itok=nr8SYcKN')", textDecoration: 'none', width: this.props.width, height: this.props.height }}>
        <Link to={`/projects/${this.props.project.id}`} className="link">
          <div className="mask"/>
          <div id="top">
            {/* Project image must have a 1:1 ratio */}
            <img className="project-image" src="https://collegepulse.com/img/logo.png" />
            <h4>{this.formatTitle(this.props.project.title)}</h4>
            {/* <p>{this.props.project.techStack}</p> */}
          </div>
          <div id="bottom">
            <h3>{this.props.project.shortDescription} </h3>
            {/* <ProjectUserList members={this.props.project.members} /> */}
          </div>
        </Link>
      </div>
    );
  }
}

export default ProjectCard;
