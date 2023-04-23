/*
When provided with a String, capitalize all vowels
For example:
Input : "Hello World!"
Output : "HEllO WOrld!"
Note: Y is not a vowel in this kata.
*/

function swap (string) {
    let res = ''
    let vowels = 'aeiou'
    for (let char of string) {
      if (vowels.includes(char)) {
        res += char.toUpperCase()
      } else res += char
    }
    return res
  }