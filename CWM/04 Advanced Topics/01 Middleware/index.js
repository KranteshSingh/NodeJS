const config = require('config');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const Joi = require('joi');
const helmet = require('helmet');
const morgan = require('morgan');
const courses = require('./router/courses');
const home = require('./routes/courses');
const logger = require('./middleware/logger');
const express = require('express');
const app = express();

// Templating engine for send HTML markup for http requests
app.set('view engine', 'pug');
app.set('views', './views');

process.env.NODE_ENV;
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
app.get('env');
console.log(`app: ${app.get('env')}`);

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled...');
  startupDebugger('Morgan enabled...');
}

// DB WORK
dbDebugger('Connected to the database');

// Built in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// To serve static content like any files.
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));
app.use('/api/courses', courses);
app.use('/home', home);

// Configurations

console.log('Application Name:' + config.get('name'));
console.log('Mail Server:' + config.get('mail.host'));
console.log('Mail Password:' + config.get('mail.password'));

// Concept of middleware
app.use(logger);
// Custom middleware function
app.use(function(req, res, next) {
  console.log('Authenticating...');
  next();
});

// Testing for the node application if its works or not
app.get('/', (req, res) => {
  //res.send('HELLO WORLD');
  res.render('index', { title: 'My Express app', message: 'Hello You' });
});

// Defining the configuration for Application
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`lISTENING ON PORT ${port}...`));
