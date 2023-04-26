/*
You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.
*/

function deepCount(a) {
    if (a.length === 0) return 0;
    
    let total = 0;
    
    a.forEach(el => {
      if (typeof el === 'object') {
        total += 1 + deepCount(el)
      } else total += 1;
    })
    
    return total
  }