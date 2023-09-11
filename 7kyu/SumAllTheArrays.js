/*
You are given an array of values.
Sum every number value in the array, and any nested arrays (to any depth).
Ignore all other types of values.
*/

const arraySum = arr => arr.flat(Infinity).reduce((a,b) => a + (+b ? +b : 0), 0)