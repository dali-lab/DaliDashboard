import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Ink from 'react-ink';

class UserCard extends Component {

  render() {
    return (
      <div className="main_card user_card pill ink" onClick={
        () => {
          const routeStr = `/members/${this.props.user.id}`;
          browserHistory.push(routeStr);
        }
      }>
        <Ink />
        <div>
          <img className="rounded" src={this.props.user.photoUrl} alt="profile" />
        </div>
        <div>
          <h4 id="title"> {this.props.user.fullName} </h4>
          <p id="detail"> {this.props.user.skills.join(' - ')} </p>
        </div>
      </div>
    );
  }
}

export default UserCard;
