/*
Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:
[sign]a b/c
where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c.
Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).
If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only.
In both of these cases, the resulting string must not contain any spaces.
Division by zero should raise an error (preferably, the standard zero division error of your language).
Value ranges
-10 000 000 < x < 10 000 000
-10 000 000 < y < 10 000 000
Examples
Input: 42/9, expected result: 4 2/3.
Input: 6/3, expedted result: 2.
Input: 4/6, expected result: 2/3.
Input: 0/18891, expected result: 0.
Input: -10/7, expected result: -1 3/7.
Inputs 0/0 or 3/0 must raise a zero division error.
*/

function mixedFraction(s){
    let [x,y] = s.split('/')
    if (y == 0) throw new RangeError('cannot divide by 0')
    if (x == 0) return '0'
    let neg = (x > 0 && y < 0) || (y > 0 && x < 0)
    x = Math.abs(x)
    y = Math.abs(y)
    
    function reduce(n,d) {
      const gcd = (a,b) => b ? gcd(b, a%b) : a;
      const denom = gcd(n,d);
      return `${n/denom}/${d/denom}`;
    }
    
    let int = Math.floor(x/y);
    if (x / y == int) return neg ? '-' + int : '' + int
    let frac = reduce(x % y, y)
    
    let str = int ? `${int} ${frac}` : frac
    return neg ? '-' + str : str
  }