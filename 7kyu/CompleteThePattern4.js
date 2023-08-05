/*
Task: You have to write a function pattern which creates the following pattern upto n number of rows.
If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
Examples:
pattern(4):
1234
234
34
4
pattern(6):
123456
23456
3456
456
56
6
Note: There are no blank spaces
*/

function pattern(n){
    let res = '',
        cur = 1,
        curr = cur
    while (cur <= n) {
      curr = cur
      while (curr <= n) {
        res += curr.toString()
        curr++
      }
      res += '\n'
      cur++
    }
    return res.slice(0, -1)
  }