/*
Do you speak retsec?
You and your friends want to play undercover agents.
In order to exchange your secret messages, you've come up with the following system:
you take the word, cut it in half, and place the first half behind the latter.
If the word has an uneven number of characters, you leave the middle at its previous place:
retsec examples
That way, you'll be able to exchange your messages in private.
Task
You're given a single word. Your task is to swap the halves.
If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.
Examples
reverseByCenter("secret")  == "retsec" // no center character
reverseByCenter("agent")   == "nteag"  // center character is "e"
*/

function reverseByCenter(s){
    let mid = s.length / 2,
        a = s.slice(Math.ceil(mid)),
        b = s.slice(0, Math.floor(mid))
    return mid % 1 ? a + s[Math.floor(mid)] + b : a + b
  }