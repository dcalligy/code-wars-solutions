#! /usr/bin/env node
// There is an array with some numbers.
// All numbers are equal except one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It is guaranteed that array contains at least 3 numbers.
// The test contain some very huge arrays, so think about performance.

const findUniq = (arr) => {
  const obj = {};
  for (const element of arr) {
    if (!(element in obj)) {
      obj[element] = 1;
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

const findUniq2 = (arr) => {
  const map = new Map();
  for (const element of arr) {
    if (!map.has(element)) {
      map.set(element, 1);
    } else {
      map.set(element, map.get(element) + 1);
    }
  }
  for (const [key, value] of map) {
    if (value === 1) {
      return parseFloat(key);
    }
  }
};


console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));

console.log(findUniq2([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq2([ 0, 0, 0.55, 0, 0 ]));
