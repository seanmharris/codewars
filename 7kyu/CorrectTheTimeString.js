/*
A new task for you!
You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
Examples
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  
If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)
Have fun coding it and please don't forget to vote and rank this kata! :-)
I have created other katas. Have a look if you like coding and challenges.
*/

function timeCorrect(timestring) {
    if (timestring === '' || timestring === null) return timestring;
    let [h,m,s] = timestring.split(':')
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    if (!m || !s || [...h+m+s].some(char => letters.includes(char.toLowerCase()))) return null;
    if (s >= 60) {
      m = +m + 1
      s = +s % 60
    }
    if (m >= 60) {
      h = +h + 1
      m = +m % 60
    }
    if (h >= 24) {
      h = +h % 24
    }
    return [h,m,s].map(x => x.toString().padStart(2, '0')).join(':')
  }