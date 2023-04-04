/*
Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.
But some of the rats are deaf and are going the wrong way!
Kata Task
How many deaf rats are there?
Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats
ex2 P O~ O~ ~O O~ has 1 deaf rat
ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/

var countDeafRats = function(town) {
    const rat1 = '~O', rat2 = 'O~';
    let pastPiper = false;
    let deafRats = 0;
    
    for (let i = 0; i < town.length; i++) {
      if (town[i] === 'P') {
        
        pastPiper = true;
        continue;
        
      }
      
      if (town[i] === ' ') continue;
      
      if((town[i] + town[i+1] === rat2 && !pastPiper) || (town[i] + town[i+1] === rat1 && pastPiper)) {
        
        deafRats ++
        i++
        continue;
        
      } else if ((town[i] + town[i+1] === rat1 && !pastPiper) || (town[i] + town[i+1] === rat2 && pastPiper)) {
        
        i++
        continue;
        
      }
    }
    return deafRats
  }
  