import React from 'react';
import EventsListItem from './events_list_item';


const EventList = (props) => {
  const eventsItems = props.events.map((event, index) => {
    return <EventsListItem key={index} />;
  });

  return (
    <div className="main_card event_list">
      <h4 id="title"> Upcoming Events </h4>
      <p id="subtitle"> Here's what's happening in the lab </p>
      <ul>
        {eventsItems}
      </ul>
    </div>
  );
};

export default EventList;
