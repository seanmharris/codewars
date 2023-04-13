/*
John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns.
ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.
Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?
Example:
With list ls and 3 towns to visit they can make a choice between: 
[50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].
The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.
The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].
The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0),
k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element).
The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise null.
Examples:
ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163
xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)
ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228
*/

function chooseBestSum(totalMiles, numTowns, list) {
    // early return for edge case if not enough towns in list
    if (numTowns > list.length) return null
    // init our max distance within parameters as null, can be reassigned accordingly later
    let maxSafe = null;
    
    // recursive function will maintain an index (i), num of towns visited, and total miles traveled
    function sums(i, count, curMiles) {
      // base case: fail => if you've traveled too far, visited too many towns, or i is out of bounds, return.
      if (curMiles > totalMiles || count > numTowns || i > list.length) return
      // base case: success => if you've visited the correct # of towns, miles traveled is <= allowed, and miles traveled is greater than previous max, set new max & return.
      if (count === numTowns && curMiles <= totalMiles && curMiles > maxSafe) {
        maxSafe = curMiles
        return;
      }
      // recursive calls, one using current index & other skipping it
      sums(i + 1, count + 1, curMiles + list[i])
      sums(i + 1, count, curMiles)
    }
    // actually call the defined function with list index 0, no towns visited, and no miles traveled
    sums(0, 0, 0)
    // after the above recursive call, maxSafe will have either been reassigned a new max value, or still be null if no valid sum was found
    return maxSafe
  }