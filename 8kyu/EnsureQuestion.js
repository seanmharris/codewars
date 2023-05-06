/*
Given a string, write a function that returns the string with a question mark ("?") appends to the end,
unless the original string ends with a question mark, in which case, returns the original string.
For example (Input --> Output)
"Yes" --> "Yes?" 
"No?" --> "No?"
*/

// this is a dumb solution lol but I wanted to see if it would work:
const ensureQuestionBad = s => {
    let res = s + '?';
    return res.replace('??', '?')
  }

// better one:
const ensureQuestionOk = s => s.endsWith('?') ? s : s + '?'