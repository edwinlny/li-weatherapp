import React from 'react';
import '../../styles/FiveDay.css';
import { getWeatherIcon } from '../../util/weatherUtils';

const FiveDay = (props) => {
  const { fiveDayWeather } = props;

  return (
    <div className='main-div border border-gray-300 rounded-md p-4 flex flex-col items-center justify-center mx-2'>
      <div className='dayoftheweek'>
        {fiveDayWeather ? fiveDayWeather.dayOfWeek : ''}{' '}
      </div>
      <div className='weather-icon'>
        <img
          src={getWeatherIcon(fiveDayWeather ? fiveDayWeather.weather : '')}
          alt='Weather Icon'
        />
      </div>
      <div className='max-temperature'>
        {fiveDayWeather ? Math.ceil(fiveDayWeather.max) + '°' : ''}{' '}
      </div>
      <div className='min-temperature'>
        {' '}
        {fiveDayWeather ? Math.ceil(fiveDayWeather.min) + '°' : ''}
      </div>
      <div className='description'>
        {' '}
        {fiveDayWeather ? fiveDayWeather.description : ''}{' '}
      </div>
    </div>
  );
};

export default FiveDay;
