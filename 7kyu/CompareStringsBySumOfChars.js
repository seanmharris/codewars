/*
Compare two strings by comparing the sum of their values (ASCII character code).
For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.
Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
*/

function compare(s1, s2) {
    let score1 = 0, score2 = 0;
    if (s1) {
      for (let i = 0; i < s1.length; i++) {
        let code = s1[i].toUpperCase().charCodeAt()
        if (code < 65 || code > 90) {
          score1 = 0;
          break;
        } else {
          score1 += code;
        }
      }
    }
    if (s2) {
      for (let i = 0; i < s2.length; i++) {
        let code = s2[i].toUpperCase().charCodeAt()
        if (code < 65 || code > 90) {
          score2 = 0;
          break;
        } else {
          score2 += code;
        }
      }
    }
    return score1 === score2
  }