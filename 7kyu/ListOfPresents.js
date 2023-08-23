/*
Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.
Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift.
You should return an integer representing the maximum amount of gifts Leo can buy.
Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.
NOTE: All numbers will be integers >= 0, and the array will never be empty.
*/

function howManyGifts(maxBudget, gifts){
    gifts.sort((a,b) => b - a)
    let num = 0,
        cur = gifts.pop()
    while (maxBudget >= cur) {
      maxBudget -= cur
      cur = gifts.pop()
      num++
    }
    return num
  }

// could be faster without sorting via a min heap (log n vs. n log n) but JS doesn't have it by default and I don't want to code it out for a 7kyu.