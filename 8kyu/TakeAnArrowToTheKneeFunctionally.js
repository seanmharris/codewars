/*
Arrow style Functions
Come here to practice the Arrow style functions
Details
You will be given an array of numbers which can be used using the String.fromCharCode() (JS) method to convert the number to a character.
It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.
Examples
These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

/* Initial state of code : Complete this function...
var ArrowFunc = function(arr) {
    return arr.map( => ).join(''); 
  }
*/

var ArrowFunc = function(arr) {
    return arr.map(num => String.fromCharCode(num)).join('');
  }