import React, { Component } from 'react';
import WeatherCard from './weather_card';
import CodeCard from './code_card';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    let cardFlexStyle = {
      display: 'flex',
      justifyContent: 'space-around',
    };

    return (
      <div style={cardFlexStyle}>
        <WeatherCard />
        <CodeCard />
        <CodeCard />
      </div>
    );
  }
}

export default App;
