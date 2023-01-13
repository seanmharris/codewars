/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, 
they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message){
    let chars = message.split('')
    let codes = chars.map(char => char.charCodeAt(0)).map(code => {
      if ((code > 64 && code < 78) || (code > 96 && code < 110)){
        return code += 13
      } else if ((code > 77 && code < 91) || (code > 109 && code < 123)) {
        return code -= 13
      } else return code
    })    
    return String.fromCharCode(...codes)
  }