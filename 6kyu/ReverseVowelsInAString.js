/*
In this kata, your goal is to write a function which will reverse the vowels in a string.
Any characters which are not vowels should remain in their original position. Here are some examples:
"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.
*/

// I tried regex & replace type things but couldn't crack it at first, so I did this ugly iterative swapper with 2 pointers:

function reverseVowels(str) {
    let arr = [...str],
        vowels = 'aeiouAEIOU',
        temp = ''
    for (let i = 0, j = arr.length - 1; i < j; i++) {
      if(vowels.includes(arr[i])) {
        while(!vowels.includes(arr[j])) j--
        if(j <= i) break
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j--
      }
    }
    return arr.join('')
}


// Then I realized a string.match(regex) array finds all vowels in order and rather than using the info by calling .reverse() and
// Proceeding to access .indexOf() or whatever else to manually make swaps, you simply need to run .replace() with a function argument instead of a raw replacer!
// The anonymous arrow function gets called on each match, replacing with a different value each time
// So, to that function we can return vowels.pop() to access our previously matched vowels in reverse order.

function reverseVowels(str) {
    const v = /[aeiou]/gi,
          vowels = str.match(v)
    return str.replace(v, _ => vowels.pop())
  }