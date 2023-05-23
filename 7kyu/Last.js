/*
Find the last element of the given argument(s).
Examples:
last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4
In JavaScript a list will be an array, a string or the list of arguments.
*/

function last(...list){
    const last = list[list.length - 1], lastLast = last[last.length - 1]
    return lastLast || last
  }
