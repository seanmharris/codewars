/*
Find the area of a rectangle when provided with one diagonal and one side of the rectangle.
If the input diagonal is less than or equal to the length of the side, return "Not a rectangle".
If the resultant area has decimals round it to two places.
*/

const area = (d,l) => d <= l ? 'Not a rectangle' : +(Math.sqrt((d**2) - (l**2)) * l).toFixed(2)