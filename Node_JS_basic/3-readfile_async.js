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

      // Remove header row
      const students = lines.slice(1);

      // Count total students
      console.log(`Number of students: ${students.length}`);

      // Group students by field
      const fields = {};

      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      // Print each field's summary
      Object.keys(fields).forEach((field) => {
        const list = fields[field].join(', ');
        console.log(
          `Number of students in ${field}: ${fields[field].length}. List: ${list}`,
        );
      });

      resolve();
    });
  });
}

module.exports = countStudents;
