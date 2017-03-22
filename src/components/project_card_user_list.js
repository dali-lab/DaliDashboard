import React from 'react';
import UserCircle from './user_circle';

const ProjectUserList = (props) => {
  const userList = props.users.map((user, index) => {
    return <UserCircle key={index} />;
  });

  return (
    <ul>
      {userList}
    </ul>
  );
};

export default ProjectUserList;
