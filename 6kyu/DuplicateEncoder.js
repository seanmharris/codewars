/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once 
in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word){
    let arr = word.toLowerCase().split('')
    let chars = {}
    arr.forEach(char => {
      if (char in chars) {
        chars[char] ++
      } else chars[char] = 1
    })  
    return arr.map(char => {
      if (chars[char] > 1){
        return ')'
      } else return '('
    }).join('')
  }