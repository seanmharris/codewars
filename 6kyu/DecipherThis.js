/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
For each word:
the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces
Examples
decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

function decipherThis(str) {
    let arr = str.split(' ')
    let numbers = arr.map(word => String.fromCharCode(word.split('').filter(char => char.charCodeAt() >= 48 && char.charCodeAt() <= 57).join('')))
    let letters = arr.map(word => word.split('').filter(char => char.toUpperCase().charCodeAt() >= 65 && char.toUpperCase().charCodeAt() <= 90).join(''))
    return letters.map((word, idx) => word.length > 2 
      ? `${numbers[idx]}${word[word.length - 1]}${word.slice(1, word.length - 1)}${word[0]}` 
      : word.length == 0 ? numbers[idx]
      : word.length == 1 ? `${numbers[idx]}${word}`
      : `${numbers[idx]}${word[1]}${word[0]}`
      ).join(' ')
  }; 