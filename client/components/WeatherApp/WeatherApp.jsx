import React, { useState, useEffect } from 'react';
import '../../styles/WeatherApp.css';
import OneDay from './OneDay.jsx';
import FiveDay from './FiveDay.jsx';
import axios from 'axios';
import { searchicon } from '../assets/icons';

const WeatherApp = () => {
  const [input, setInput] = useState('');
  const [oneDayWeather, setOneDayWeather] = useState({});
  const [fiveDayWeather, setFiveDayWeather] = useState([]);

  const [tempUnits, setTempUnits] = useState('F');

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const [oneDay, fiveDay] = convertTemperature(oneDayWeather, fiveDayWeather, tempUnits);
    setOneDayWeather(oneDay)
    setFiveDayWeather(fiveDay)
  }, [tempUnits]);

  const handleSearchClick = async () => {
    try {
      // Clears error message for new search
      setErrorMessage('');

      let response;
      if (/^[a-zA-Z\s]+$/.test(input)) {
        response = await axios.get(`/api?q=${input}`);
      } else if (/^-?\d+(\.\d+)?, ?-?\d+(\.\d+)?$/.test(input)) {
        const [lat, lon] = input.split(',');
        response = await axios.get(`/api?lat=${lat.trim()}&lon=${lon.trim()}`);
      } else {
        setErrorMessage('Invalid Input. Remove any special characters.');
      }

      if (response) {
        if (tempUnits === 'C') {
          const [oneDay, fiveDay] = convertTemperature(response.data.oneday, response.data.fiveday, tempUnits);
          setOneDayWeather(oneDay);
          setFiveDayWeather(fiveDay);
        } else {
          
          setOneDayWeather(response.data.oneday);
          setFiveDayWeather(response.data.fiveday);
        }

      }
      // console.log('1day', response.data.oneday)
      // console.log('5day', response.data.fiveday)
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const convertTemperature = (oneDay, fiveDay, type) => {
    // converts F => C
    if (type === 'C') {
      // iterates thru OneDayWeather & FiveDayWeather, converts to celsius or vice versa
      const tempOneDayWeather = { ...oneDay };
      const tempFiveDayWeather = [ ...fiveDay ];
      tempOneDayWeather.temp = (tempOneDayWeather.temp - 32) / 1.8;

      tempFiveDayWeather.forEach(day => {
        day.min = (day.min - 32) / 1.8;
        day.max = (day.max - 32) / 1.8;
      })

      return [tempOneDayWeather, tempFiveDayWeather]    
    } else if (type === 'F') {
      const tempOneDayWeather = { ...oneDay };
      const tempFiveDayWeather = [...fiveDay ];
      tempOneDayWeather.temp = (tempOneDayWeather.temp * 1.8) + 32;
      tempFiveDayWeather.forEach(day => {
        day.min = (day.min * 1.8) + 32;
        day.max = (day.max * 1.8) + 32;
      })
      
      return [tempOneDayWeather, tempFiveDayWeather]    
    }
  };

  return (
    <div className="main-container">
      <div className="errorMessage">
        {' '}
        {errorMessage.length ? <div>{errorMessage}</div> : null}
      </div>
      <div className="search-area">
        <input
          type="text"
          className="searchInput"
          placeholder="Search by City Name or Coordinates"
          onChange={(e) => setInput(e.target.value)}
        ></input>

        <div className="search-icon" onClick={handleSearchClick}>
          <img src={searchicon} />
        </div>
      </div>
      <div onClick={() => setTempUnits(tempUnits === 'F' ? 'C' : 'F')}>
        {tempUnits === 'F' ? 'F' : 'C'}
      </div>

      <OneDay oneDayWeather={oneDayWeather} />

      <div className="five-day-row">
        {fiveDayWeather.map((item) => (
          <FiveDay key={item.id} fiveDayWeather={item} />
        ))}
      </div>
    </div>
  );
};

export default WeatherApp;
