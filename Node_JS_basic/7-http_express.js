const express = require('express');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const LIST = args[0];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const respMessage = 'This is the list of our students\n';
  try {
    const students = await countStudents(LIST);
    res.send(`${respMessage}${students.join('\n')}`);
    } catch (error) {
      res.send(`${respMessage}${error.message}`);
    }
});

app.listen(port, () => { });

module.exports = app;
