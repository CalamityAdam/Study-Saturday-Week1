// Require Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { studentRouter } = require('./route/student');

// Init App
const app = express();

// Basic Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/students', studentRouter);

// app.get();

/*
put '/:id'
delete '/:id'

- Necessary routes:

  - Get all students

  - Get all test scores

  - Update student name

  - Update test score

  - Get mean test score by student ID

  - Get top scoring student

  - Delete Student

  - Delete Score

  - Add Student

  - Add Score
*/

// Listen on server

app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});
