const axios = require('axios');

const openWeatherController = {};

openWeatherController.getWeatherOneDay = async (req, res, next) => {
  try {
    let url;
    if (req.query.lat && req.query.lon) {
      const lat = req.query.lat;
      const lon = req.query.lon;
      const units = 'imperial';
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=${units}`;
    } else if (req.query.q) {
      const cityname = req.query.q;
      const units = 'imperial';
      url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${process.env.WEATHER_API_KEY}&units=${units}`;
    } else {
      return res.status(400).json({
        error:
          'Missing or invalid parameters. Please provide either latitude and longitude or a city name.',
      });
    }

    const response = await axios.get(url);

    const parsedResponse = {
      location: response.data.name,
      weather: response.data.weather[0].main,
      description: response.data.weather[0].description,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      dt: response.data.dt
    };

    const coordinates = {
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    };

    res.locals.oneday = parsedResponse;
    res.locals.coords = coordinates;

    next();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};

openWeatherController.getWeatherFiveDay = async (req, res, next) => {
  try {

    const lat = res.locals.coords.lat;
    const lon = res.locals.coords.lon;
    const units = 'imperial';
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=${units}`;
    const response = await axios.get(url);

    //Parse our five day object
    const daysArray = response.data.list;
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const fiveDayResult = [];
    const dateStore = new Set();

    for (let i = 0; i < daysArray.length; i++) {
      const currentDate = new Date(daysArray[i].dt * 1000).getDate();
      //Skips the present day in fiveDayResult
      if (daysOfWeek[new Date(res.locals.oneday.dt * 1000).getDay()] === daysOfWeek[new Date(daysArray[i].dt * 1000).getDay()]) {
        continue;
      }
    
      if(!dateStore.has(currentDate)) {
      const currentDay = {
        dayOfWeek: daysOfWeek[new Date(daysArray[i].dt * 1000).getDay()],
        min: daysArray[i].main.temp_min,
        max: daysArray[i].main.temp_max,
        weather: daysArray[i].weather[0].main,
        description: daysArray[i].weather[0].description,
      };

      fiveDayResult.push(currentDay);
      dateStore.add(currentDate);
    }
      if(fiveDayResult.length === 5) {
        break;
      }

  }
    res.locals.fiveday = fiveDayResult;
    next();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};

module.exports = openWeatherController;
