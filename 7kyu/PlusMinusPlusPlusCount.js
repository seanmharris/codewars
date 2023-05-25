/*
Count how often sign changes in array.
result
number from 0 to ... . Empty array returns 0
example
const arr = [1, -3, -4, 0, 5];
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |
catchSignChange(arr) == 2;
*/

const catchSignChange = (arr, count = 0) => {
    if (!arr.length) return count
    let startNeg = arr[0] < 0;
    if (startNeg) {
      if(arr[1] >= 0) {
        return catchSignChange(arr.slice(1), count + 1)  
      } else return catchSignChange(arr.slice(1), count)
    } else {
      if(arr[1] < 0) {
        return catchSignChange(arr.slice(1), count + 1)
      } else return catchSignChange(arr.slice(1), count)
    } 
  }