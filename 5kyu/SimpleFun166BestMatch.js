/*
"AL-AHLY" and "Zamalek" are the best teams in Egypt, but "AL-AHLY" always wins the matches between them. "Zamalek" managers want to know what is the best match they've played so far.
The best match is the match they lost with the minimum goal difference. If there is more than one match with the same difference, choose the one "Zamalek" scored more goals in.
Given the information about all matches they played, return the index of the best match (0-based). If more than one valid result, return the smallest index.
Example
For ALAHLYGoals = [6,4] and zamalekGoals = [1,2], the output should be 1 (2 in COBOL).
Because 4 - 2 is less than 6 - 1
For ALAHLYGoals = [1,2,3,4,5] and zamalekGoals = [0,1,2,3,4], the output should be 4.
The goal difference of all matches are 1, but at 4th match "Zamalek" scored more goals in. So the result is 4 (5 in COBOL).
Input/Output
[input] integer array ALAHLYGoals
The number of goals "AL-AHLY" scored in each match.
[input] integer array zamalekGoals
The number of goals "Zamalek" scored in each match. It is guaranteed that zamalekGoals[i] < ALAHLYGoals[i] for each element.
[output] an integer
Index of the best match.
*/

function bestMatch(aG, zG) {
    let diffs = aG.map((g,i) => g - zG[i]),
        minD = Infinity,
        maxG = -Infinity,
        qInds = [],
        res = 0
    for (let i = 0; i < diffs.length; i++) {
      if (diffs[i] === minD) qInds.push(i)
      if (diffs[i] < minD) {
        qInds = [i]
        minD = diffs[i]
      } 
    }
    for (let i = 0; i < qInds.length; i++) {
      if(zG[qInds[i]] > maxG) {
        maxG = zG[qInds[i]]
        res = qInds[i]
      } 
    }
    return res
  }