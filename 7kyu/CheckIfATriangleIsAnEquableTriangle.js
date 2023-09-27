/*
A triangle is called an equable triangle if its area equals its perimeter.
Return true, if it is an equable triangle, else return false.
You will be provided with the length of sides of the triangle.
*/

function equableTriangle(a,b,c) {
    // Most simply, the area of triangle is given as A = 1/2 * b * h
    // In this case, we are not given b & h. But we do have all 3 sides (a, b, c)
    // First, the perimeter is simply the sum of the sides a + b + c
    // Another way to find the area is Heron's Formula, using the 'semi-peremeter' (sp) which is 1/2 * p, along with the 3 given sides s1, s2, and s3
    // The formula states that the area of any triangle can be found by taking the square root of: sp * (sp - s1) * (sp - s2) * (sp - s3)
    // We need simply to implement this formula, and plug in our given semi-perimeter & sides, then check equivalence with the perimeter to return our boolean.
    
    const p = a + b + c,
          s = p / 2,
          heron = (sp, s1, s2, s3) => Math.sqrt(sp * (sp - s1) * (sp - s2) * (sp - s3))
    
    return p === heron(s, a, b, c)
    
  }