const http = require('http');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0];

const hostname = '127.0.0.1';
const port = 1245;

// Create app server to handle routes ('/' and '/students')
const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.statusCode = 200;
    let content = 'This is the list of our students\n';
    try {
      const students = await countStudents(DATABASE);
      content += students.join('\n');
      res.end(content);
    } catch (err) {
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
  res.end();
});

app.listen(port, hostname, () => { });

module.exports = app;
