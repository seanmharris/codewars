/*
Print all numbers up to (not including) s3 which are multiples of both s1 and s2.
Return results in a list/array
Don't worry about checking zeros or negative values. 
*/

function multiples(s1,s2,s3){
    const gcd = (a, b) => a ? gcd(b % a, a) : b;
    const lcm = (a, b) => a * b / gcd(a, b);
    
    const step = lcm(s1,s2)
    let res = []
    
    for (let i = step; i < s3; i += step) {
      res.push(i)
    }
    
    return res
}