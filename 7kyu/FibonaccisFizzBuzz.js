/*
The goal of this kata is two-fold:
1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.
2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.
For the sake of this kata, you can assume all input will be a positive integer.
Use Cases
Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.
Examples
Input:
fibsFizzBuzz(5)
Output:
[ 1, 1, 2, 'Fizz', 'Buzz' ]
Input:
fibsFizzBuzz(1)
Output:
[1]
Input:
fibsFizzBuzz(20)
Output:
[1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]
*/

var fibsFizzBuzz = function(n) {
    let arr = [1,1],
        len = n - 2;
    while(arr.length < n) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    }
    return arr.map(num => {
      let str = ''
      if (num % 3 === 0) str += 'Fizz'
      if (num % 5 === 0) str += 'Buzz'
      return str || num
    }).slice(0,n)
  }