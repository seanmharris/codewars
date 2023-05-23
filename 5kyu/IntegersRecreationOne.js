/*
1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246.
Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681.
The sum of these squares is 84100 which is 290 * 290.
Task
Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.
We will return an array of subarrays or of tuples (in C an array of Pair) or a string.
The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.
Example:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
*/

function listSquared(m, n) {
    let res = []
    for (let l = m; l <= n; l++) {
      function getDivs(number) {
        let divs = []
        for (let i = 1; i <= Math.sqrt(number); i++) {
          if(number % i === 0) {
            if (number / i !== i) {
              divs.push(i, number / i)
            } else divs.push(i)
          }
        }
        return divs
      }
      const sumSquares = arr => arr.reduce((a,b) => a + (b**2), 0)
      const total = sumSquares(getDivs(l))
      if (Math.sqrt(total) % 1 === 0) res.push([l, total])
    }
    return res
  }
  