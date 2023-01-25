/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

function rgb(r, g, b){
    if (r < 0) r = 0
    if (g < 0) g = 0
    if (b < 0) b = 0
    if (r > 255) r = 255
    if (g > 255) g = 255
    if (b > 255) b = 255
    r = r > 9 ? r.toString(16) : `0${r}`
    g = g > 9 ? g.toString(16) : `0${g}`
    b = b > 9 ? b.toString(16) : `0${b}`
    return (r.padStart(2,'0') + g.padStart(2,'0') + b.padStart(2,'0')).toUpperCase()
  }