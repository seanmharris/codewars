/*
Given two arrays a1 and a2, write a function comp(a1, a2) that checks whether the two arrays have the "same" elements, 
with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements 
in a2 are the elements in a squared, regardless of the order.

Examples

Valid arrays
a1 = [121, 144, 19, 161, 19, 144, 19, 11]  
a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a1, a2) returns true because in a2, 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. 

It gets obvious if we write a2's elements in terms of squares:
a1 = [121, 144, 19, 161, 19, 144, 19, 11] 
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]


Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a1 = [121, 144, 19, 161, 19, 144, 19, 11]  
a2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, a2) returns false because in a2, 132 is not the square of any number of a1.

a1 = [121, 144, 19, 161, 19, 144, 19, 11]  
a2 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a1, a2) returns false because in a2, 36100 is not the square of any number of a1.

Remarks

a1 or a2 might be null - if a1 or a2 are null, the problem doesn't make sense - so return false.

*/

function comp(a1, a2){
    if ((!a1 || !a2) || a1.length != a2.length) return false
    return a1.reduce((a,b) => a + b, 0) == a2.reduce((a,b) => a + Math.sqrt(b), 0)  
  }