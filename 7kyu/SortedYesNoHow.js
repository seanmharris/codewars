/*
Complete the method which accepts an array of integers, and returns one of the following:
"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
    let truths = array.map((el, ind) => {
      return el >= array[ind+1]
    })
    truths.pop()
    return truths.every(value => value == true) ? 'yes, descending' : truths.every(value => value == false) ? 'yes, ascending' : 'no'
  }
  