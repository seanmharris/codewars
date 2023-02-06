/*
The drawing below gives an idea of how to cut a given "true" rectangle into 
squares ("true" rectangle meaning that the two dimensions are different).
3 x 5 rectangle - square sizes:

        2x2
 _ _ _ _ _ 
|_ _ _|_ _|
|_ _ _|_ _|
|_ _ _|_|_|
3x3   1x1, 1x1

Can you translate this drawing into an algorithm?

You will be given two dimensions:

a positive integer length
a positive integer width

You will return an array with the size of each of the squares.

Examples in general form:

  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]
  

Notes:
lng == wdth as a starting case would be an entirely different problem and 
the drawing is planned to be interpreted with lng != wdth.
When the initial parameters are so that lng == wdth, the solution [lng] would 
be the most obvious but not in the spirit of this kata so, in that case, return null
*/

function sqInRect(lng, wdth){
    if (lng === wdth) return null
    let area = lng * wdth
    let res = []
    while(area > 0) {
      let square = Math.min(lng, wdth)
      res.push(square)
      if (square == lng) {
        wdth -= square
      } else if (square == wdth) lng -= square
      area = lng * wdth
    }
    return res
  }