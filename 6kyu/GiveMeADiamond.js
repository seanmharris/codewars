/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. 
Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. 
Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

function diamond(n){
    if (n % 2 == 0 || n < 0) return null
    let str = ''
    const mid = Math.ceil(n/2)
    const space = ' '
    const star = '*'
    for (let i = 1; i <= mid; i++) {
      str += `${space.repeat(Math.floor(n/2)-(i-1))}${star.repeat(2*i-1)}\n`
    }
    for (let i = mid + 1; i <= n; i++) {
      str += `${space.repeat((i-1) - Math.floor(n/2))}${star.repeat((n-i)*2 + 1)}\n`
    }
    return str
  }