#! /usr/bin/env node
// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, the result should be { 'a': 2, 'b': 1 }

// What if the string is empty? The result should be an empty object literal.

const count = (string) => {
  if (!string) {
    return {};
  }
  const result = {};
  const array = string.split('');
  for (const char of array) {
    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char]++;
    }
  }
  return result;
};

console.log(count(''));
console.log(count('aba'));
console.log(count('ab'));
console.log(count('ABC'));
