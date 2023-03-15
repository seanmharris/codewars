/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
Return as a number.
*/

function divCon(x){
    let numSum = 0, strSum = 0;
    for (let item of x) {
      if (typeof item === 'string') {
        strSum += +item
      } else numSum += item
    }
    return numSum - strSum
  }