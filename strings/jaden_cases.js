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
  // NOTE: This solution can be more elegant by doing the split
  // and substring magic all on one line, followed by joining the array to
  // convert our original value back into a string.
  const words_arry = this.split(' ');
  let return_sentence = '';
  for (let i = 0; i < words_arry.length; i++) {
    return_sentence += words_arry[i][0].toUpperCase() + words_arry[i].substring(1) + ' ';
  }
  return return_sentence.trimEnd();
};

let str = 'How can mirrors be real if our eyes aren\'t real'.toJadenCase();
console.log(str);

// For testing
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// var str = "How can mirrors be real if our eyes aren't real";
// Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

//   });
// });

