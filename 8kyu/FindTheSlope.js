/*
Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2
Assume that [a,b,c,d] and the answer are all integers (no floating numbers!).
*/

function slope(points) {
    const [x1, y1, x2, y2] = points;
    const yDif = y2 - y1, xDif = x2 - x1;
    
    if (xDif === 0) return 'undefined'
    return String(yDif / xDif)
  };