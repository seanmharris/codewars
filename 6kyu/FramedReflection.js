/*
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:
'Hello World'
would give:

*********
* olleH *
* dlroW *
*********

Words in your solution should be left-aligned.
*/

function mirror(text){
    let words = text.split(' '),
        max = Math.max(...words.map(word => word.length)),
        border = '*'.repeat(max + 4),
        left = '* ',
        right = ' *',
        reversed = words.map(a => left + [...a].reverse().join('').padEnd(max, ' ') + right)
    return [border, ...reversed, border].join('\n')
  }