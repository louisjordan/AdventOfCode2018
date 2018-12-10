const { read } = require('../../../utilities');

read('../input.txt').then(data => {
  console.log(data.split('\n').reduce((total, freq) => (total += Number(freq)), 0));
});
