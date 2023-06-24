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
  if (str.length == 0) {
    return false;
  }
  const arry = [];
  let hash_tag = '#';
  str.trim().split(' ').forEach((w) => {
    if (w) {
      arry.push(w);
    }
  });
  for (const a of arry) {
    if (a.length > 140) {
      return false;
    }
    hash_tag += a[0].toUpperCase() + a.substr(1, (a.length - 1));
  }
  if (hash_tag == '#') {
    return false;
  } else if (hash_tag.length > 140) {
    return false;
  }
  return hash_tag;
}

console.log(generateHashtag(' Hello there thanks for trying my Kata'));
console.log(generateHashtag('    Hello     World   '));
console.log(generateHashtag('Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'));
console.log('');
