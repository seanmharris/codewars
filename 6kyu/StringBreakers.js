/*
I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces.
If there are leftover characters, include those as well.
Example: 
N = 5;
String = "This is an example string";
Return value:
Thisi
sanex
ample
strin
g
Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'
*/

function stringBreakers(n, string) {
    let str = string.split(' ').join(''),
        res = [];
    
    for (let i = 0; i < str.length; i+= n) {
      res.push(str.slice(i, i+n))
    }
    
    return res.join('\n')
  }