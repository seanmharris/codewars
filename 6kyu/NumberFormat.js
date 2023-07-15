/*
Format any integer provided into a string with "," (commas) in the correct places.
Example:
For n = 100000 the function should return '100,000';
For n = 5678545 the function should return '5,678,545';
for n = -420902 the function should return '-420,902'.
*/

function numberFormat (n) {
    let neg = n < 0
    let str = neg ? n.toString().slice(1) : n.toString(),
        l = str.length, 
        res = ''
    for (let i = l - 1; i >= 0; i--) {
      res += str[i]
      if ((l - i) % 3 === 0 && i) res += ','
    }
    res = [...res].reverse().join('')
    return neg ? `-${res}` : res 
  }
  