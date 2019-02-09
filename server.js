const express = require('express');

const server = express();

server.post('/api', (req, res) => {
  const user = { name: 'Andres' };
  res.status(201).json(user);
});

module.exports = server;
