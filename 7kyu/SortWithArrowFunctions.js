/*
Sort and Order people by their age using Arrow Functions
Task: order a list containg people objects by age using the new Javascript Arrow Functions
Input: a valid array with People objects containing an Age and Name
Output: a valid sorted array with People objects sorted by Age in ascending order
*/

const OrderPeople = people => people.sort((a,b) => a.age - b.age);