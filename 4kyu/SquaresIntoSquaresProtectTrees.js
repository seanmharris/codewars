/*
My little sister came back home from school with the following task: given a squared sheet of paper she has to cut it in pieces which, 
when assembled, give squares the sides of which form an increasing sequence of numbers.
At the beginning it was lot of fun but little by little we were tired of seeing the pile of torn paper.
So we decided to write a program that could help us and protects trees.
Task
Given a positive integral number n, return a strictly increasing sequence (array) of numbers, so that the sum of the squares is equal to n².
If there are multiple solutions (and there will be), return as far as possible the result with the largest possible values:
Examples
decompose(11) must return [1,2,4,10]. Note that there are actually two ways to decompose 11², 
11² = 121 = 1 + 4 + 16 + 100 = 1² + 2² + 4² + 10² but don't return [2,6,9], since 9 is smaller than 10.
For decompose(50) don't return [1, 1, 4, 9, 49] but [1, 3, 5, 8, 49] since [1, 1, 4, 9, 49] doesn't form a strictly increasing sequence.
Note
Neither [n] nor [1,1,1,…,1] are valid solutions.
If no valid solution exists, return null.
The function "decompose" will take a positive integer n and return the decomposition of N = n² as:
[x1 ... xk]
Hint: very often xk will be n-1.
*/

function decompose(n) {
    // Heavily commented recursive solution. I'm not fantastic with recursion, so this could likely be way more optimized.
    
    // overall target is n squared, found variable will short-circuit recursive calls later, success is an empty array, reassigned to the correct sequence when found
    let target = n ** 2, found = false, success = []
    
    
    function dfs(cur, nextValid = cur - 1, total, res) {
      // recursive function. Here are our parameters:
      // cur represents the current number being tested.
      // nextValid references the next possible addition to the sequence.
        // later, a while loop will decrement this until the next recursive total won't be out of scope.
      // total will keep track of each path's total sum of squared elements to compare vs. target
      // res is an array. We'll be using .unshift() to populate it with 'cur' elements as we probe.
        // The other path will then use .shift() to undo the addition & therefore NOT test that element on the next recursive call
      
      // success case:  total === target (yay!) set found to true, set success to a copy of the correct array, and return.
      if (total === target) {
        found = true
        success = [...res]
        return;
      };
      
      // fail cases - if cur is 0 or lower, we're done. if total is greater than target, we've overshot. 
      // finally, if found is true, we've already found a better solution (per the prompt, higher is better & we are decreasing arguments as we go)
      if (cur < 1 || total > target || found == true) {
        return;
      };
      
      // path 1: cur goes to front of res array
      res.unshift(cur)
      // optimization to avoid stack overflow : check that the next decremented value of cur is actually valid before plugging it in. 
      // If not, decrement until it would be valid. 
      while (nextValid ** 2 + cur ** 2 > target) {
        nextValid --
      }
      // recursive call using the newly decremented nextValid value as cur, and its nextValid value starts at nextValid - 1.
      // Increment total as well for the next call. Res is changed already via .unshift(cur)
      dfs(nextValid, nextValid - 1, total + (cur ** 2), res)
      // undo the addition to res to set up the 'other' path, wherein we won't be using cur
      res.shift()
      // and make the recursive call accordingly - decrement cur and don't use the altered nextValid for this call, simply use cur - 2.
      // total isn't updated since we didn't add to it in this pass, res is fine to pass as-is too.
      dfs(cur - 1, cur - 2, total, res)
      }
    
    // running dfs with these baseline arguments will either find a match and put it in the (currently empty) success array, or... it won't
    dfs(n - 1, n - 2, 0, [])
    
    // if a match was found, success has elements & therefore a truthy length. So we return either the filled in array, or null if we failed to find a solution.
    return success.length ? success : null
    // peace out nerds
  }
  