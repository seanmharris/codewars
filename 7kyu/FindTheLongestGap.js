/*
A binary gap within a positive number num is any sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of num.
For example:
9 has binary representation 1001 and contains a binary gap of length 2.
529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
20 has binary representation 10100 and contains one binary gap of length 1.
15 has binary representation 1111 and has 0 binary gaps.
Write function gap(num) that,  given a positive num,  returns the length of its longest binary gap.
The function should return 0 if num doesn't contain a binary gap.
*/

const gap = num => Math.max(...num.toString(2).split('1').filter((z,i,x) => z.includes('0') && i !== x.length - 1).map(a => a.length), 0)

// is this too much method chaining?
// convert num to binary string, split said string with '1' as separator to isolate '0'+ groups in an array...
// then filter them to remove empty strings & edge case of last grouping being largest (needs to be a gap between 1s)...
// map the remaining groups of '0's to their length, return the max as this represents the largest gap, or 0 if no gaps (Math.max([]) is -Infinity)