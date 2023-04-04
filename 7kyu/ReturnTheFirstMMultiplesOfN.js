/*
Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n.
Assume that m is a positive integer.
Ex.
multiples(3, 5.0)
should return
[5.0, 10.0, 15.0]
*/

function multiples(m, n){
    let count = 1, res = []
    while (count <= m) {
      res.push(count * n)
      count++
    }
    return res
  }