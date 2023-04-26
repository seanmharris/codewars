/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.
Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

function checkThreeAndTwo(array) {
    const as = array.filter(str => str === 'a').length
    const bs = array.filter(str => str === 'b').length
    const cs = array.filter(str => str === 'c').length
    const valida = (as === 3 || as === 2 || as === 0)
    const validb = (bs === 3 || bs === 2 || bs === 0)
    const validc = (cs === 3 || cs === 2 || cs === 0)
    return valida && validb && validc
  }