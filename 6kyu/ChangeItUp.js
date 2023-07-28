/*
Create a function that takes a string as a parameter and does the following, in this order:
Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note:
the alphabet should wrap around, so Z becomes A
in this kata, y isn't considered as a vowel.
So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/

function changer(str) { 
    const postAlpha = ['b','c','d','E','f','g','h','I','j','k','l','m','n','O','p','q','r','s','t','U','v','w','x','y','z','A']
    return  [...str.toUpperCase()].map(char => postAlpha[char.charCodeAt() - 65]).reduce((a,b,i) => a + (b || str[i]), '')
  }