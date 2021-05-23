const express = require('express');
const DB = require('../../data/db-helper');
const router = express.Router();

router.get('/', (req, res) => {
  DB.findAll('users')
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  DB.findById('users', id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: `User ${id} not found` });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/', (req, res) => {
  DB.create('users', req.body)
    .then((newUser) => {
      res.status(201).json({ message: 'User created', newUser });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put('/:id', (req, res) => {
  DB.update('users', req.params.id, req.body)
    .then((editedUser) => {
      res.status(200).json({
        message: `User ${req.params.id} updated`,
        editedUser,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  DB.remove('users', id)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({ message: `User ${id} has been removed` });
      } else {
        res.status(404).json({ message: `User ${id} could not be found` });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
