/*
I have a cat and a dog which I got as kitten / puppy.
I forget when that was, but I do know their current ages as catYears and dogYears.
Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]
NOTES:
Results are truncated whole numbers of "human" years
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

var ownedCatAndDog = function(catYears, dogYears) {
    function convert(num, div) {
      if (num < 15) return 0
      if (num < 24) return 1
      return 2 + Math.floor((num - 24) /  div)
    }
    return [convert(catYears, 4), convert(dogYears, 5)]
  }