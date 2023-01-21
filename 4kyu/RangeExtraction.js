/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
Courtesy of rosettacode.org
*/

function solution(list){
    let answer = ''
    let rangeLengths = []
    for (let i = 0; i < list.length; i+= rangeLengths[rangeLengths.length-1]){
      let consecCount = 1
      for (let j = i + 1; j < list.length; j++) {
        if (list[j] == list[i] + j-i) {
          consecCount++
        } else break
      } 
      rangeLengths.push(consecCount)
      if (rangeLengths.reduce((a,b) => a+b, 0) == list.length) break
    }
    console.log(list)
    console.log(rangeLengths)
    let rangeIndex = 0
    for (let i = 0; i < list.length; i++) {
      if (rangeLengths[rangeIndex] > 2) {
        answer += `${list[i]}-${list[i + rangeLengths[rangeIndex]-1]},`
        i+= rangeLengths[rangeIndex] -1
        rangeIndex++
      } else if (rangeLengths[rangeIndex] == 2) {
          answer += `${list[i]},${list[i+1]},`
          i++
          rangeIndex++
      } else {
          answer += `${list[i]},`
          rangeIndex++
      }
    }
    return answer.slice(0, answer.length-1)
  }