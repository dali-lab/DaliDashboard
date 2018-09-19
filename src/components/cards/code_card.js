import React, {
  Component,
} from 'react';

class CodeCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commits: 3000,
      lines: 105000,
      milestones: 200,
    };
  }

  render() {
    return (
      <div className="header_card" id={this.props.idStyle}>
        <h2> CODE </h2>
        <div className="cardBottom">
          <div className="stat">
            <h3> {this.state.commits} </h3>
            <h4> Commits </h4>
          </div>
          <div className="stat">
            <h3> {this.state.lines} </h3>
            <h4> Lines of code </h4>
          </div>
          <div>
            <h3> {this.state.milestones} </h3>
            <h4> Milestones Reached </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default CodeCard;
