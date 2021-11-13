const express = require('express');
const router = express.Router();

const users = [
  {
    id: 1,
    name: 'faizan',
    dateOfBirth: '10-01-1998',
  },
  {
    id: 2,
    name: 'shehzad',
    dateOfBirth: '10-01-1998',
  },
];

// Gets All users
router.get('/', (req, res) => {
  if (req.query.name) {
    const user = users.find((user) => user.name === req.query.name);
    res.json(user);
  }

  res.json(users);
});

// Gets All users
router.get('/:id', (req, res) => {
  const user = users.find((user) => user.id === req.params.id);
  res.json(user);
});

// Gets All users
router.post('/', (req, res) => {
  users.push({
    id: 3,
    name: req.body.name,
  });
  res.json(req.body);
});

module.exports = router;
