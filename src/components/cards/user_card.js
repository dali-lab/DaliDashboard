import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Ink from 'react-ink';

class UserCard extends Component {

  render() {
    console.log('members?', this.props);
    return (
      <div className="main_card user_card pill ink" onClick={
        () => {
          const routeStr = `/members/${this.props.member.id}`;
          browserHistory.push(routeStr);
        }
      }>
        <Ink />
        <div>
          <img className="rounded" src={(this.props.member) ? this.props.member.photoUrl : ''} alt="profile" />
        </div>
        <div>
          <h4 id="title"> {this.props.member.fullName} </h4>
          <p id="detail"> {this.props.member.skills.join(' - ')} </p>
        </div>
      </div>
    );
  }
}

export default UserCard;
