/*
Find the sum of the odd numbers within an array, after cubing the initial integers.
The function should return undefined if any of the values aren't numbers.
*/

function cubeOdd(arr) {
    if(arr.some(value => isNaN(+value))) return undefined
    return arr.map(num => num**3).filter(num => num % 2 !== 0).reduce((a,b) => a + b, 0)
  }