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
      return res.status(400).json({ error: 'Missing or invalid parameters. Please provide either latitude and longitude or a city name.' });
    }

    const response = await axios.get(url);
    res.locals.oneday = response.data;
    next();

  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};

openWeatherController.getWeatherFiveDay = async (req,res, next) => {
  try{

  const lat = res.locals.oneday.coord.lat;
  const lon = res.locals.oneday.coord.lon;
  const units = 'imperial';
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=${units}`;
  const response = await axios.get(url)
  res.locals.fiveday = response.data
  next()
  }catch (error){
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
}


module.exports = openWeatherController;
