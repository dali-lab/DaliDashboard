import React, {
  Component,
} from 'react';

class CodeCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let codeCardStyle = {
      backgroundColor: '#209A8E',
    };

    return (
      <div className="card" style={codeCardStyle}>
        <h1> Hello </h1>
      </div>
    );
  }
}

export default CodeCard;
