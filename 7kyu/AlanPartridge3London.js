/*
Ever the learned traveller, Alan Partridge has pretty strong views on London: 
"Go to London. I guarantee you'll either be mugged or not appreciated. Catch the train to London, stopping at Rejection, Disappointment, Backstabbing Central and Shattered Dreams Parkway."

Your job is to check that the provided list / array of stations contains all of the stops Alan mentions. The list of stops are as follows:
Rejection
Disappointment
Backstabbing Central
Shattered Dreams Parkway

If all the stops appear in the given list / array, return 'Smell my cheese you mother!'
If not, return 'No, seriously, run. You will miss it.'
*/

function alan(x){
    const req = ['Rejection','Disappointment','Backstabbing Central', 'Shattered Dreams Parkway']
    for (let a of req) {
      if (!x.includes(a)) return 'No, seriously, run. You will miss it.'
    }
    return 'Smell my cheese you mother!'
  }