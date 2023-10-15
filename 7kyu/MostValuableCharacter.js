/*
In this Kata, you will be given a string and your task is to return the most valuable character.
The value of a character is the difference between the index of its last occurrence and the index of its first occurrence.
Return the character that has the highest value. If there is a tie, return the alphabetically lowest character.
All inputs will be lower case.
For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'
*/

function solve(st) {
    let uniques = Array.from(new Set([...st])),
        scores = uniques.map(char => st.lastIndexOf(char) - st.indexOf(char)),
        top = Math.max(...scores),
    return uniques.map((x,i) => [x,scores[i]]).filter(([_, score]) => score === top).sort((a,b) => a[0].localeCompare(b[0]))[0][0]
  }