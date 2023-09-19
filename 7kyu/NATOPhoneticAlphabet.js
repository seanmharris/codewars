/*
Complete the function nato that takes a word in parameter and returns a string that spells the word using the NATO phonetic alphabet.
There should be a space between each word in the returned string, and the first letter of each word should be capitalized.
This kata already has a dictionary typed out for you.
Examples
"hi"      -->  "Hotel India"
"abc"     -->  "Alpha Bravo Charlie"
"babble"  -->  "Bravo Alpha Bravo Bravo Lima Echo"
"Banana"  -->  "Bravo Alpha November Alpha November Alpha"
*/


// the object LETTERS is preloaded
// LETTERS['B'] === 'Bravo', etc.
const nato = word => [...word].map(char => LETTERS[char.toUpperCase()]).join(' ')