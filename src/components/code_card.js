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
    let codeCardStyle = {
      backgroundColor: '#209A8E',
      textAlign: 'left',
      paddingLeft: '15',
    };

    return (
      <div className="card" id="code_card" style={codeCardStyle}>
        <h2> CODE </h2>
        <h3> {this.state.commits} </h3>
        <h4> Commits </h4>
        <h3> {this.state.lines} </h3>
        <h4> Lines of code </h4>
        <h3> {this.state.milestones} </h3>
        <h4> Milestones Reached </h4>
      </div>
    );
  }
}

export default CodeCard;
