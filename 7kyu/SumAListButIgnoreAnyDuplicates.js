/*
Please write a function that sums a list, but ignores any duplicate items in the list.
For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

function sumNoDuplicates(numList) {
    let x = {}
    for (let num of numList) {
      x[num] >= 0 ? x[num] = 0 : x[num] = 1
    }
    let sum = 0
    for (let n in x) {
      if(x[n]) sum += +n
    }
    return sum
  }