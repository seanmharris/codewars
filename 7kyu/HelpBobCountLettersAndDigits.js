/*
Bob is a lazy man.
He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.
Example:
"hel2!lo" --> 6
"wicked .. !" --> 6
"!?..A" --> 1
*/

function countLettersAndDigits(input) {
    let count = 0;
    const valid = 'abcdefghijklmnopqrstuvwxyz0123456789'
    for (let char of input) {
      if (valid.includes(char.toLowerCase())) count++
    }
    return count
  }