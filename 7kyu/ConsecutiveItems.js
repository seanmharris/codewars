/*
You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b
appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).
It is guaranteed that a and b are both present in arr.
*/

function consecutive(arr, a, b) {
    return Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1
  }

  // maybe slightly faster, thinking O(n) + O(2) vs. O(2n) + O(1) above? Both ultimately O(n) 

  function consecutive(arr, a, b) {
    let aidx = arr.indexOf(a)
    return arr[aidx - 1] === b || arr[aidx + 1] === b
  }