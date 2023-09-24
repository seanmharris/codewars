/*
Ever been bowling? Short: You have to throw a bowl into 10 Pins arranged like this:
I I I I  # each Pin has a Number:    7 8 9 10
 I I I                                4 5 6
  I I                                  2 3
   I                                    1
You will get an Array with Numbers, e.g.: [3,5,9] and remove them from the field like this:
I I   I
 I   I
  I   
   I   
Return a string with the current field.
Note that:
String.prototype.replace() is not allowed!
You begin a new line with \n
Each Line must be 7 chars long
Fill the missing pins with a whitespace
*/

function bowlingPins(arr){
    let x = {
      1 : 'I',
      2 : 'I',
      3 : 'I',
      4 : 'I',
      5 : 'I',
      6 : 'I',
      7 : 'I',
      8 : 'I',
      9 : 'I',
      10 : 'I'
    }
    for (let downed of arr) {
      x[downed] = ' '
    }
    return `${x[7]} ${x[8]} ${x[9]} ${x[10]}\n ${x[4]} ${x[5]} ${x[6]} \n  ${x[2]} ${x[3]}  \n   ${x[1]}   `
  }