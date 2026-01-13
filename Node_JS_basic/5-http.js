const http = require('http');
const countStudents = require('./3-read_file_async.js');

//Create app server to handle routes (/ and /students)
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    countStudents(process.argv[2])
      .then((content) => {
        res.end(content);
      })
      .catch(() => {
        res.end(Cannot load the database\n');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

module.exports = app;

app.listen(1245);
