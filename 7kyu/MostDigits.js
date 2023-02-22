/*
Find the number with the most digits.
If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array){
    let lengths = array.map(num => num.toString().length)
    return array[lengths.indexOf(Math.max(...lengths))]
  }