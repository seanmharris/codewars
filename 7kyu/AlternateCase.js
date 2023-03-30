/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper.
E.g: Hello World -> hELLO wORLD
*/

function alternateCase(s) {
    let res = ''
    for (let char of s) {
      if (char === char.toLowerCase()) {
        res += char.toUpperCase()
      } else res += char.toLowerCase()
    }
    return res
  }