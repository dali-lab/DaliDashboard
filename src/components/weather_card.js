import React, {
  Component,
} from 'react';
import weatherZipSearch from './weather-api';

let weatherStyle = {
  backgroundColor: '#CDDA49',
};

class WeatherCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current_temp: 0,
      current_weather: '...',
      city: '...',
      sunrise: '...',
      sunset: '...',
    };
    this.getWeather();
  }

  getWeather() {
    weatherZipSearch('03755,us').then(weatherData => {
      this.setState({
        city: weatherData.name,
        current_weather: weatherData.weather[0].description,
        current_temp: `${this.roundTemp(weatherData.main.temp)} F`,
        sunrise: `Sunrise: ${this.convertTime(weatherData.sys.sunrise)}`,
        sunset: `Sunset: ${this.convertTime(weatherData.sys.sunset)}`,
      });
    });
  }

  roundTemp(temp) {
    return Math.round(temp);
  }

  convertTime(sec) {
    const date = new Date(sec * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  capitalize(str) {
    return str.toUpperCase();
  }

  render() {
    return (
      <div className="header_card" style={weatherStyle}>
        <div className="cardTop">
          <i className="wi wi-night-sleet"> </i>
          <h2> {this.state.current_temp} </h2>
          <h4> {this.state.city} </h4>
        </div>
        <div className="cardBottom">
          <p> {this.state.current_weather} </p>
          <p> {this.state.sunrise} / {this.state.sunset} </p>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
