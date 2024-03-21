import React from 'react';
import '../../styles/FiveDay.css';
import { getWeatherIcon } from '../../util/weatherUtils';

const FiveDay = (props) => {
  const { fiveDayWeather } = props;

  return (
    <div className="five-day">
      <div className="dayoftheweek" >{fiveDayWeather ? fiveDayWeather.dayOfWeek : ''} </div>
      <div className="weather-icon">
        <img src={getWeatherIcon(fiveDayWeather ? fiveDayWeather.weather: '')} alt="Weather Icon" />
      </div>
      <div className="max-temperature"  >{fiveDayWeather ?  Math.ceil(fiveDayWeather.max) +'°' : ''} </div>
      <div className="min-temperature" > {fiveDayWeather ?  Math.ceil(fiveDayWeather.min) +'°' : ''}</div>
      <div className="description"> {fiveDayWeather ? fiveDayWeather.description : ''} </div>
    </div>
  );
};

export default FiveDay;
