#!/usr/bin/env node

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  let positive = 0;
  let negative = 0;
  const results = [];
  if (!input || input.length == 0) {
    // do nothing
  } else {
    for (const ele of input) {
      if (ele >0) {
      positive++;
      } else {
      negative += ele;
      }
    }
    results.push(positive);
    results.push(negative);
    console.log('results: ', results);
  }
  return results;
}

countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
