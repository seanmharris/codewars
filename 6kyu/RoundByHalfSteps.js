/*
Round any given number to the closest 0.5 step
I.E.
solution(4.2) = 4
solution(4.3) = 4.5
solution(4.6) = 4.5
solution(4.8) = 5
Round up if number is as close to previous and next 0.5 steps.
solution(4.75) == 5
*/

function solution(n){
    let dec = Math.floor(n % 1 * 100)
    return dec < 25 ? Math.floor(n) : dec >= 75 ? Math.ceil(n) : Math.floor(n) + .5
  }