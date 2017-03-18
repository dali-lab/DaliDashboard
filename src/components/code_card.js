import React, {
  Component,
} from 'react';

let codeCardStyle = {
  backgroundColor: '#209A8E',
  textAlign: 'left',
  paddingLeft: '15px',
};

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
      <div className="header_card" id="code_card" style={codeCardStyle}>
        <h2> CODE </h2>
        <div>
          <h3> {this.state.commits} </h3>
          <h4> Commits </h4>
        </div>
        <div>
          <h3> {this.state.lines} </h3>
          <h4> Lines of code </h4>
        </div>
        <div>
          <h3> {this.state.milestones} </h3>
          <h4> Milestones Reached </h4>
        </div>
      </div>
    );
  }
}

export default CodeCard;
