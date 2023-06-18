#! /usr/bin/env node
// Your order, please - Name of problem.
// Your task is to sort a given string. Each word in the string will 
// contain a string number. This number is the position the word should have a been in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the String will
// only contain valid consecutive numbers.

// Examples:
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
function order(words){
  const legend = {
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
    '6': '',
    '7': '',
    '8': '',
    '9': '',
  };
  let return_string = '';
  // Handle empty string case.
  if (words.length == 0) {
    return '';
  }
  for (const word of words.split(' ')) {
    for (const key in legend) {
      if (word.includes(key)) {
        legend[key] = word;
      }
    }
  }
  for (const key in legend) {
    if (legend[key]) {
      return_string += legend[key] + ' ';
    }
  }
  return return_string.trimEnd();
}

console.log(order('is2 Thi1s T4est 3a'));
console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
console.log(order(''));

// Sample Tests...
// const {assert} = require('chai');

// describe("order", () => {
//   it("should work corectly", () => {
//     assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
//     assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
//     assert.strictEqual(order(""), "", "empty input should return empty string" )
//   });
// });
