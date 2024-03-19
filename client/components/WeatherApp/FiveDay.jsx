import React from 'react';
import '../../styles/FiveDay.css';
import icons from '../assets/icons.js';

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

const FiveDay = () => {
  return (
    <div className="five-day">
      <div className="dayoftheweek">Monday</div>
      <div className="weather-icon">
        <img src={cloudy} />
      </div>
      <div className="max-temperature">200F</div>
      <div className="min-temperature">100F</div>
      
    </div>
  );
};

export default FiveDay;
