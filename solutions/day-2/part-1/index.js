const { read } = require('../../../utilities');

read('../input.txt').then(data => {
  let twoLetterCounter = 0;
  let threeLetterCounter = 0;

  const ids = data.split('\n');

  const counts = ids.reduce((acc, id) => {
    const unique = new Set(id); // strip out duplicates

    if (unique.length === id.length) {
      // this id only contained unique number
      return acc;
    }

    acc.push(
      [...unique].reduce((counts, char) => {
        if (id.indexOf(char) === id.lastIndexOf(char)) {
          // only contains one of this character
          return counts;
        }

        counts[char] = [...id].reduce((count, c) => {
          // increment if unique char matches current character
          if (c === char) count++;
          return count;
        }, 0);

        return counts;
      }, {})
    );

    return acc;
  }, []);

  const checksumParts = counts.reduce(
    (numbers, count) => {
      const values = Object.values(count);
      if (values.indexOf(2) > -1) numbers[0]++;
      if (values.indexOf(3) > -1) numbers[1]++;
      return numbers;
    },
    [0, 0]
  );

  console.log('checksum:', checksumParts[0] * checksumParts[1]);
});
