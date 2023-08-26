#!/usr/bin/env node
// Very simple, given an integer or a floating-point number, find its opposite.
// Examples:
// 1: -1
// 14: -14
// -34: 34

// I am adding this comment because after submitting my solution it has been
// brought to my attention that you can also do the following solutions.
// return -n --> a one liner
// return n -(n * 2) --> (n - n * 2) = n * (1 - 2) = -n
function opposite(number) {
  if (number == 0) {
    return 0;
  }
  let opposite_num;
  if (number > 0) {
    opposite_num = parseFloat(`-${number.toString()}`);
    return parseFloat(opposite_num);
  }
  opposite_num = parseFloat(number.toString().slice(1));
  return opposite_num;
}

console.log(opposite(0));
console.log(opposite(1));
console.log(opposite(-1));
console.log(opposite(1234567.00));
console.log(opposite(-12451678.00));
