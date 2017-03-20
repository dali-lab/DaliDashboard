import React, { Component } from 'react';

const studentJson = {
  students: [{
    name: 'Armin',
    year: '17',
    skills: ['React', 'Sketch'],
    hometown: 'Washington, DC',
    imgUrl: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg',
  },
  ],
};

class UserCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const student = studentJson.students[0];
    return (
      <div id="user_card">
        <div>
          <img src={student.imgUrl} alt="profile" />
        </div>
        <div>
          <h4 id="title"> {student.name} </h4>
          <p id="subtitle"> {student.hometown} </p>
          <p id="subtitle"> {student.year} </p>
        </div>
      </div>
    );
  }

}

export default UserCard;
