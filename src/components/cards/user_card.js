import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import photo from './../../../Assets/imgs/photo.png'

class UserCard extends Component {

  cleanUrl = (url) => {
    if (url.endsWith('?sz=50')) { // Google Image
      url = url.substring(0, url.indexOf('?sz'));
    } else { // Imgur Image
      url += '.jpg'
    }
    return url;
  }

  render() {
    const userYear = this.props.member.year;
    let renderImage = this.cleanUrl(this.props.member.photoUrl)
    return (
      <div className="main_card user_card pill ink" onClick={
        () => {
          const routeStr = `/members/${this.props.member.id}`;
          browserHistory.push(routeStr);
        }
      }>
        <div>
          <img className="rounded large" src={renderImage} alt="profile" />
          <h4 className="member-name"> {this.props.member.fullName} </h4>
          <p className="member-detail">Developer</p>
          <p className="member-detail">{!isNaN(parseInt(userYear, 10)) ? `'${userYear}` : userYear}</p>
        </div>
        <div>
          <a className="more-information" href="#">view profile</a>
        </div>
      </div>
    );
  }
}

export default UserCard;
