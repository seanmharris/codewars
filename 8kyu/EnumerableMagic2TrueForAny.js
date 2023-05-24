/*
Create an any function that accepts an array and function, and returns true if the function returns true for any item in the array.
If the array is empty, the function should return false.
*/

const any = (arr, fun) => arr.some(el => fun(el))