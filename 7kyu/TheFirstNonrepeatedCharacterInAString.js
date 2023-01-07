/*
You need to write a function, that returns the first non-repeated character in the given string.
If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, None in Python, '\0' in C.
You can assume, that the input string has always non-zero length.
Examples
"test"   returns "e"
"teeter" returns "r"
"trend"  returns "t" (all the characters are unique)
"aabbcc" returns null (all the characters are repeated)
*/

function firstNonRepeated(s) {
    for (let char of s) {
      if (s.indexOf(char) === s.lastIndexOf(char)) return char
    }
    return null
  }

/* count object / Map method
function firstNonRepeated(s) {
    let counts = {}
    for (let char of s) {
      counts[char] ? counts[char]++ : counts[char] = 1
    }
    for (let i = 0; i < s.length; i++) {
      if (counts[s[i]] === 1) return s[i]
    }
    return null
  }
*/