/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
    let arr = str.split(' ')
    return arr.map(word => {
      if(!word.includes('!') && !word.includes('?')) {
        return word.slice(1) + word[0] + 'ay'
        } else return word
    }).join(' ')
  }