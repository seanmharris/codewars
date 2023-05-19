/*
vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.
All non-vowels including non alpha characters (spaces,commas etc.) should be included.
Examples:
vowelOne( "abceios" ) // "1001110"
vowelOne( "aeiou, abc" ) // "1111100100"
*/

function vowelOne(s){
    const vowels = 'aeiou'
    let res = ''
    for(let char of s) {
      if(vowels.includes(char.toLowerCase())) {
        res += '1'
      } else res += '0'
    }
    return res
  }