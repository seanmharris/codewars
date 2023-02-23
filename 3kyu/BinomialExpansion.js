/*
The purpose of this kata is to write a program that can do some algebra.
Write a function expand that takes in an expression with a single, one character variable, and expands it. 
The expression is in the form (ax+b)^n where a and b are integers which may be positive or negative, x is any single character variable, and n is a natural number.
If a = 1, no coefficient will be placed in front of the variable. If a = -1, a "-" will be placed in front of the variable.
The expanded form should be returned as a string in the form ax^b+cx^d+ex^f... where a, c, and e are the coefficients of the term, x is the original one character 
variable that was passed in the original expression and b, d, and f, are the powers that x is being raised to in each term and are in decreasing order.
If the coefficient of a term is zero, the term should not be included. If the coefficient of a term is one, the coefficient should not be included.
If the coefficient of a term is -1, only the "-" should be included. If the power of the term is 0, only the coefficient should be included. 
If the power of the term is 1, the caret and power should be excluded.
Examples:
expand("(x+1)^2");      // returns "x^2+2x+1"
expand("(p-1)^3");      // returns "p^3-3p^2+3p-1"
expand("(2f+4)^6");     // returns "64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096"
expand("(-2a-4)^0");    // returns "1"
expand("(-12t+43)^2");  // returns "144t^2-1032t+1849"
expand("(r+0)^203");    // returns "r^203"
expand("(-x-1)^2");     // returns "x^2+2x+1"
*/
function expand(expr) {
    let arr = []
    const n = +expr.slice(expr.indexOf('^')+1)
    const xind = expr.search(/[a-z]/g)
    const x = expr[xind]
    const a = expr.slice(1, xind) == '-' ? -1 : +expr.slice(1,xind) || 1
    const b = +expr.slice(xind+1, expr.indexOf(')'))
    if (n == 0) return '1'
    if (n == 1) return expr.slice(1, expr.indexOf('^')-1)
    if (b == 0) return `${Math.pow(a,n)}${x}^${n}`
    let pascal = {
      '2' : [1,2,1],
      '3' : [1,3,3,1],
      '4' : [1,4,6,4,1],
      '5' : [1,5,10,10,5,1],
      '6' : [1,6,15,20,15,6,1],
      '7' : [1,7,21,35,35,21,7,1],
      '8' : [1,8,28,56,70,56,28,8,1],
      '9' : [1,9,36,84,126,126,84,36,9,1],
      '10' : [1,10,45,120,210,252,210,120,45,10,1],
      '11' : [1,11,55,165,330,462,462,330,165,55,11,1],
      '12' : [1,12,66,220,495,792,924,792,495,220,66,12,1],
      '13' : [1,13,78,286,715,1287,1716,1716,1287,715,286,78,13,1],
      '14' : [1,14,91,364,1001,2002,3003,3432,3003,2002,1001,364,91,14,1],
      '15' : [1,15,105,455,1365,3003,5005,6435,6435,5005,3003,1365,455,105,15,1],
    };
    const terms = n + 1
    for (let i = 0; i < terms; i++) {
      let apow = n-i
      let coef = pascal[n][i]*Math.pow(b,i)*Math.pow(a,n-i)
      if (i > 0) arr.push(Math.sign(coef) == 1 ? '+' : '-')
      arr.push(`${Math.abs(coef) > 1 ? coef : ''}${apow > 0 ? x : ''}${apow > 1 ? '^'+apow : ''}`)
    }
    if (a == -1 && n % 2 !== 0) {
      arr.unshift('-')
    }
    return Math.abs(b) == 1 ? arr.join('').replaceAll('--','-')+'1' : arr.join('').replaceAll('--','-')
  }