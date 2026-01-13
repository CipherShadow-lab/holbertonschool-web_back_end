const http = require('http');
const fs = require('fs');

// Helper function that returns formatted text
function readStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
      .trim()
      .split('\n')
      .filter((line) => line.length > 0);

      const students = lines.slice(1);
      const fields = {};

      students.forEach((line) => {
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      let output = `Number of students: ${students.length}\n`;

      Object.keys(fields).forEach((field) => {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      });

      resolve(output.trim());
    });
  });
}

// Create app server to handle routes (/ and /students)
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    const database = process.argv[2];


    readStudents(database)
      .then((data) => {
        res.end(data);
      })
      .catch(() => {
        res.end('Cannot load database');
      });
  }
});

app.listen(1245);

module.exports = app;
