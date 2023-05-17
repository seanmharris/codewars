/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
    let numZ = arr.filter(el => el === 0).length
    return arr.filter(el => el !== 0).concat(new Array(numZ).fill(0))
}

// Alternate solution, only 1 use of .filter()

function moveZeros(arr) {
  let newArr = arr.filter(el => el !== 0);
  return newArr.concat(new Array(arr.length - newArr.length).fill(0))
}