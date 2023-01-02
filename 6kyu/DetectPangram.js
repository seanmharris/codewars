/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string){
    let lower = string.toLowerCase()
    if (lower.includes('a') && lower.includes('b') && lower.includes('c') && lower.includes('d') && lower.includes('e') && lower.includes('f') && lower.includes('g') && lower.includes('h') && lower.includes('i') && lower.includes('j') && lower.includes('k') && lower.includes('l') && lower.includes('m') && lower.includes('n') && lower.includes('o') && lower.includes('p') && lower.includes('q') && lower.includes('r') && lower.includes('s') && lower.includes('t') && lower.includes('u') && lower.includes('v') && lower.includes('w') && lower.includes('x') && lower.includes('y') && lower.includes('z')) {
      return true
    } else return false
  }