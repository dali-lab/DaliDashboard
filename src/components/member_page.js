import React from 'react';

class Member extends React.Component {

  render() {
    return (
      <div>
        <h1> Hello, {this.props.params.id} </h1>
      </div>
    );
  }

}

export default Member;
