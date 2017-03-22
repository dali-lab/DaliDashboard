import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Ink from 'react-ink';

const studentJson = {
  students: [{
    name: 'Armin Mahban',
    year: '17',
    skills: ['React', 'Sketch', 'Photoshop', 'Xcode', 'Android Studio', 'Unity'],
    hometown: 'Washington, DC',
    imgUrl: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg',
  },
  ],
};

class UserCard extends Component {

  render() {
    const student = studentJson.students[0];
    return (
      <div className="main_card user_card pill ink" onClick={
        () => {
          const routeStr = `/members/${this.props.id}`;
          browserHistory.push(routeStr);
        }
      }>
        <Ink />
        <div>
          <img src={student.imgUrl} alt="profile" />
        </div>
        <div>
          <h4 id="title"> {student.name} </h4>
          <p id="detail"> {student.hometown} </p>
          <p id="detail"> {student.skills.join(' - ')} </p>
        </div>
      </div>
    );
  }
}

export default UserCard;
