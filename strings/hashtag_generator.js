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
}
