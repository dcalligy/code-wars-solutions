#!/usr/bin/env node

// Given an array(arr) as an arguement complete the function countSmileys
// that should return the total number of smiling faces.

// Rules for a smiling face:
// - Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// - A smiley face can have a nose but it does not have to. Valid characthers for a nose are - ~
// - Every smiling face must have a smiling mouth that should be marked with either ) or D

// No additional characters are allowed except for those mentioned.
// Valid smiley faces examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

function countSmileys(arr) {
  let count = 0;
  for (const a of arr) {
    if (/^[:;][-~]?[)D]$/.test(a)) {
      count++;
    }
  }
  return count;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));    // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;
