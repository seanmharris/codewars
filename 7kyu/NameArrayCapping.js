/*
Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.
example
capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/

const capMe = names => names.map(name => name[0].toUpperCase() + name.toLowerCase().slice(1))