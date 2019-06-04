const express = require('express');

const server = express();

server.post('/api', (req, res) => {
  const user = { name: 'Andres' };
  res.status(201).json(user);
});

server.delete('/api', (req, res) => {
  res.status(200).json({ message: 'deleted' });
});

module.exports = server;
