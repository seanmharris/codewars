/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
    const caps = text.toUpperCase()
    let res = ''
    const string = caps.split('').filter((char, ind) => caps.charCodeAt(ind) < 91 && caps.charCodeAt(ind) > 64).join('')
    if(!string) return res
    for (let i = 0; i < string.length-1; i++) {
      res += `${string.charCodeAt(i)-64} `
    }
    res += `${string.charCodeAt(string.length - 1)-64}`
    return res
  }