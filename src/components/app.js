import React, { Component } from 'react';
import WeatherCard from './weather_card';
import CodeCard from './code_card';
import ActivityList from './activity_list';
import EventList from './events_list';
import LeaderBoard from './leaderboard_chart';
import Gallery from './gallery_card';


// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      activities: [1, 2, 3, 4],
    };
  }

  render() {
    return (
      <div>
        <div>
          <LeaderBoard />
        </div>
        <div>
          <ActivityList activities={this.state.activities} />
          <EventList events={this.state.activities} />
        </div>
        <div>
          <WeatherCard />
          <CodeCard />
          <CodeCard />
        </div>
        <div className="main_card">
          <Gallery />
        </div>
      </div>
    );
  }
}

export default App;
