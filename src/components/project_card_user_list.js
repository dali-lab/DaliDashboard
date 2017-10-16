import React from 'react';
import UserCircle from './user_circle';

const ProjectUserList = (props) => {
  const memberList = props.members.map((member) => {
    return <UserCircle member={member.user} key={member.user.id} />;
  });

  return (
    <ul>
      {memberList}
    </ul>
  );
};

export default ProjectUserList;
