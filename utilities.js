const fs = require('fs');

function read(path) {
  return new Promise((pass, fail) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) fail(err);
      else pass(data);
    });
  });
}

module.exports = { read };
