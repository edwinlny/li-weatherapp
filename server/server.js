require('dotenv').config();
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 1111;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes - Add routes
const openRoute = require('./routes/openWeatherRoutes');
app.use('/api', openRoute);

//Error Handling
app.use('*', (req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.listen(PORT, async () => {
  console.log(`Server listening on port: ${PORT}...`);
});