/*
This series of katas will introduce you to basics of doing geometry with computers.
Point objects have attributes x and y.
Write a function calculating distance between Point a and Point b.
Tests compare expected result and actual answer with tolerance of 1e-6.
*/

// distance formula => square root of [ (x2 - x1)^2 + (y2 - y1)^2 ]

function distanceBetweenPoints(a, b) {
    return Math.sqrt(((b.x - a.x) ** 2) + ((b.y - a.y) ** 2))
  }