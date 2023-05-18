/*
Common denominators
You will have a list of rationals in the form
[ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
where all numbers are positive ints. You have to produce a result in the form:
"(N_1, D) ... (N_n, D)"
in which D is as small as possible and
N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
Example:
convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` (6, 12)(4, 12)(3, 12)
*/

function convertFrac(lst){
    let nums = [], dnoms = [], res = ''
    for (let pair of lst) {
      nums.push(pair[0])
      dnoms.push(pair[1])
    }
    // helpers to ultimately get lcd. Euclid GCD feeds into iterative LCM per pair of input denoms.
    function gcd(a, b) {
      if (b === 0) {
          return a;
      }
      return gcd(b, a % b);
    }
  
    function lcm(a, b) {
      return (a * b) / gcd(a, b)
    }
    
    function lcd(numbers) {
      let result = numbers[0];
      for (let i = 1; i < numbers.length; i++) {
          result = lcm(result, numbers[i]);
      }
      return result;
    }
    // result is lcd of all input denominators
    const result = lcd(dnoms);
    // loop through nums array & multiply by (lcd / initial denom)
    for (let i = 0; i < nums.length; i++) {
      nums[i] *= (result / dnoms[i])
    }
    // construct string per desired format
    nums.forEach(num => {
      res += `(${num},${result})`
    })
    // return
    return res  
  }