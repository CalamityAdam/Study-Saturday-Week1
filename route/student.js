const studentRouter = require('express').Router();

let students = [
  { id: 1, name: 'Adam' },
  { id: 2, name: 'Megan' },
  { id: 3, name: 'Lilo' },
  { id: 4, name: 'Max' },
  { id: 5, name: 'Duc' },
  { id: 6, name: 'Christina' },
  { id: 7, name: 'June' },
  { id: 8, name: 'Stasha' },
  { id: 9, name: 'J' },
  { id: 10, name: 'Luke' },
  { id: 11, name: 'Noah' },
  { id: 12, name: 'Chris' },
];

const allStudents = students.map(student => student.name);

studentRouter.get('/', (req, res, next) => {
  try {
    res.send(allStudents);
  } catch (error) {
    next(error);
  }
});

studentRouter.get('/:id', (req, res, next) => {
  try {
    res.send(allStudents[req.params.id - 1]);
  } catch (error) {
    next(error);
  }
});

studentRouter.post('/', (req, res, next) => {
  try {
    let newName = req.body.name;
    students.push({ id: students.length + 1, name: newName });
    res.send(students);
  } catch (error) {
    next(error);
  }
});

studentRouter.put('/:id', (req, res, next) => {
  try {
    const index = req.params.id - 1;
    const newName = req.body.name;
    students[index].name = newName;
    res.send(students);
  } catch (error) {
    next(error);
  }
});

studentRouter.delete('/:id', (req, res, next) => {
  try {
    let index = req.params.id - 1;
    students.splice(index, 1);
    res.send(students);
  } catch (error) {
    next(error);
  }
});

module.exports = { studentRouter, students };
