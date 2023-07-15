/*
There exist two zeroes: +0 (or just 0) and -0.
Write a function that returns true if the input number is -0 and false otherwise (True and False for Python). The input will be a number.
*/

function isNegativeZero(n) {
    const zero = n === 0
    const neg = 1 / n === -Infinity
    return zero && neg
  }