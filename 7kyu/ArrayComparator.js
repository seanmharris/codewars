/*
You have two arrays in this kata, every array contains unique elements only. 
Calculate the number of elements in the first array which are also present in the second array.
*/

function matchArrays(v,r){
    let x = 0
    for (let el of v) {
      if (r.includes(el)) x++
    }
    return x
  }