import React from 'react';

const EventsListItem = (props) => {
  const title = 'Armin commited a codez';
  const subtitle = 'four score and seven years ago there was a very interesting event here is som emore text blah blah blah';
  const time = '5:30 PM';
  const date = 'Wed 2/1';
  const icon = 'face';

  return (
    <li className="eventListItem">
      <div className="eventDayTime">
        <i className="material-icons">{icon}</i>
        <h4> {time} </h4>
        <p> {date} </p>
      </div>
      <div className="eventText">
        <h4 id="title"> {title} </h4>
        <p id="subtitle"> {subtitle} </p>
      </div>
    </li>
  );
};

export default EventsListItem;
