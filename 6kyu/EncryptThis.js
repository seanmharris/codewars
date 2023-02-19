/*
Encrypt this! Here are the conditions:
Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

const encryptThis = text => text.split(' ').map(word => {
    let first = word.charCodeAt(0)
    let second = word[word.length - 1]
    let mid = word.slice(2, word.length - 1)
    let end = word[1]
    if(word.length > 2) {
      return first + second + mid + end
    } else return word.length == 2 ? first + second : first
  }).join(' ')