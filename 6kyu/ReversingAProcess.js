/*
Suppose we know the process by which a string s was encoded to a string r (see explanation below). The aim of the kata is to decode this string r to get back the original string s.
Explanation of the encoding process:
input: a string s composed of lowercase letters from "a" to "z", and a positive integer num
we know there is a correspondence between abcde...uvwxyzand 0, 1, 2 ..., 23, 24, 25 : 0 <-> a, 1 <-> b ...
if c is a character of s whose corresponding number is x, apply to x the function f: x-> f(x) = num * x % 26, then find ch the corresponding character of f(x)
Accumulate all these ch in a string r
concatenate num and r and return the result
For example:
encode("mer", 6015)  -->  "6015ekx"
m --> 12,   12 * 6015 % 26 = 4,    4  --> e
e --> 4,     4 * 6015 % 26 = 10,   10 --> k
r --> 17,   17 * 6015 % 26 = 23,   23 --> x
So we get "ekx", hence the output is "6015ekx"
Task
A string s was encoded to string r by the above process. complete the function to get back s whenever it is possible.
Indeed it can happen that the decoding is impossible for strings composed of whatever letters from "a" to "z" when positive integer num has not been correctly chosen.
In that case return "Impossible to decode".
Examples
decode "6015ekx" -> "mer"
decode "5057aan" -> "Impossible to decode"
*/

// my own notes:
// 1. invalid nums are any nums which will cause duplicates in the % 26 operation, so factors of 26 break it.
//      once we determine num, we can early return knowing it will be impossible to properly decode if the given num is evenly divisible by 2 or 13 (or both)
// 2. the return line is crazy. trying to explain it: dec is my array which i've named as a shorthand to imply 'decode' array, but my initial & more descriptive
//    name for it was arrayOfAlphabetModOptionsGivenNum. That's a mouthful, but hopefully makes clear what it is:
//    dec is a 26-length array of keys having performed the encoding operation on each index [0,1,2,3,4...,25] (multiplying these indices by the given num & modulus 26)\
//    therefore, each index of dec is where the result would be if we were coding forward. 
//  2a. what we have is letters AFTER they've been converted, stored in str. So we also write out the alphabet as a string, stored as constant variable abc.
//      First I spread the characters of string str into an array, so I can map over each char.
//      Within our map function, abc.indexOf(char) yields the result character's position in the alphabet. (result character meaning the 'char' being mapped over, from the given str)
//      We then find INDEX's index in the dec array: dec.indexOf(abc.indexOf(char)), which in turn yields the initial letter's position in the alphabet
//          - take the example encode("mer", 6015) --> 6015ekx :: as seen above, result letter e is abc index 4, k is 10, x is 23
//          - our dec array would have shown [0, 9, 18, 1, 10, 19, 2, 11, 20, 3, 12, 21, 4, 13, 22, 5, 14, 23, 6, 15, 24, 7, 16, 25, 8, 17]
//          - so dec.indexOf(abc.indexOf(char)) => for result 'e' which abc.indexOf('e') === 4, dec.indexOf(4) === 12, and for the other two, 4 and 17 respectively.
//      All that's left is to access the letter within alphabet via brackets, and that letter becomes the .map function's return value, leaving us with an array of decoded letters
//          - back to our example, we're looking in abc at index 12, 4, and 17 - 'abcdefghijklmnopqrstuvwxyz'[12] === 'm', [4] === 'e', and [17] === 'r'
//          - these decoded letters are what we finally return as our mapped value, leaving us an array of letters which we can simply .join('') to yield our decoded string.
// I don't usually bother to write detailed notes, but this one really brain-blasted me. Not for an exceedingly long time, but the abc[dec.indexOf(abc.indexOf(char))] was quite inception-y.

function decode(r) {
    let [num, str] = r.split(/(\d+)/).slice(1), // regex to grab the numeric portion, for some reason it was giving an initial empty string at index 0 so .slice(1) yields our num & str
        arr = new Array(26).fill(0); // declaring a 26-length array & fill with 0s which will soon be mapped over. If no .fill() those spots are empty and .map screws up
    
    if(num % 2 === 0 || num % 13 === 0) return 'Impossible to decode' // note 1
    
    const dec = arr.map((x, i) => (i * num) % 26), // note 2
          abc = 'abcdefghijklmnopqrstuvwxyz' // full alphabet in order for easy 0-index access. IMO less trouble than using ASCII charCode methods
    
    return [...str].map(char => abc[dec.indexOf(abc.indexOf(char))]).join('') // note 2a
  }