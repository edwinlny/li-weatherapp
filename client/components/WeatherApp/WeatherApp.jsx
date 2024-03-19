import React from 'react';
import '../../styles/WeatherApp.css';
import icons from '../assets/icons.js';
import OneDay from './OneDay.jsx';
import FiveDay from './FiveDay.jsx'

//Icons
const [
  clearnight,
  cloudy,
  clearday,
  fewclouds,
  rain,
  thunder,
  snow,
  searchicon,
] = icons;

const WeatherApp = () => {
  return (
    <div className="main-container">
      <div className="search-area">
        <input
          type="text"
          className="searchInput"
          placeholder="Search by City Name or Coordinates"
        ></input>
        <div className="search-icon">
          <img src={searchicon}></img>
        </div>
      </div>

      <OneDay />

      <div className="five-day-row">
        <FiveDay/>
        <FiveDay/>
        <FiveDay/>
        <FiveDay/>
        <FiveDay/>
      </div>
      
    </div>
  );
};

export default WeatherApp;
