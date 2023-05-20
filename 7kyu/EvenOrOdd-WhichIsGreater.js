/*
Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits.
Always a string of numbers will be given.
If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/

function evenOrOdd(s) {
    let e = 0, o = 0;
    for (let x of s) +x % 2 === 0 ? e += +x : o += +x
    return e > o ? "Even is greater than Odd" : e < o ? "Odd is greater than Even" : "Even and Odd are the same"
  }