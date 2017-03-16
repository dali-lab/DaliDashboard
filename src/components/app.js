import React, { Component } from 'react';
import WeatherCard from './Weather';
import CodeCard from './codeCard';

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
      flexWrap: 'wrap',
    };

    return (
      <div style={cardFlexStyle}>
        <WeatherCard />
        <CodeCard />
      </div>
    );
  }
}

export default App;
