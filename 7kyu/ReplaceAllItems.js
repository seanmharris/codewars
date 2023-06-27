/*
Write function replaceAll that will replace all occurrences of an item with another. The function has to work for strings and arrays.
Example:
replaceAll([1,2,2] 1 2) -> in array [1,2,2] we replace 1 with 2 to get new array [2,2,2]
replaceAll('Hello World', 'o','0') -> 'Hell0 W0rld'
*/

function replaceAll(seq, find, replace) {
    return typeof seq === 'string' ? seq.replaceAll(find, replace) : seq.map(el => el === find ? replace : el);
  }