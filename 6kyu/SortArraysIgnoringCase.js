/*
Sort the given array of strings in alphabetical order, case insensitive. For example:
["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/

function sortme(names) {
    return names.sort((a, b) => {
        const nameA = a.toUpperCase(), nameB = b.toUpperCase();
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
    })
}
  