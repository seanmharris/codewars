/*
To celebrate today's launch of my Hero's new book: Alan Partridge: Nomad, We have a new series of kata arranged around the great man himself.
Task: Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!
The number of exclamation mark (!) after the t should be determined by the number of Alan related terms you find in the given array (x). The related terms are as follows:
Partridge
PearTree
Chat
Dan
Toblerone
Lynn
AlphaPapa
Nomad
If you don't find any related terms, return Lynn, I've pierced my foot on a spike!!
*/

function part(x){
    let p = ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa', 'Nomad'],
        count = x.filter(w => p.includes(w)).length
    
    return count ? `Mine's a Pint${'!'.repeat(count)}` : "Lynn, I've pierced my foot on a spike!!"
  }