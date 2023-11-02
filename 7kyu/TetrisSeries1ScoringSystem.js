/*
Tetris is a puzzle video game originally designed and programmed by Soviet Russian software engineer Alexey Pajitnov.
The first playable version was completed on June 6, 1984. Pajitnov derived its name from combining the Greek numerical
prefix tetra- (the falling pieces contain 4 segments) and tennis, Pajitnov's favorite sport.
About scoring system: The scoring formula is built on the idea that more difficult line clears should be awarded more points.
For example, a single line clear is worth 40 points, clearing four lines at once (known as a Tetris) is worth 1200.
A level multiplier is also used. The game starts at level 0. The level increases every ten lines you clear.
Note that after increasing the level, the total number of cleared lines is not reset.
For our task you can use this table:
lv  1l  2l  3l   4l
0	40	100 300	1200
1	80	200	600	2400
2	120	300	900	3600
3	160	400	1200	4800
Task: Calculate the final score of the game using original Nintendo scoring system
Input: Array with cleaned lines.
Example: [4, 2, 2, 3, 3, 4, 2]
Input will always be valid: array of random length (from 0 to 5000) with numbers from 0 to 4.
Ouput: Calculated final score.
Example:
getScore([4, 2, 2, 3, 3, 4, 2]); // returns 4900
Step 1: +1200 points for 4 lines (current level 0). Score: 0+1200=1200;
Step 2: +100 for 2 lines. Score: 1200+100=1300;
Step 3: +100. Score: 1300+100=1400;
Step 4: +300 for 3 lines (current level still 0). Score: 1400+300=1700.
Total number of cleaned lines 11 (4 + 2 + 2 + 3), so level goes up to 1 (level ups each 10 lines);
Step 5: +600 for 3 lines (current level 1). Score: 1700+600=2300;
Step 6: +2400. Score: 2300+2400=4700;
Step 7: +200. Total score: 4700+200=4900 points.
*/

function getScore(arr) {
    // default state on game start
    let multiplier = 1,
        // ^ Zero-indexed 'level' doesn't matter; we'll use a multiplier init at 1, as scores increase linearly
        points = [0,40,100,300,1200],
        // ^ Score table for each clear. Won't get zero lines, but can use indices for the remaining corresponding scores.
        lines = 0,
        // ^ Tracking number of lines. Each time we reach a threshold (10) we'll increase multiplier & decrease lines by 10
        score = 0;
        // ^ Cumulative score to be returned at the end, initially 0
    
    // for loop through input arr
    for (let clear of arr) {
      lines += clear
      // ^ We're seeing number of lines cleared with each clear event
      score += points[clear] * multiplier
      // ^ And adding the score amount from our points table at the clear index, multiplied by our current multiplier
      // If we're at the threshold of 10 lines, we need to increment our multiplier & reset our lines count
      if (lines >= 10) {
        multiplier += 1
        lines -= 10
      }
      // At this point the loop continues to the next clear value, with appropriate points added & potentially increased multiplier if we advanced a level
      // The loop will continue & keep track of our score through the final clear event in the input arr. We can confidently return score after the loop completes.
    }
    return score
  }