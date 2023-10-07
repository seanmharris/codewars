/*
Substitute two equal letters by the next letter of the alphabet (two letters convert to one):
"aa" => "b", "bb" => "c", .. "zz" => "a".
The equal letters do not have to be adjacent.
Repeat this operation until there are no possible substitutions left.
Return a string.
Example:
let str = "zzzab"
    str = "azab"
    str = "bzb"
    str = "cz"
return "cz"
Notes
The order of letters in the result is not important.
The letters "zz" transform into "a".
There will only be lowercase letters.
*/

function lastSurvivors(str) {
    let dict = {},
        alpha = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < str.length; i++) {
      dict[str[i]] ? dict[str[i]]++ : dict[str[i]] = 1
    }
    for (let char of Object.keys(dict)) {
      let next = alpha[(alpha.indexOf(char) + 1) % 26]
      while(dict[char] >= 2) {
        dict[char] -= 2
        dict[next] = dict[next] ? dict[next] + 1 : 1
      }
    }  
    let res = Object.entries(dict).map(([letter, count]) => count ? letter.repeat(count) : '').join('')
    return Object.values(dict).every(val => val <= 1) ? res : lastSurvivors(res)
  }
  
  