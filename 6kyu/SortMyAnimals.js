/*
Consider the following class:
var Animal = { 
    name: "Cat", 
    numberOfLegs: 4 
}
Write a method that accepts a list of objects of type Animal, and returns a new list.
The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.
If null is passed, the method should return null. If an empty list is passed, it should return an empty list back.
*/

function sortAnimal(animal) {
    if(!animal) return null
    return animal.sort((a,b) => {
      const legs = a.numberOfLegs - b.numberOfLegs 
      return legs || a.name.localeCompare(b.name)
    })
  }