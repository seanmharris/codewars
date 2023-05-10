/*
The aim of the kata is to decompose n! (factorial n) into its prime factors.
Examples:
n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.
n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"
n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23
Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.
Notes
the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
factorial can be a very big number (4000! has 12674 digits, n can go from 300 to 4000).
*/

function decomp(n) {

    function factorial(num) {
      if (num <= 1n) return 1n;
      return num * factorial(num - 1n)
    }
  
    function isPrime(x) {
      if (x % 2n === 0n) return false
      for (let i = 3n; i <= x / i;  i += 2n) {
        if (x % i === 0n) return false
      }
      return true
    }
  
    function nextPrime(y) {
      if (y == 2n) return 3n;
      let maybe = y + 1n;
      while (!isPrime(maybe)) {
        maybe++
      }
      return maybe
    }
    
    let usable = factorial(BigInt(n)), curPrime = 2n, curPower = 0, res = '';
  
    while(usable > 1n) {
      while(usable % curPrime === 0n) {
        usable /= curPrime
        curPower ++
      }
      res += ` * ${Number(curPrime)}${curPower > 1 ? `^${curPower}`: ''}`
      curPrime = nextPrime(curPrime)
      curPower = 0
      
    } 
    return res.slice(3)
  }