/*
All Star Code Challenge #16
Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.
noRepeat("aabbccdde") // => "e"
noRepeat("wxyz") // => "w"
noRepeat("testing") // => "e"
Note: ONLY letters from the english alphabet will be used as input There will ALWAYS be at least one non-repeating letter in the input string
*/

function noRepeat(str) {  
    let counts = {}
    for (let char of str) {
      counts[char] ? counts[char]++ : counts[char] = 1
    }
    for (let char of str) {
      if (counts[char] === 1) return char
    }
  }

  // this function feels incomplete without a default return & can return undefined in certain cases, 
  // but I didn't bother to specifically account for it because the prompt specifically states that there
  // will ALWAYS be at least one non-repeating letter in the input, so with that constraint we are guaranteed to return what we want.