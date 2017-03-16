import React from 'react';

const IMG_URL = 'http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg';

const ActivityListItem = (props) => {
  const title = 'Armin commited a codez';
  const subtitle = 'four score and seven years ago';

  return (
    <li className="activityListItem">
      <div>
        <img src={IMG_URL} alt="github" />
      </div>
      <div>
        <h4 id="title"> {title} </h4>
        <p id="subtitle"> {subtitle} </p>
      </div>
    </li>
  );
};

export default ActivityListItem;
