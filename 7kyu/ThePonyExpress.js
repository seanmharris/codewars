/*
The Pony Express was a mail service operating in the US in 1859-60.
It reduced the time for messages to travel between the Atlantic and Pacific coasts to about 10 days, before it was made obsolete by the transcontinental telegraph.
There were a number of stations, where the rider switched to a fresh horse and carried on, or the mail bag was handed over to the next rider.
Task:
Given stations, a list/array of distances (miles) from one station to the next along the Pony Express route.
Implement the riders function, to return how many riders are necessary to get the mail from one end to the other.
NOTE: Each rider travels as far as he can, but never more than 100 miles.
*/

function riders(stations) {
    let riders = 1
    stations.reduce((a,b) => {
      if (a + b > 100) {
        riders++
        return b
      } else return a + b
    })
    
    return riders
  }