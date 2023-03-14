/*
You must implement a function that returns the difference between the largest and the smallest value in a given list / array (list) received as the parameter.
list contains integers, that means it may contain some negative numbers
if list is empty or contains a single element, return 0
list is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
Have fun!
*/

const maxDiff = list => list.length > 1 ? Math.max(...list) - Math.min(...list) : 0