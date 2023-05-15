/*
Move every letter in the provided string forward 10 letters through the alphabet.
If it goes past 'z', start again at 'a'.
Input will be a string with length > 0.
*/

function moveTen(s){
    const a = 'abcdefghijklmnopqrstuvwxyz', arr = [...s];
    return arr.map(x => a[(a.indexOf(x) + 10) % 26]).join('') 
  }