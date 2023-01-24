/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

const capitalize = s => [s.split('').map((char, i) => i % 2 == 0 ? char.toUpperCase() : char).join(''), s.split('').map((char,i) => i % 2 == 1 ? char.toUpperCase() : char).join('')]

/* I like doing things in one line when possible, but this isn't super readable so here it is refactored slightly

function capitalize(s){
    const even = s.split('').map((char, i) => i % 2 == 0 ? char.toUpperCase() : char).join('')
    const odd = s.split('').map((char, i) => i % 2 == 1 ? char.toUpperCase() : char).join('')
    return [even, odd];
}

*/