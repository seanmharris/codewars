/*
Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile.
Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.
Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number.
Subarrays should be in the same order as the first occurence of the number they contain:
group([3, 2, 6, 2, 1, 3])
>>> [[3, 3], [2, 2], [6], [1]]
Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned.
*/

function group(arr) {
    // declare variables: counts object (empty to start)
    // and res, our eventual return variable (initialized as the unique numbers in order via a set, mapped to single element subarrays)
    let counts = {},
        res = [...new Set(arr)].map(num => [num])
    // populate counts from input arr. if already seen, increment the value, else set value to 1
    for (let num of arr) {
      counts[num] ? counts[num]++ : counts[num] = 1
    }
    // loop through subarrays of res, and add to them while the count value is greater than the subarray length
    for (let subarr of res) {
      while(counts[subarr[0]] > subarr.length) subarr.push(subarr[0])
    }
    
    return res
  }