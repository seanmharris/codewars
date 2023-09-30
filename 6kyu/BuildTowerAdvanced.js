/*
Build Tower by the following given arguments:
number of floors (integer and always greater than 0)
block size (width, height) (integer pair and always greater than (0, 0))
Tower block unit is represented as *. Tower blocks of block size (2, 1) and (2, 3) would look like respectively:

  **
  **
  **
  **
for example, a tower of 3 floors with block size = (2, 3) looks like below
[
  '    **    ',
  '    **    ',
  '    **    ',
  '  ******  ',
  '  ******  ',
  '  ******  ',
  '**********',
  '**********',
  '**********'
]
and a tower of 6 floors with block size = (2, 1) looks like below
[
  '          **          ', 
  '        ******        ', 
  '      **********      ', 
  '    **************    ', 
  '  ******************  ', 
  '**********************'
]
Don't return a whole string containing line-endings but a list/array/vector of strings instead!
*/

function towerBuilder(f, [w,h]) {
    let res = [],
        str = '',
        cur = w,
        len = (f - 1) * (2 * w) + w
    for (let i = 0; i < f*h; i++) {
      if(!(i%h) && i > 0) cur += 2 * w
      str = '*'.repeat(cur)
      if(str.length < len) {
        str = (' '.repeat((len - str.length) / 2) + str).padEnd(len, ' ')
      }
      res.push(str)
    }
    return res
  }