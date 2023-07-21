/*
You know what divisors of a number are. The divisors of a positive integer n are said to be proper when you consider only the divisors other than n itself.
In the following description, divisors will mean proper divisors. For example for 100 they are 1, 2, 4, 5, 10, 20, 25, and 50.
Let s(n) be the sum of these proper divisors of n.
Call buddy two positive integers such that the sum of the proper divisors of each number is one more than the other number:
(n, m) are a pair of buddy if s(m) = n + 1 and s(n) = m + 1
For example 48 & 75 is such a pair:
Divisors of 48 are: 1, 2, 3, 4, 6, 8, 12, 16, 24 --> sum: 76 = 75 + 1
Divisors of 75 are: 1, 3, 5, 15, 25 --> sum: 49 = 48 + 1
Task
Given two positive integers start and limit, the function buddy(start, limit) should return the first pair (n m) of buddy pairs such that n (positive integer)
is between start (inclusive) and limit (inclusive); m CAN be greater than limit and MUST be greater than n
If there is no buddy pair satisfying the conditions, then return "Nothing"
Examples
buddy(10, 50) returns [48, 75] 
buddy(48, 50) returns [48, 75]
*/

function buddy(start,limit) {
    function sum(n) {
      let res = 0
      if (!(Math.sqrt(n) % 1)) res += Math.sqrt(n)
      for (let i = 2; i < Math.sqrt(n); i++) {
        if (!(n % i)) {
          res += i + (n / i)
        }
      }
      return res
    }
    
    for (let i = start; i <= limit; i++) {
      const buddy = sum(i)
      if (i < buddy && sum(buddy) === i) return [i, buddy] 
    }
    return 'Nothing'
  }