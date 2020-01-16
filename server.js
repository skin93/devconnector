const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// connect to database
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`.yellow.bold);
});
