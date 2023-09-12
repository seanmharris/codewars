/*
For every positive integer N, there exists a unique sequence starting with 1 and ending with N and such
that every number in the sequence is either the double of the preceeding number or the double plus 1.
For example, given N = 13, the sequence is [1, 3, 6, 13], because . . . :
 3 =  2*1 +1
 6 =  2*3
 13 = 2*6 +1
Write a function that returns this sequence given a number N.
Try generating the elements of the resulting list in ascending order, i.e., without resorting to a list reversal or prependig the elements to a list.
*/

// simple working backwards with .unshift()

function climb(n){
    let res = [n]
    while (n > 1) {
      if (n % 2) {
        n = (n-1) / 2
      } else n /= 2
      res.unshift(n)
    }
    return res
  }

// below: very slow, but following the extra credit mentioned on line 9 - generating the list FORWARD
// recursive solution tries 2 paths at each stage. default x is 1, arr is empty array
// if provided x is ever greater than our target n, we've overshot & return null
// we push our current x into the array, and then if it's equal to our target, we return said array
// if x is not yet >= n, we try both paths - one of which will eventually yield null, so we can use conditional or (||) to return the valid path.
// the difference in the recursive calls is simply x*2 vs. x*2+1, and we pass in a copy of arr so far
// the recursive function will try every option until it finds the valid solution.

function climb(n, x = 1, arr = []){
    if (x > n) return null
    arr.push(x)
    if (x === n) return arr
    return climb(n, x * 2, [...arr]) || climb(n, x * 2 + 1, [...arr])
  }

// there is almost certainly a better optimized way to write this code that speeds up the process significantly?
// I'm thinking the || operator is somehow quite slow.
// There's also likely a simpler logical solution eliminating mathematical validity of a chain before it must recursively reach >n
// And once you've eliminated a number, not revisiting it, etc.
// Not in the mood to explore further at this time