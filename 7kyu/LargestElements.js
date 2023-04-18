/*
Write a program that outputs the top n elements from a list.
~~~
The return value should be an array of the n largest elements from the input array in ascending order.
^ extra prompt added by me. This was not made fully clear, but tests failed without the second .sort() call.
~~~
Example:
largest(2, [7,6,5,4,3,2,1])
// => [6,7] 
*/

function largest(n, array) {
    return array.sort((a,b) => b - a).slice(0, n).sort((a,b) => a - b) 
  }

  // given that we now know they are to be returned in ascending order, it makes more sense to sort the input in
  // ascending order to begin with, & then return a slice of the array starting 'n' from the end, through the end.
  // that would look like this instead:

function largestRefactor(n, array) {
    return array.sort((a,b) => a - b).slice(-n)
}