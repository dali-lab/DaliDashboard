import React from 'react';
import ActivityListItem from './activity_list_item';


const ActivityList = (props) => {
  const activityItems = props.activities.map((activity, index) => {
    return <ActivityListItem key={index} />;
  });

  return (
    <div className="main_card activity_list">
      <h4 id="title"> Activity List </h4>
      <p id="subtitle"> See what Dali members have been up to recently! </p>
      <ul>
        {activityItems}
      </ul>
    </div>
  );
};

export default ActivityList;
