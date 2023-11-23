#!/usr/bin/env node
// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant). 

// Given a string, detect whether or not it is a pangram. 
// Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  const legend = {
    a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0,
  };
  const lowercase_string = string.toLowerCase();
  let is_pangram = true;
  for (let i = 0; i < lowercase_string.length; i++) {
    if (lowercase_string[i] in legend) {
      legend[lowercase_string[i]] = legend[lowercase_string[i]] + 1;
    }
  }
  for (const key in legend) {
    if (legend[key] <= 0) {
      is_pangram = false;
      break;
    }
  }
  return is_pangram;
}

const val = isPangram('The quick brown fox jumps over the lazy dog.');
console.log(val);
