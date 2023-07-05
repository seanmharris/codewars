/*
John wants to decorate the walls of a room with wallpaper. He wants a fool-proof method for getting it right.
John knows that the rectangular room has a length of l meters, a width of w meters, a height of h meters.
The standard width of the rolls he wants to buy is 52 centimeters. The length of a roll is 10 meters.
He bears in mind however, that it’s best to have an extra length of wallpaper handy in case of mistakes or miscalculations
so he wants to buy a length 15% greater than the one he needs.
Last time he did these calculations he got a headache, so could you help John?
Task
Your function wallpaper(l, w, h) should return as a plain English word in lower case the number of rolls he must buy.
Example:
wallpaper(4.0, 3.5, 3.0) should return "ten"
wallpaper(0.0, 3.5, 3.0) should return "zero"
Notes:
all rolls (even with incomplete width) are put edge to edge
0 <= l, w, h (floating numbers); it can happens that w * h * l is zero
the integer r (number of rolls) will always be less or equal to 20
FORTH: the number of rolls will be a positive or null integer (not a plain English word; this number can be greater than 20)
The English numbers are preloaded and can be accessed as:
numbers =   ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 
            "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
*/

// min chars one liner, also doesn't use any additional memory for variables. but it's ugly and even adding back the spaces isn't much cleaner.
wallpaper=(l,w,h)=>l&&w&&h?numbers[Math.ceil((2.3*l*h+2.3*w*h)/5.2)]:'zero'

const wallpaper = (l, w, h) => l && w && h ? numbers[Math.ceil(((2 * l * h + 2 * w * h) * 1.15) / 5.2)] : 'zero'

// cleaner, readable, commented code

function wallplaper(l, w, h) {
    // calculate surface area of the four walls, and account for a 15% buffer - this is our required amount, or req variable
    // this could also be cheekily written as simply 2.3 * l * h + 2.3 * w * h since 2 * 1.15 === 2.3.
    // by extension & algebra we could also factor it in as a hardcoded value and even combine it with the ROLL variable as an overall coefficient
    // not worth it though as this creates potential for additional float/rounding imprecision and confuses our code
    const req = ( (2 * l * h) + (2 * w * h) ) * 1.15
    //hardcoded value given from prompt - "The standard width of the rolls he wants to buy is 52 CENTImeters. The length of a roll is 10 meters" 
    const ROLL = 5.2 
    // minimum required rolls is the total area needed divided by amount per roll, rounded up. This doesn't need its own line, but hey why not for clarity
    const amount = Math.ceil( req / ROLL) 
    
    // return statement with ternary to check if all arguments are non-zero.
    // In the case of ANY zero values, the room doesn't exist - it's just a wall, or perhaps a rug (depending on which value is in fact 0) 
    return l && w && h ? numbers[amount] : 'zero' 
}