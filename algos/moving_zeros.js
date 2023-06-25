#!/usr/bin/env node
// Write an algorithm that takes an array
// and moves all zeros to the end, preserving
// the order of the other elements.

function moveZeros(arr) {
  const return_arry = [];
  const zeros = [];
  for (const element of arr) {
    if (element !== 0 || typeof(element) !== 'number') {
      return_arry.push(element);
    } else {
      zeros.push(element);
    }
  }
  return return_arry.concat(zeros);
}

// returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
