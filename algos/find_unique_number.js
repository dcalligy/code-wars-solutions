#! /usr/bin/env node
// There is an array with some numbers.
// All numbers are equal except one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It is guaranteed that array contains at least 3 numbers.
// The test contain some very huge arrays, so think about performance.

const findUniq = (arr) => {
  const obj = {};
  const start = 1;
  for (const element of arr) {
    if (!(element in obj)) {
      obj[element] = start;
    } else {
      obj[element]++;
    }
  }
  for (const key in obj) {
    if (obj[key] == 1) {
      return parseFloat(key);
    }
  }
};

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));
