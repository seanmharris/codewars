/*
Create a function, called removeVowels (or remove_vowels), that takes a string argument
and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").
removeVowels("drake") // => "drk"
removeVowels("aeiou") // => ""
*/

const removeVowels = str => {
    let res = ''
    const vowels = 'aeiou'
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        continue;
      }
      res += str[i];
    }
    return res
  }