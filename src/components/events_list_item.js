import React, { Component } from 'react';


class EventsListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Armin commited a codez',
      subtitle: 'four score and seven years ago there was a very interesting event here is som emore text blah blah blah',
      time: '5:30 PM',
      date: 'Wed 2/1',
      icon: 'face',
      type: 'workshop',
    };
  }

  render() {
    let titleColor;
    if (this.state.type === 'meeting') {
      titleColor = { color: '#fff000' };
    } else if (this.state.type === 'workshop') {
      titleColor = { color: 'blue' };
    } else {
      titleColor = { color: '#000000' };
    }

    return (
      <li className="eventListItem">
        <div className="eventDayTime">
          <i className="material-icons">{this.state.icon}</i>
          <h4> {this.state.time} </h4>
          <p> {this.state.date} </p>
        </div>
        <div className="eventText">
          <h4 id="title" style={titleColor}> {this.state.title} </h4>
          <p id="subtitle"> {this.state.subtitle} </p>
        </div>
      </li>
    );
  }
}

export default EventsListItem;
