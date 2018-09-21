import React from 'react';
import UserCircle from './user_circle';

const ProjectUserList = (props) => {
  console.log('memberlist: ', props.members);
  const memberList = props.members.map((member) => {
    return <UserCircle member={member.user || 'N/A'} key={(member.user) ? member.user.id : '0'} />;
  });

  return (
    <ul>
      {memberList}
    </ul>
  );
};

export default ProjectUserList;
