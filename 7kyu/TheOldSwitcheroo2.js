/*
Write the function:
function encode(str)
that takes in a string str and replaces all the letters with their respective positions in the English alphabet.
encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'
String are case sensitive.
// Bonus point if you don't use toLowerCase()
*/

function encode(str) {
    let pos = {
      'a' : 1,
      'A' : 1,
      'b' : 2,
      'B' : 2,
      'c' : 3,
      'C' : 3,
      'd' : 4,
      'D' : 4,
      'e' : 5,
      'E' : 5,
      'f' : 6,
      'F' : 6,
      'g' : 7,
      'G' : 7,
      'h' : 8,
      'H' : 8,
      'i' : 9,
      'I' : 9,
      'j' : 10,
      'J' : 10,
      'k' : 11,
      'K' : 11,
      'l' : 12,
      'L' : 12,
      'm' : 13,
      'M' : 13,
      'n' : 14,
      'N' : 14,
      'o' : 15,
      'O' : 15,
      'p' : 16,
      'P' : 16,
      'q' : 17,
      'Q' : 17,
      'r' : 18,
      'R' : 18,
      's' : 19,
      'S' : 19,
      't' : 20,
      'T' : 20,
      'u' : 21,
      'U' : 21,
      'v' : 22,
      'V' : 22,
      'w' : 23,
      'W' : 23,
      'x' : 24,
      'X' : 24,
      'y' : 25,
      'Y' : 25,
      'z' : 26,
      'Z' : 26
    },
        res = ''
    for (let char of str) {
      res += pos[char] ? pos[char] : char
    }
    return res
  }