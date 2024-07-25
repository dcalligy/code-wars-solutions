#!/usr/bin/env node

// Write a function that acceepts an interger n and a string s as parameters,
// and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I" -> ("IIIIII")
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  let str = '';
  for (let i = 0; i < n; i++) {
      str += s;
  }
  console.log(str);
  return str;
}

repeatStr(6, 'I');
repeatStr(5, 'Hello');
