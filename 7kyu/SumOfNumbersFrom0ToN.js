/*
We want to generate a function that computes the series starting from 0 and ending until the given number.
Input => 6
Output => '0+1+2+3+4+5+6 = 21'
Input => -15
Output => '-15<0'
Input => 0
Output => '0=0'
*/

const SequenceSum = {
    showSequence : function(count){
    let sum = 0
    let str = '0'
    for (let i = 1; i <= count; i++) {
      sum += i
      str += `+${i}`
    }
    return count == 0 ? '0=0' : count < 0 ? `${count}<0`: `${str} = ${sum}`
    }
  }