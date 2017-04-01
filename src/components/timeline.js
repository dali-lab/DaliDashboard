import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';


const TimeLn = (props) => {
  return (
    <Timeline>
      <TimelineEvent title="Mar 30, 2017"
        createdAt="High Fidelity Mockups"
      >
           I received the payment for $543. Should be shipping the item within a couple of hours.
      </TimelineEvent>
      <TimelineEvent
        title="Mar 27, 2017"
        createdAt="Low Fidelity Mockups"
      >
           Like we talked, you said that you would share the shipment details? This is an urgent order and so I
               am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
               gentle reminder if you are on track already!
      </TimelineEvent>
    </Timeline>
  );
};

export default TimeLn;
