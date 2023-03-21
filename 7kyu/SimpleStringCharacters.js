/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count
of uppercase letters, lowercase, numbers and special characters, as follows.
Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
*/

function solve(s){
    let arr = [0,0,0,0]
    let codes = s.split('').map(char => char.charCodeAt())
    codes.forEach(code => {
      if (code >= 48 && code <= 57){
        arr[2] += 1
      } else if (code >= 65 && code <= 90){
        arr[0] += 1
      } else if (code >= 97 && code <= 122){
        arr[1] += 1
      } else {
        arr[3] += 1           
      }
    })
    return arr
  }

  /* 
    Personal notes post-solve: I tried to destructure the array as [upper, lower, num, spec] and it always broke the solution.
    whether it was:
        let arr = [upper = 0, lower = 0, num = 0, spec = 0]
    or 
        let arr = [0,0,0,0]
        let [upper, lower, num, spec] = arr

    while BOTH of those assignments would correctly log to the console in any of the below cases. Also worked when assigning values other than 0, 
    and correctly updated after incrementing & re-logging:
        console.log(arr)
        console.log(upper)
        console.log(lower)
        console.log(num)
        console.log(spec)

    But NONE of it would then correctly increment themselves in a loop, a .forEach, or anything else I tried. Conditional logic was unchanged;
    I always used charCodeAt() & the ASCII bounds to conditionally update the correct category. But for some reason it always ended up as [0,0,0,0] until
    I gave up on the destructured variable names and just updated the arr[index] instead.
    
    I would have assumed since they were declared globally, they would be accessible & able to be modified from within any other scope?
    Need to reconsider array destructuring & what may be wrong about the syntax or logic I was trying to implement.
  */