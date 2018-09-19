import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Ink from 'react-ink';

class UserCard extends Component {

  render() {
    return (
      <div className="main_card user_card pill ink" onClick={
        () => {
          const routeStr = `/members/${this.props.member.id}`;
          browserHistory.push(routeStr);
        }
      }>
        <img className="rounded" src={this.props.member.photoUrl} alt="profile" />
        <div>
          <h4 id="title"> {this.props.member.fullName} </h4>
          <p id="detail"> {this.props.member.skills.join(' - ')} </p>
          <a className="more-information" href="#">view profile</a>
        </div>
      </div>
    );
  }
}

export default UserCard;
