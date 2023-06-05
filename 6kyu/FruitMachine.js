/*
A slot machine is a casino gambling machine with three or more reels which spin when a button is pushed.
Slot machines are also known as one-armed bandits because they were originally operated by one lever on the side of the
machine as distinct from a button on the front panel, and because of their ability to leave the player in debt and impoverished.
Many modern machines are still equipped with a legacy lever in addition to the button.
Task: You will be given three reels of different images and told at which index the reels stop.
From this information your job is to return the score of the resulted reels.
Rules
1. There are always exactly three reels
2. Each reel has 10 different items.
3. The three reel inputs may be different.
4. The spin array represents the index of where the reels finish.
5. The three spin inputs may be different
6. Three of the same is worth more than two of the same
7. Two of the same plus one "Wild" is double the score.
8. No matching items returns 0.
Scoring:
Item        Three of the same       Two of the same     Two of the same plus one Wild
Wild        100                     10                  N/A
Star        90                      9                   18
Bell        80                      8                   16
Shell       70                      7                   14
Seven       60                      6                   12
Cherry      50                      5                   10
Bar         40                      4                   8
King        30                      3                   6
Queen       20                      2                   4
Jack        10                      1                   2
Return an integer of the score.
Example
Initialise
reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
spin = [5,5,5];
result = fruit([reel1,reel2,reel3],spin);
Scoring
reel1[5] == "Cherry"
reel2[5] == "Cherry"
reel3[5] == "Cherry"
Cherry + Cherry + Cherry == 50
Return
result == 50
*/

function fruit(reels, spins){
    // base scores of each option match the option's index in this array
    const scores = [null, 'Jack','Queen','King','Bar','Cherry','Seven','Shell','Bell','Star','Wild']
    // declare an empty object to be populated with strings & counts using a standard for loop, as reels[i] & spins[i] map 1:1
    let result = {}
    for (let i = 0; i < 3; i++) {
      let cur = reels[i][spins[i]]
      result[cur] ? result[cur]++ : result[cur] = 1;
    }
    // Object.entries() returns an array of subarrays which can be formatted, sorted, and has helpful .length property
    const e = Object.entries(result).sort((aArr, bArr) => aArr[1] - bArr[1])
    // ^ sorting to ensure e[1] is the entry with 2 occurrences in the case of a 1-2 match split. 
    // use .length to determine if all 3 are unique (score 0) or all 3 match (score base * 10)
    const unique = e.length
    if(unique === 3) return 0
    if(unique === 1) return scores.indexOf(e[0][0]) * 10
    // If we haven't returned above, the only possible remaining case is a 1 & 2 split;
    // determine how many are 'Wild' and score accordingly.
    // If 1 wild, return 2x the base score of the item we have 2 of.
    // Otherwise just return base score, since 0 Wilds yields no bonus to other item's base, or 2 Wilds yield its own base with no bonus from the other item.
    return result['Wild'] == 1 ? scores.indexOf(e[1][0]) * 2 : scores.indexOf(e[1][0])
  }