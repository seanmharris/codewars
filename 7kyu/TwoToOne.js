/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
    let joint = s1 + s2;
    let array = []
    for (let i = 0; i < joint.length; i++) {
      if (!array.includes(joint[i])) {
        array.push(joint[i])
        }
    }
    let sortedArray = array.sort();
    return sortedArray.join('')
  }