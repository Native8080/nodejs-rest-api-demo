// Dependencies
const express = require('express'),
      bodyParser = require('body-parser'),
      Mongoose = require('mongoose'),
      Joi = require('joi');

// Initiate express      
const app = express();

// Import musicRouter to handle api routes
const musicRouter = require('./api/musicRouter');

// Downgraded to Mongodb 2.2.6 & Mongoose 4.0.8
// Connect to Mongo database via Mongoose
Mongoose.connect('mongodb://localhost:27017/musicAPI', {useNewUrlParser: true});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Two default routes
// Send routes to musicRouter
app.use('/', musicRouter);
app.use('/api', musicRouter);

module.exports = app;