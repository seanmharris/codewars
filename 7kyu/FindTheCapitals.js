/*
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

var capitals = function (word) {
	let indices = [];
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) < 91) indices.push(i)
  }
  return indices
};