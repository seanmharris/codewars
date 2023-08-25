/*
In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.
The first element of the array is at index 0.
*/

function total(arr){
    const isPrime = num => {
      if (num === 2) return true
      if (num === 0 || num === 1) return false
      if (!(num % 2)) return false
      for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (!(num % i)) return false
      }
      return true
    }
    return arr.reduce((a,b,i) => a + (isPrime(i) ? b : 0), 0)
  };


  // alt probably way faster using prime-lib's code

  function total(arr){
    const maxPrime  = 9007199254740881,
          dividers =  [0, 2, 6, 8, 12, 18, 20, 26, 30, 32, 36, 42, 48, 50, 56, 60, 62, 68, 72, 78, 86, 90, 92, 96, 98, 102, 110,
                       116, 120, 126, 128, 132, 138, 140, 146, 152, 156, 158, 162, 168, 170, 176, 180, 182, 186, 188, 198, 200];
  
    function isPrime(x) {
      if (x < 2 || x > maxPrime) return false;
      if (x % 2 === 0) return x === 2;
      if (x % 3 === 0) return x === 3;
      if (x % 5 === 0) return x === 5;
      if (x % 7 === 0) return x === 7;
      const m = Math.sqrt(x);
      for (let i = 11; i <= m; i += 210) {
          for (const a of dividers) {
              if (x % (i + a) === 0) {
                  return i + a === x;
              }
          }
      }
      return true;
    }
    return arr.reduce((a,b,i) => a + (isPrime(i) ? b : 0), 0)
  };