import React from 'react';
import '../../styles/OneDay.css';
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

const OneDay = () => {
  return (
    <div className="one-day">
      <div className="location">New York</div>
      <div className="weather-icon">
        <img src={cloudy} />
      </div>
      <div className="temperature">100F</div>
      <div className="humidity">Humidity: 50%</div>
      <div className="wind-speed">Wind Speed: 20mph</div>
      <div className="description">Rainy</div>
    </div>
  );
};

export default OneDay;
