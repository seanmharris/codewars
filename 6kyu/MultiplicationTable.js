/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

function multiplicationTable(size) {
    let res = new Array(size)
    let counter = 1
    for (let i = 0; i < size; i++) {
      res[i] = new Array(size)
      for (let j = 0; j < size; j++) {
        res[i][j] = (i+1)*(j+1)
      }
    }
    return res
  }
  