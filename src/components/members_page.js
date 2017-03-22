import React from 'react';
import UserCard from './user_card';

class Members extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserCard id={0} />
        <UserCard id={1} />
      </div>
    );
  }

}

export default Members;
