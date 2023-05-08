/*
Create a function that takes in the sum and age difference of two people, calculates their individual ages,
and returns a pair of values (oldest age first) if those exist or null if:
sum < 0
difference < 0
Either of the calculated ages come out to be negative
*/

function getAges(sum,difference){
    const a = (sum + difference ) / 2
    const b = (sum - difference) / 2
    if (sum < 0 || difference < 0 || a < 0 || b < 0) return null
    return [a,b]
  };