import React from 'react';
import EventsListItem from './events_list_item';


const EventList = (props) => {
  const eventsItems = props.events.map((event) => {
    return <EventsListItem />;
  });

  return (
    <div className="main_card">
      <h4 id="title"> Activity List </h4>
      <p id="subtitle"> See what Dali members have been up to recently! </p>
      <ul id="events">
        {eventsItems}
      </ul>
    </div>
  );
};

export default EventList;
