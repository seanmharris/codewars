/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input.
Graph (My explanation of given picture - the arc of circle (length A) extends from the bottom-left corner to the top-right corner of circle. In other words, A = 1/4 circumference)
Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/

const squareArea = A => Math.pow(2 * A / Math.PI, 2)