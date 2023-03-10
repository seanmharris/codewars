/*
A perfect power is a classification of positive integers:
In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer.
More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.
Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k.
Otherwise return null.
Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. 
Examples
Test.describe("perfect powers", function(){
  Test.it("should work for some examples",function(){
    Test.assertSimilar(isPP(4), [2,2], "4 = 2^2");
    Test.assertSimilar(isPP(9), [3,2], "9 = 3^2");
    Test.assertEquals( isPP(5), null, "5 isn't a perfect number");
  });
});
*/

var isPP = function(n){
    const power = (x, y) => Math.log(y) / Math.log(x);
    let base, exp;
    for (let i = 1; i <= Math.sqrt(n); i++) {
      // janky way to deal with what I assume is floating point imprecision from the log division
      let temp = Number.parseFloat(power(i,n)).toFixed(5)
      if (temp % 1 == 0) {
        base = i
        exp = Math.round(temp)
        break;
      } 
    }
    return exp ? [base, exp] : null
  }