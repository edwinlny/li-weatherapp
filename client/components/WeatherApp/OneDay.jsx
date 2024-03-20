import React from 'react';
import '../../styles/OneDay.css';
import { getWeatherIcon } from '../../util/weatherUtils';

const OneDay = (props) => {
  const { oneDayWeather } = props;
  

  return (
    <div className="one-day">
      <div className="location">
        {oneDayWeather ? oneDayWeather.location : 'Temp'}
      </div>
      <div className="weather-icon">
        <img src={getWeatherIcon(oneDayWeather ? oneDayWeather.weather: '')} alt="Weather Icon" />
      </div>
      <div className="temperature">{oneDayWeather ? oneDayWeather.temp: 'N/A'}</div>
      <div className="humidity">{oneDayWeather ? `${oneDayWeather.humidity}%`: 'N/A'}</div>
      <div className="wind-speed">{oneDayWeather ? `${oneDayWeather.windspeed} mph`: 'N/A'}</div>
      <div className="description">{oneDayWeather ? oneDayWeather.description : 'N/A'}</div>
    </div>
  );
};

export default OneDay;
