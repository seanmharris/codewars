/*
Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.
This should only work if the number has 4 digits or more. If not, return "Number is too small".
Example
lowestProduct("123456789") --> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small"
*/

function lowestProduct(input) { 
    if (input.length < 4) return 'Number is too small'
    const getProd = str => [...str].reduce((a,b) => a * +b, 1)
    let prods = []
    for (let i = 0; i <= input.length - 4; i++) {
      prods.push(getProd(input.slice(i, i + 4)))
    }
    return Math.min(...prods)
  }
  
// Alternate version seems more optimized as we aren't slicing & reducing at each element. Only looping through the input once.
  function lowestProduct(input) { 
    if (input.length < 4) return 'Number is too small'
    let cur = 1,
        min = Infinity,
        nums = [...input].map(x => +x);
    nums.forEach((num, i, arr) => {
      if (i > 3) {
        cur /= arr[i-4]
      }
      cur *= arr[i]
      if (i >= 3 && cur < min)  min = cur
    })
    return min
  }

// could also do without even putting items in an array or using methods, just with a simple for loop, but I don't think it actually optimizes much. Maybe a bit of memory.