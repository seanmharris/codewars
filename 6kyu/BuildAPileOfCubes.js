/*
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have a volume of (n-1)^3
And so on until the top which will have a volume of 1^3

You are given the TOTAL volume (m) of the building. Being given m, can you find the number n of cubes you will have to build?

The parameter of the function findNb will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + (n-2)^3 + ... + 1^3 = m if such an n exists, or -1 if not.

examples:
findNb(1071225) --> 45
findNb(91716553919377) --> -1
*/

function findNb(m) {
  let vol = 1  
  let n = 1
  while(vol < m) {
    n++
    vol += n**3
  }
  return vol == m ? n : -1;
}