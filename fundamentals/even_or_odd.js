#!/usr/bin/env node

// Given a list of integers, determine whethere the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as as: [0] (array with zero)

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
  let string = 'even';
  let sum = 0;
  if (array.length == 0) {
    return string;
  }
  for (const ele of array) {
    sum += ele;
  }
  if (sum % 2 !== 0) {
    string = 'odd';
  }
  return string;
}

console.log(oddOrEven([0]));
console.log(oddOrEven([1]));
console.log(oddOrEven([0, 1, 4]));
