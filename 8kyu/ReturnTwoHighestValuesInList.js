/*
In this kata, your job is to return the two distinct highest values in a list.
If there are less than 2 unique values, return as many of them, as possible.
The result should also be ordered from highest to lowest.
Examples:
[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/

function twoHighest(arr) {
    let uniques = Array.from(new Set(arr)).sort((a,b) => a - b), res = []
    while(uniques.length && res.length < 2) {
      res.push(uniques.pop())
    }
    return res
  }