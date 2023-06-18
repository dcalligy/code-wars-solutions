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
  // Solution:
  // - We know we numbers can be from 1-9. Create a legend obj.
  // - If the length of the string is 0, return an empty string.
  // - Split on the spaces to get array, and then loop through them.
  // - If the element at that iteration includes 1-9, assign the element
  // to its respected spot in the legend.
  // - Create and return the string once the loop is done.
  
}

// Sample Tests...
// const {assert} = require('chai');

// describe("order", () => {
//   it("should work corectly", () => {
//     assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
//     assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
//     assert.strictEqual(order(""), "", "empty input should return empty string" )
//   });
// });
