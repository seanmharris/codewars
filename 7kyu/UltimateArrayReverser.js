/*
Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.
Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
*/

const ultimateReverse = s => {
    let res = [],
        lens = s.map(word => word.length),
        str = s.map(x => [...x].reverse().join('')).reverse().join('')
    for (let i = 0, j = 0; i < s.length; i++) {
      res.push(str.slice(j, j + lens[i]))
      j += lens[i]
    }
    return res
  };