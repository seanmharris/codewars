/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

const getSize = (width, height, depth) => [width*height*2 + height*depth*2 + depth*width*2, width*height*depth]