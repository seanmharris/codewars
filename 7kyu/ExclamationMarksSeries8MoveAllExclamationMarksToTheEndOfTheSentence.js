/*
Move all exclamation marks to the end of the sentence
Examples
remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"
*/

function remove (string) {
    let count = [...string].filter(c => c === '!').length
    return string.replaceAll('!', '') + '!'.repeat(count)
  }