/*
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

function replace(s){
    let vowels = ['a','A','e','E','i','I','o','O','u','U']
    let res = ''
    for (let char of s) {
      if (vowels.includes(char)) {
        res += '!'
      } else res += char
    }
    return res
  }