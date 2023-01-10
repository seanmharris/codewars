/*
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.

Some Examples of Return:
(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 
Note:
You can see examples for your language in "Sample Tests".

*/

/* My notes
create a function that determines if a given number is a product of any two consecutive fibonacci numbers
if so, return the 2 numbers & true in an array i.e. productFib(714) would return [21, 34, true]
if NOT, then return the 2 consecutive fibonacci numbers which FIRST exceed the target, and false. i.e. productFib(800) returns [34, 55, false] 
    ( ^ the prior pair is 21 * 34 = 714, less than target of 800. Next pair, 34 * 55 is 1,870 well above the target)

        ***I think I want a while loop here. We'll initialize variables & simply iterate on them until product is no longer under target ***
        ***(if product >= target, we don't iterate again, grab the current values, and evalutate true or false)***
*/

function productFib(prod){
    let transition = 0, num1  = 0, num2 = 1, product = 0
    while (product < prod) {
      transition = num1, num1 = num2, num2 += transition, product = num1 * num2
    }
    return [num1, num2, product == prod]
  }