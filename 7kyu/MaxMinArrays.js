/*
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values
so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.
For example:
solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.
*/

function solve(arr){
    let res = []
    arr.sort((a,b) => a - b)
    while(arr.length) {
      res.push(arr.pop())
      if(arr.length) res.push(arr.shift())
    }
    return res
  };