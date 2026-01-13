const express = require('express');

// Create Express app
const app = express();
const port = 1245;

// Define endpoints for GET requests (to '/')
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Config server to listen on port (1245)
app.listen(port, () => { });

module.exports = app;
