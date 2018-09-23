import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class UserCard extends Component {

  render() {
    return (
      <div className="main_card user_card pill ink" onClick={
        () => {
          const routeStr = `/members/${this.props.member.id}`;
          browserHistory.push(routeStr);
        }
      }>
      <div>
        <img className="rounded large" src={this.props.member.photoUrl} alt="profile" />
          <h4 className="member-name"> {this.props.member.fullName} </h4>
          <p className="member-detail">Developer</p>
      </div>
        <div>
          <a className="more-information" href="#">view profile</a>
        </div>
      </div>
    );
  }
}

export default UserCard;
