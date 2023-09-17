/*
Create a function that differentiates a polynomial for a given value of x.
Your function will receive 2 arguments: a polynomial as a string, and a point to evaluate the equation as an integer.
Assumptions:
There will be a coefficient near each x, unless the coefficient equals 1 or -1.
There will be an exponent near each x, unless the exponent equals 0 or 1.
All exponents will be greater or equal to zero
Examples:
differenatiate("12x+2", 3)      ==>   returns 12
differenatiate("x^2+3x+2", 3)   ==>   returns 9
*/

function differentiate(equation, point) {
    equation = equation.replaceAll('-','+-')
    let arr = equation.split('+').filter(el => el.includes('x')).map(a => a.split(/[x^?]/)),
        sum = 0
    arr.forEach(term => {
      let [coef, _, exp] = term;
      if (coef == '-') coef = -1
      let newCoef = (+exp || 1) * (+coef || 1),
          newExp = +exp - 1 || 0;
      sum += Math.pow(point, newExp) * newCoef
    })
    return sum
  }