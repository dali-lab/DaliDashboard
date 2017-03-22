import React from 'react';

class Project extends React.Component {

  render() {
    return (
      <div>
        <h1> Project: {this.props.params.id} </h1>
      </div>
    );
  }

}

export default Project;
