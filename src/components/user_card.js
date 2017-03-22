import React, { Component } from 'react';

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
      <div className="user_card">
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
