/*
Write a function insertDash(num) that will insert dashes ('-') between each two odd digits in num.
For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.
Note that the number will always be non-negative (>= 0).
*/

const insertDash = num => [...String(num)].reduce((a,b) => +a[a.length - 1] % 2 && +b % 2 ? `${a}-${b}` : a + b)