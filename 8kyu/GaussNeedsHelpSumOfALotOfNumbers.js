/*
The problem: adding up all the whole numbers from 1 through a given number n.
Here's, an example:
f(n=100) // returns 5050 
It's your duty to verify that n is a valid positive integer number. If not, please, return false (None for Python, null for C#, 0 for COBOL).
Note: the goal of this kata is to invite you to think about some 'basic' mathematic formula and how you can do performance optimization on your code. 
Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can.
*/

const f = n => n % 1 === 0 && n > 0 ? n * (n+1) / 2 : false