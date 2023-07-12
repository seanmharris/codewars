/*
We want to sort the vowels in a special format. Write a function which takes a input string s and return a string in the following way:
   
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|

Notes:
List all the Vowels on the right side of |
List every character except Vowels on the left side of |
for the purpose of this kata, the vowels are : a e i o u
Return every character in its original case
Each line is seperated with \n
Invalid input ( undefined / null / integer ) should return an empty string
*/

function sortVowels(s){
    if (!s || s*0 === 0) return ''
    return [...s].map(a => 'aeiouAEIOU'.includes(a) ? `|${a}` : `${a}|`).join('\n')
  }