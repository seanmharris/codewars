/*
Write a function named numbers.
function should return True if all parameters are of the Number type.
The function should accept any number of parameters.
Example usage:
numbers(1, 4, 3, 2, 5); // true
numbers(1, "a", 3); // false
numbers(1, 3, NaN); // true
*/

function numbers() {
    let args = [...arguments]
    return args.every(arg => typeof arg === 'number')
  }