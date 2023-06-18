#! /usr/bin/env node
// Jaden Smith, the son of Will Smith is the star of
// films such as the Karate Kid and After Earth. Jaden
// is all known for some of his philosophy that he deliver via Twitter.
// When writing on Twitter, he is known for almost always capitalizing every word.
// For simplicity, you'll have to capitalize every word. For simplicity, you'll have
// to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are ot capitalized in the same
// way he originally typed them.

// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
  //...
  // Solution...
  // - Split on every word.
  // - Loop through the array and toUpper the first char of each element in the array
  // - Join each element of the array to get a string and return the value.
};

// For testing
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// var str = "How can mirrors be real if our eyes aren't real";
// Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

//   });
// });

