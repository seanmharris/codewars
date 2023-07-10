/*
Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22, he knows that the time is 11:38
in the same manner:
05:25 --> 06:35
01:50 --> 10:10
11:58 --> 12:02
12:01 --> 11:59
Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.
Return the real time as a string.
Consider hours to be between 1 <= hour < 13.
So there is no 00:20, instead it is 12:20.
There is no 13:20, instead it is 01:20.
*/

// my note: pattern recognition from given examples. Minutes always add to 60, hours always add to 11 or 23 (if given is either 11 or 12 it's 23)

function WhatIsTheTime(timeInMirror) {
    const [hour, min] = timeInMirror.split(':'),
          realMin = +min > 0 ? 60 - +min : 0
    let realHour = +hour > 10 ? 23 - +hour : 11 - +hour
    if (realMin === 0) realHour++
    return `${realHour < 10 ? '0' + realHour : realHour}:${realMin < 10 ? '0' + realMin : realMin}`
  }