/*
You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).
For example:
"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
As you can see, the letter c is shown only once, but with 2 asterisks.
The return string should include only the letters (not the dashes, spaces, apostrophes, etc).
There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.
Note that the return string must list the letters in order of their first appearance in the original string.
More examples:
"Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
"Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
*/

function getStrings(city){
    let low = [...city.toLowerCase()].filter(char => char !== ' ').join(''), res = '', map = {};
    
    for (let char of low) {
      if (map[char]) {
        map[char]++
      } else map[char] = 1
    }
    
    for (let letter in map) {
      res+= `${letter}:${'*'.repeat(map[letter])},`
    }
    return res.slice(0, res.length - 1)
  }