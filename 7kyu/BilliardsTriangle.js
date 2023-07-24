/*
Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.
For more examples,
pyramid(1) == 1
pyramid(3) == 2
pyramid(6) == 3
pyramid(10) == 4
pyramid(15) == 5
Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle.
*/

/*  My notes:
  The formula for the sum of integers from 1 to n is:  n(n + 1) / 2 = s
  however, we're given the s (number of balls) & want to return n, so we need to invert it!
  we can rewrite the formula as: 
  n(n + 1) = 2s ...and then rewrite again as:
  n^2 + n - 2s = 0 ...which is a quadratic formula setup. (an^2 + bn + c = 0)
  our coefficients are a = 1, b = 1, c = -2s, which we can plug in to the quadratic formula:
  n = ( -b +- sqrt(b^2 - 4ac) ) / 2a
  simplifying the above, we can find our n like this:
  ( -1 +- Math.sqrt(1^2 - (4 * 1 * -2s)) ) / 2(1)
  which in turn can be simplified to 
  (Math.sqrt(8 * balls + 1) - 1) / 2
  because within our sqrt, 1^2 = 1, and (-4 * 1 * -2s) = 8s.
  so we have sqrt(8s + 1), and then we can subtract 1 rather than adding the negative, just for readability.
  Since we're looking for a threshold though, we need to Math.floor our result!
*/
const pyramid = balls => Math.floor((Math.sqrt(8 * balls + 1) -1) / 2)