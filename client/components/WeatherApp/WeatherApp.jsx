import React, { useState } from 'react';
import '../../styles/WeatherApp.css';
import OneDay from './OneDay.jsx';
import FiveDay from './FiveDay.jsx';
import axios from 'axios';
import {searchicon} from '../assets/icons'

const WeatherApp = () => {
  const [input, setInput] = useState('');
  const [oneDayWeather, setOneDayWeather] = useState({});
  const [fiveDayWeather, setFiveDayWeather] = useState([]);


  const handleSearchClick = async () => {
    try {
      const response = await axios.get(`/api?q=${input}`);
      setOneDayWeather(response.data.oneday)
      setFiveDayWeather([])
      console.log('test', response.data.oneday);
      console.log('hi', response.data.oneday.weather)

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="main-container">
      <div className="search-area">
        <input
          type="text"
          className="searchInput"
          placeholder="Search by City Name or Coordinates"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <div className="search-icon" onClick={handleSearchClick}>
         <img src={searchicon}/>
        </div>
      </div>

      <OneDay oneDayWeather={oneDayWeather} />

      <div className="five-day-row">
        <FiveDay />
        <FiveDay />
        <FiveDay />
        <FiveDay />
        <FiveDay />
      </div>
    </div>
  );
};

export default WeatherApp;
