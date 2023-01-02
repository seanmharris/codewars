/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

function persistence(num) {
    let sNum = String(num).split('')
    let digits = sNum.map(Number)
    let product = 1
    let pStrLen = digits.length
    let chances = 0
    while(pStrLen !== 1){
      for (let i = 0; i < digits.length; i++){
        product *= digits[i]
      }
      pStrLen = String(product).length
      sNum = String(product).split('')
      digits = sNum.map(Number)
      product = 1
      chances ++
    }
    return chances
  }