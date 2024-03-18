const express = require('express');
const router = express.Router();

//Add controllers here
const openWeatherController = require('../controllers/openWeatherController');

//
router.get('/', openWeatherController.getWeatherOneDay, openWeatherController.getWeatherFiveDay, (req, res) => {
  res.status(200).json({oneday: res.locals.oneday, fiveday: res.locals.fiveday})
});

module.exports = router;
