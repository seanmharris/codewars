/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
If they are, change the array value to a string of that vowel.
Return the resulting array.
*/

// My note: ASCII lowercase vowels -> a = 97, e = 101, i = 105, o = 111, u = 117

const isVow = a => {
    const vowels = [97,101,105,111,117]
    return a.map(code => vowels.includes(code) ? String.fromCharCode(code) : code)
  }