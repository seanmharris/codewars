/*
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can
spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
*/

function bingo(a) {
    let b = 2, i = 9, n = 14, g = 7, o = 15;
    return a.includes(b) && a.includes(i) && a.includes(n) && a.includes(g) && a.includes(o) ? "WIN" : "LOSE"
  }