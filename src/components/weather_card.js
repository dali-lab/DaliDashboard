import React, {
  Component,
} from 'react';
import weatherZipSearch from './weather-api';
import weatherIcons from '../../Assets/weatherIcons.json';


class WeatherCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current_temp: 0,
      current_weather: '...',
      city: '...',
      sunrise: '...',
      sunset: '...',
      icon: '....',
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
        icon: this.setIcon(weatherData),
      });
    });
  }

  setIcon(resp) {
    const prefix = 'wi wi-';
    const code = resp.weather[0].id;
    let icon = weatherIcons[code].icon;

    // If we are not in the ranges mentioned above, add a day/night prefix.
    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
      icon = `day-${icon}`;
    }
    // Finally tack on the prefix.
    return prefix + icon;
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
      <div className="header_card" id="weather">
        <div className="cardTop">
          <i className={this.state.icon}> </i>
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
