/*
If the numbers is even return true. If it's odd, return false.
However, you cannot use the modulus operator! (%)
*/

const isEven = n => !(n & 1)

// obvious non bitwise: const isEven = n => Number.isInteger(n / 2)