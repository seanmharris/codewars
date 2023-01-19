/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, 
this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

This kata is part of the Simple Encryption Series:

Simple Encryption #1 - Alternating Split
Simple Encryption #2 - Index-Difference
Simple Encryption #3 - Turn The Bits Around
Simple Encryption #4 - Qwerty
Have fun coding it and please don't forget to vote and rank this kata! :-)
*/

function encrypt(text, n) {
    // Early return for specified edge cases
    if (n < 1 || !text) return text
    // Split text into an array
    let chars = text.split('')
    // Establish loop for n encryptions. Inside the loop will be the main functionality.
    for (let i = 0; i < n; i++) {
      let oddInd = chars.filter((e, ind) => ind % 2 == 1)
      let evenInd = chars.filter((e, ind) => ind % 2 == 0)
      chars = oddInd.concat(evenInd)
    }
    return chars.join('')
  }
  
  function decrypt(encryptedText, n) {
    // Early return for specified edge cases
    if (n < 1 || !encryptedText) return encryptedText
    // Split text into an array
    let chars = encryptedText.split('')
    // Establish loop for n decryptions. Inside the loop will be the main functionality.
    for (let i = 0; i < n; i++) {    
      // Establish separate arrays from first half of encryption (odd indices) and last half of encryption (even indices)
      let oddHalf = chars.slice(0, Math.floor(chars.length / 2))
      let evenHalf = chars.slice(Math.floor(chars.length / 2))
      // Declare variables which will handle control flow of alternating between the new arrays for re-assignment of elements in chars array
      let run = 0, even = 0, odd = 0
      // run is number of times we've pulled from one array or the other, also equals current index of chars array. increments once each loop
      // even & odd indicate # of times pulled from the respective array.
      while (run < evenHalf.length + oddHalf.length) {
        // if we've already pulled from even more times than odd, we pull from odd & increment it
        if (even > odd) {
          chars[run] = oddHalf[odd]
          odd++
        // else (pulled from each the same # of times) we prioritize pulling from & incrementing even
        } else {
          chars[run] = evenHalf[even]
          even++
        }
        run++
      }
    }
    return chars.join('')
  }