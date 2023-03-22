/*
Write a function reverse which reverses an array.
The dedicated builtin(s) functionalities are deactivated!
*/

// no use of array.reverse()
// let's use a two pointer & destructuring to swap the elements!

const reverse = array => {
    let r = array.length - 1
    for (let l = 0; l < r; l++) {
      [array[l], array[r]] = [array[r], array[l]]
      r--
    }
    return array
  } 