/*
Given an array of numbers (in string format), you must return a string.
The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc.
You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.
All inputs will be valid.
*/

function switcher(x){
    let codes = x.map(code => {
      if (+code <= 26) {
        return (26 - code) * 2 + 71 + +code
      } else if (+code === 27) {
        return 33
      } else if (+code === 28) {
        return 63
      } else return 32
    })
  
    return String.fromCharCode(...codes)
  }