/*
In this Kata you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount.
The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢).
Therefore, the dictionary returned should contain exactly 4 key/value pairs.
Notes:
If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
If a float is passed into the function, its value should be rounded down, and the resulting dictionary should never contain fractions of a coin.
Examples
loose_change(56)    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
loose_change(-435)  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
loose_change(4.935) ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}
*/

function looseChange(cents){
    cents = Math.floor(cents)
    
    function Breakdown(n = 0, p = 0, d = 0, q = 0) {
      this['Nickels'] = n;
      this['Pennies'] = p;
      this['Dimes'] = d;
      this['Quarters'] = q;
    }
    
    if (cents <= 0) return new Breakdown(0,0,0,0)
    
    let quarters = Math.floor(cents / 25)
    cents = cents % 25
    let dimes = Math.floor(cents / 10)
    cents = cents % 10
    let nickels = Math.floor(cents / 5)
    cents = cents % 5
    let pennies = cents
    return new Breakdown(nickels, pennies, dimes, quarters)
  }