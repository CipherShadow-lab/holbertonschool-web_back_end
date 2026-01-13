const fs = require('fs');

function countStudents(path) {
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

      if (lines.length === 0) {
        resolve(['Number of students: 0']);
        return;
      }

      // Remove header row
      const students = lines.slice(1);

      const fields = {};

      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      const output = [];
      output.push(`Number of students: ${students.length}`);

      Object.keys(fields).forEach((field) => {
        const list = fields[field].join(', ');
        output.push(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
      });

      resolve(output);
    });
  });
}

module.exports = countStudents;
