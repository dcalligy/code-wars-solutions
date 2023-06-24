#! /usr/bin/env node
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:
// - It must start with a hashtag (#)
// - All words must have their first letter capitalized.
// - If the final result is longer than 140 chars it must return false.
// - If the input of the final result is an empty string it must return false.

// Examples:
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
function generateHashtag (str) {
  // Solution:
  // - Trim any whitespace from the front/end of the string.
  // - Split on the remaining spaces to get an array of words.
  // - Capitalize the first letter of each word.  (might need to loop through the array before this step)
  // - Do some join magic to convert our array into a string.
  // - Check the len of the string and return from the function accordingly.
  if (str.length == 0) {
    return 0;
  }
  const words_arry = str.trim().split(' ');
  let hash_tag = '#';
  for (const word of words_arry) {
    console.log('word[0]: ', word[0]);
    hash_tag += word[0].toUpperCase() + word.substr(1, (word.length - 1));
  }
  console.log('hash_tag: ', hash_tag);
}

console.log(generateHashtag(' Hello there thanks for trying my Kata'));
console.log(generateHashtag('    Hello     World   '));
console.log('');
