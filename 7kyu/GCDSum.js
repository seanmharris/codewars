/*
Given the sum and gcd of two numbers, return those two numbers in ascending order.
If the numbers do not exist, return -1, (or NULL in C, tuple (-1,-1) in C#, pair (-1,-1) in C++,None in Rust, array {-1,-1}  in Java and Golang).
For example: 
Given sum = 12 and gcd = 4...
solve(12,4) = [4,8]. The two numbers 4 and 8 sum to 12 and have a gcd of 4.
solve(12,5) = -1. No two numbers exist that sum to 12 and have gcd of 5.
solve(10,2) = [2,8]. Note that [4,6] is also a possibility but we pick the one with the lower first element: 2 < 4, so we take [2,8].
*/

function solve(s,g){
    const d = s - g;
    return d % g ? -1 : s / g < 2 ? [d,g] : [g,d]
  }

// simplified beyond what I initially realized: no need to check s / g < 2
// I was trying to determine which order to put the elements in, but since g is the greatest common DENOMINATOR in a valid solution, d will never be larger than g
// also, I can still have d declared, but it's not necessary. if(s % g) will also invalidate the solution, so the final simplified can be:

const altSolve = (s,g) => s % g ? -1 : [g, s - g]