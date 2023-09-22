/*
In this kata you will be given a positive integer val and you have to create the function nextPal that will output the smallest palindrome number higher than val.
Examples:
nextPal(11) == 22
nextPal(188) == 191
nextPal(191) == 202
nextPal(2541) == 2552
You will be receiving values higher than 10, all valid.
*/

function nextPal(val) {
    const isPal = num => +String(num).split('').reverse().join('') === num
    while (!isPal(val + 1)) val++
    return val + 1
  }