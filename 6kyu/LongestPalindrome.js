/*
Find the length of the longest substring in the given string s that is the same in reverse.
As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
If the length of the input string is 0, the return value must be 0.
Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

const longestPalindrome = s => {
    if (!s) return 0;
    const isPal = x => [...x].reverse().join('') === x
    let maxCount = 1;
    
    for (let i = 0; s.length - i > maxCount; i++) {
      if (isPal(s.slice(i))) return s.length - i
      for (let j = i + maxCount; j < s.length; j++) {
        if(isPal(s.slice(i,j))) {
          maxCount = j - i
        }
      }
    }
    return maxCount
  }