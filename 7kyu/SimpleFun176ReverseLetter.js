/*
Task
Given a string str, reverse it and omit all non-alphabetic characters.
Example
For str = "krishan", the output should be "nahsirk".
For str = "ultr53o?n", the output should be "nortlu".
Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.
[output] a string
*/

function reverseLetter(str) {
    const arr = str.split('');
    let l = 0, r = str.length - 1;
    while (l < r) {
      arr[r] = str[l], arr[l] = str[r]
      l++
      r--
    }
    return arr.filter(char => {
        return /[a-z]/i.test(char)
    }).join('')
  }