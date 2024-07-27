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

// Brute force always wins... Come back and do this with a regex.
function countSmileys(arr) {
  const valid_smileys = [":)",";)",":D",";D",":-D",":~D",":-)",":~)",";~D",";~)",";-D",";-)"];
  let count = 0;
  if (arr.length == 0) {
    return count;
  }
  for (const a of arr) {
    if (valid_smileys.includes(a)) {
      count++;
    }
  }
  return count;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));    // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;
