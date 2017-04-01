import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import TimeLn from './timeline';

class Member extends React.Component {

  render() {
    return (
      <div>
        <h1> Armin Mahban, {this.props.params.id} </h1>
        <TimeLn />
      </div>
    );
  }

}

export default Member;
