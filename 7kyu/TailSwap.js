/*
You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end).
The length of the strings, before and after the colon, are random.
Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.
Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
*/

function tailSwap(arr) {
    let spl = arr.map(str => str.split(':'))
    return [`${spl[0][0]}:${spl[1][1]}`, `${spl[1][0]}:${spl[0][1]}`]
  }