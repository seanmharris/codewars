/*
Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. 
Young B knows she runs faster than A, and furthermore has not finished her cabbage.
When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. 
How long will it take B to catch A?
More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a 
lead g (integer > 0) how long will it take B to catch A?
The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds 
(round down to the nearest second) or a string in some languages.
If v1 >= v2 then return null.
Examples:
race(720, 850, 70) => [0, 32, 18]
race(80, 91, 37)   => [3, 21, 49]
** Hints for people who don't know how to convert to hours, minutes, seconds:
Tortoises don't care about fractions of seconds
Think of calculation by hand using only integers (in your code use or simulate integer division)
*/

function race(v1, v2, g) {
    if (v2 <= v1) return null
    let seconds = g / (v2-v1) * 3600
    let hours = Math.floor(seconds/3600)
    let minutes = Math.floor(seconds/60) - (hours * 60)
    seconds = Math.floor(seconds - ((hours * 3600) + (minutes * 60)))
    return [hours, minutes, seconds]
  }