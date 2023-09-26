/*
Write a function that accepts msg string and returns local tops of string from the highest to the lowest.
The string's tops are from displaying the string in the below way:
                                                      3
                              p                     2   4
            g               o   q                 1
  b       f   h           n       r             z
a   c   e       i       m          s          y
      d           j   l             t       x
                    k                 u   w
                                        v
The next top is always 1 character higher than the previous one. For the above example, the solution for the abcdefghijklmnopqrstuvwxyz1234 input string is 3pgb.
When the msg string is empty, return an empty string.
The input strings may be very long. Make sure your solution has good performance.
*/

function tops(msg) {
    if (!msg) return ''
    let next = 1,
        res = []
    for (let i = 1; i < msg.length; i += next) {
      res.push(msg[i])
      next += 4
    }
    return res.reverse().join('')
  }
  
  
  // in a given string: n == 'neutral', * == middle, 'T' == top, 'b' == 'bottom'
  // first 10 peaks:
  // nTnbn*T*n*b*n**T**n**b**n***T***n***b***n****T****n****b****n*****T*****n*****b*****n******T******n******b******n*******T*******n*******b*******n********T********n********b********n*********T
  // pattern finding:
  // indices where you find 'tops': 1   6   15   28   45   66   91   120   153    190
  //                                  v   v    v    v    v    v    v     v      v
  // differences between  indices :   5   9    13   17   21   25   29    33     37
  //                                    v    v    v    v    v    v     v     v
  // differences of differences :       4    4    4    4    4    4     4     4
  // add an additional 4 to the leap each iteration
  
  