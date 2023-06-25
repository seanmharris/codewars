/*
You will have a list of rationals in the form
lst = [ [numer_1, denom_1] , ... , [numer_n, denom_n] ]
where all numbers are positive integers. You have to produce their sum N / D in an irreducible form: this means that N and D have only 1 as a common divisor.
Return the result in the form: [N, D] 
If the result is an integer (D evenly divides N) return an integer.
If the input list is empty, return null
Example:
[ [1, 2], [1, 3], [1, 4] ]  -->  [13, 12]
1/2  +  1/3  +  1/4     =      13/12
*/

function sumFracts(l) {
    if (!l.length) return null
    
    const gcd = (a,b) => !b ? a : gcd(b, a % b)
    const lcm = (c,d) => (c * d) / gcd(c, d)
  
    let nums = [], denoms = []
    for (let pair of l) {
      nums.push(pair[0])
      denoms.push(pair[1])
    }
  
    const factor = denoms.reduce((e,f) => lcm(e,f))
    const sum = nums.reduce((a,b,i) => a + b * (factor / denoms[i]), 0)
  
    return sum % factor ? [sum / gcd(sum, factor), factor / gcd(sum, factor)] : sum / factor
  }