import React from 'react';
import '../../styles/OneDay.css';
import { getWeatherIcon } from '../../util/weatherUtils';

const OneDay = (props) => {
  const { oneDayWeather } = props;

  return (
    <div className='one-day flex flex-col items-center justify-center'>
      <div className='text-3xl'>
        {oneDayWeather ? oneDayWeather.location : 'Temp'}
      </div>
      <div className='h-20'>
        <img
          src={getWeatherIcon(oneDayWeather ? oneDayWeather.weather : '')}
          alt='Weather Icon'
          class='w-auto, h-auto'
        />
      </div>
      <div>{oneDayWeather ? Math.ceil(oneDayWeather.temp) + '°' : 'N/A'}</div>
      <div>
        {oneDayWeather ? `Humidity: ${oneDayWeather.humidity}%` : 'N/A'}
      </div>
      <div>
        {oneDayWeather
          ? `Wind: ${Math.ceil(oneDayWeather.windspeed)} mph`
          : 'N/A'}
      </div>
      <div>{oneDayWeather ? oneDayWeather.description : 'N/A'}</div>
    </div>
  );
};

export default OneDay;
