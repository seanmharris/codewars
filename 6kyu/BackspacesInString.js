/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

function cleanString(s) {
    let arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '#') {
        arr[i] = ''
        arr[i-1] = ''
        let temp = arr.join('')
        arr = temp.split('')
        i -= 2
      }
    }
    return arr.join('')
  }