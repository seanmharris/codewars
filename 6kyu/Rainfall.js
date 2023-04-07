/*
data and data1 are two strings with rainfall records of a few cities for months from January to December.
The records of towns are separated by \n. The name of each town is followed by :.
data and towns can be seen in "Your Test Cases:".
Task:
function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.
Examples:
mean("London", data), 51.19(9999999999996) 
variance("London", data), 57.42(833333333374)
Notes:
if functions mean or variance have as parameter town a city which has no records return -1 or -1.0 (depending on the language)
Don't truncate or round: the tests will pass if abs(your_result - test_result) <= 1e-2 or abs((your_result - test_result) / test_result) <= 1e-6 depending on the language.
A ref: http://www.mathsisfun.com/data/standard-deviation.html
data and data1 (can be named d0 and d1 depending on the language; see "Sample Tests:") are adapted from: http://www.worldclimate.com
*/

function parse(input) {
    let arr = input.split('\n').map(data => data.split(':'))
    let secondArr = arr.map(dataPair => dataPair[1].split(','))
    let obj = {}
    let thirdArr = secondArr.map(cityYears => cityYears.map(monthsAmounts => monthsAmounts.split(' ')))
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i][0]] = thirdArr[i]
    }
    return obj
  }
  
  function mean(town, strng) {
    let data = parse(strng)[town]
    if (!data) return -1
    let sum = 0;
    data.forEach(amount => sum += +amount[1])
    return sum / data.length
  }
  
  function variance(town, strng) {
      let avg = mean(town, strng)
      let data = parse(strng)[town]
      if (!data) return -1
      let sum = 0
      data.forEach(amount => sum += ((+amount[1] - avg) ** 2))
      return sum / data.length
  }