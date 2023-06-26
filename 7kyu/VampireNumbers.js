/*
Vampire Numbers
Our loose definition of Vampire Numbers can be described as follows:
6 * 21 = 126
# 6 and 21 would be valid 'fangs' for a vampire number as the 
# digits 6, 1, and 2 are present in both the product and multiplicands

10 * 11 = 110
# 110 is not a vampire number since there are three 1's in the
# multiplicands, but only two 1's in the product
Create a function that can receive two 'fangs' and determine if the product of the
two is a valid vampire number.
*/

var vampire_test = function(a, b){
    const makeArr = (num, num2) => num2 === undefined ? [...String(num)] : [...String(num), ...String(num2)]
    const shuffle = arr => arr.sort().join('')
    
    return shuffle(makeArr(a, b)) === shuffle(makeArr(a*b))
  }