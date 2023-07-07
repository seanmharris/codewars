/*
Impliment the reverse function, which takes in input n and reverses it.
For instance, reverse(123) should return 321.
You should do this without converting the inputted number into a string.
// Please do not use
const forbidden = "
                  '
                  `
                  string
                  fixed
                  precision
                  .keys
*/

function reverse(n, arr = []){
    if (n === 0) return arr.reduce((a,b) => 10*a + b)
    arr.push(n % 10)
    return reverse(Math.floor(n/10), arr)
  }