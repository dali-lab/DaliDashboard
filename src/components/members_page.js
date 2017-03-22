import React from 'react';
import UserCard from './user_card';

class Members extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('members');
    return (
      <div>
        <UserCard />
        <UserCard />
      </div>
    );
  }

}

export default Members;
