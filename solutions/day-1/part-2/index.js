const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, '../input.txt'), 'utf-8', (err, data) => {
  const deltas = data.trim().split('\n');

  let found = false;
  let frequencies = [0];
  let index = 0;

  const start = Date.now();

  while (!found) {
    const freq = Number(deltas[index]) + frequencies[frequencies.length - 1];

    if (frequencies.indexOf(freq) > -1) {
      found = true;
    }

    frequencies.push(freq);

    index = index < deltas.length - 1 ? index + 1 : 0;
  }

  console.log('First repeated frequency', frequencies[frequencies.length - 1]);
  console.log('Time taken:', (Date.now() - start) / 60 + 's');
});
