/*
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'.
By this I mean the internal letters will move out, and the external letters move toward the centre.
If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.
An example should clarify:
'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/

const insideOut = x => x.split(' ').map(word => {
    if (word.length <= 3) return word;
    let midLetter = word.length / 2,
        pre = [...word.slice(0, Math.floor(midLetter))].reverse().join(''),
        post = [...word.slice(Math.ceil(midLetter))].reverse().join('');
    return midLetter % 1 ?  pre + word[Math.floor(midLetter)] + post : pre + post
  }).join(' ')