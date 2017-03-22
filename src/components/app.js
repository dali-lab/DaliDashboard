import React, { Component } from 'react';
import WeatherCard from './weather_card';
import CodeCard from './code_card';
import ActivityList from './activity_list';
import EventList from './events_list';
import LeaderBoard from './leaderboard_chart';
import Gallery from './gallery_card';
import ProjectCard from './project_card';
import UserCard from './user_card';
import NavBar from './navbar';
import Ink from 'react-ink';


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
        <div className="nav_bar">
          <NavBar />
        </div>
        <div className="main_card pill ink">
          <Ink />
          <UserCard />
        </div>
        <ProjectCard />
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
