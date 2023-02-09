/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, 
return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!
*/

function solve(s){
    const vowels = 'aeiou'
    let chain = 0
    let chains = []
    for (let i = 0; i < s.length; i++) {
      if(vowels.includes(s[i])) {
        chain++
      } else if (chain > 0) {
        chains.push(chain)
        chain = 0
      }
    }
    return Math.max(...chains)
  }