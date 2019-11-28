const config = require('config');
const Joi = require('joi');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./logger');
const express = require('express');
const app = express();

process.env.NODE_ENV;
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
app.get('env');
console.log(`app: ${app.get('env')}`);

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled...');
}

// Built in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// To serve static content like any files.
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));

const courses = [
  { id: 1, name: 'Course 1' },
  { id: 2, name: 'Course 2' },
  { id: 3, name: 'Course 3' },
  { id: 4, name: 'Course 4' }
];

// Configurations

console.log('Application Name:' + config.get('name'));
console.log('Mail Server:' + config.get('mail.host'));

// Concept of middleware
app.use(logger);
// Custom middleware function
app.use(function(req, res, next) {
  console.log('Authenticating...');
  next();
});

// Testing for the node application if its works or not
app.get('/', (req, res) => {
  res.send('HELLO WORLD');
});

// Getting all the courses we have
app.get('/api/courses', (req, res) => {
  res.send(courses);
});

// Creating a new course through POST request
app.post('/api/courses', (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

// Updating a course name within the list of courses
app.put('/api/courses/:id', (req, res) => {
  // Look up the course
  // If not existing, return 404
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send('The course with the given ID was not found');

  // Validate
  // If invalid, return 400 - Bad request
  const { error } = validateCourse(req.body); // result.error
  if (error) return res.status(400).send(error.details[0].message);

  // Update course
  // Return the updated course
  course.name = req.body.name;
  res.send(course);
});

// Reusable function for Validation
function validateCourse(course) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(course, schema);
}

// Getting detail of one course through route parameter
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send('the course with the given id was not found');
  res.send(course);
});

// Deleting any single course through its route parameter.
app.delete('/api/courses/:id', (req, res) => {
  // Look up the course
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send('The course with the given ID was not found');

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

// Defining the configuration for Application
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`lISTENING ON PORT ${port}...`));
