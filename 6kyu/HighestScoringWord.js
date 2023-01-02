/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(str){
    let words = str.split(' ');
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let scorePerWord = [];
    let score = 0;
    for (let i = 0; i < words.length; i++) {
      score = 0;
      for (let j = 0; j < words[i].length; j++){
        score += letters.indexOf(words[i][j])+1;
      }
      scorePerWord.push(score);
      
    }
    console.log(scorePerWord);
    return words[scorePerWord.indexOf(Math.max(...scorePerWord))]
  }