/*
Can Santa save Christmas?
Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.
But he has only 24 hours left. Can he do it?
Your Task:
You will get an array as input with time durations as string in the following format: HH:MM:SS.
Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not.
In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery.
*/

function determineTime (durations) {
  let totalH = 0, totalM = 0, totalS = 0
  for (let time of durations) {
    let [h,m,s] = time.split(':')
    totalH += +h
    totalM += +m
    totalS += +s
  }
  totalM += Math.floor(totalS / 60)
  totalS %= 60
  totalH += Math.floor(totalM / 60)
  totalM %= 60
  return totalH < 24 || totalH == 24 && totalM == 0 && totalS == 0
}

// Realizing now that all we need to know is seconds in a 24 hour period. 
// Rather than converting everything up & modding down, we should convert all values to seconds & check that the total is <= 86400

function determineTime(times) {
    return times.map(time => time.split(':'))
                .reduce((a, [h,m,s]) => a  + (+h * 3600) + (+m * 60) + +s, 0) <= 86400
}