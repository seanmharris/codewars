/*
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.
Note: the input will not be empty.
Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/

function calculate(str) {
    str = str.replaceAll('plus', '+')
    str = str.replaceAll('minus','-')
    return String(eval(str))
  }