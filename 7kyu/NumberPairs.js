/*
In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.
Note: Both arrays have the same dimensions.
Example:
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
*/

function getLargerNumbers(a, b) {
    for (let i = 0; i < a.length; i++) {
      a[i] = Math.max(a[i], b[i])
    }
    return a
  }

// Better one line solution using Array.prototype.map() over one input array. As a bonus, map returns a new array so no mutation of input.

const getLargerNumbersUsingMap = (c,d) => c.map((n,i) => Math.max(n, d[i]));