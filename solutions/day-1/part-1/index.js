const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf-8', (err, data) => {
  console.log(data.split('\n').reduce((total, freq) => (total += Number(freq)), 0));
});
