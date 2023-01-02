/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
Go challenge Build Tower Advanced once you have finished this :)
*/

function towerBuilder(nFloors) {
    let tower = []
    for (let i = 1; i <= nFloors; i++) {
      let spaces = nFloors - i
      let currentString = ''
      for (let j = 1; j <= spaces; j++) {
        currentString += ' '
      }
      currentString += '*'
      for (let k = 1; k < i; k++) {
        currentString += '**'
      }
      for (let l = 1; l <= spaces; l++) {
        currentString += ' '
      }
      tower.push(currentString)
    }
    return tower
  }