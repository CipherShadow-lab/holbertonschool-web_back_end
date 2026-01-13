const express = require('express');

// Create Express app
const app = express();

// Define endpoints for GET requests (to '/')
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Config server to listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Export app
module.export = app;
