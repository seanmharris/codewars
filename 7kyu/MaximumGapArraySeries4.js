/*
Given an array [] of integers , Find The maximum difference between the successive elements in its sorted form.
Notes:
Array size is at least 3.
Array's numbers Will be mixture of positives and negatives also zeros_
Repetition of numbers in the array could occur.
The Maximum Gap is computed Regardless the sign.
Input >> Output Examples
maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
maxGap ({-3,-27,-4,-2}) ==> return (23)
Explanation:
The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .
Note : Regardless the sign of negativity .
maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
Explanation:
The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .
Note : Regardless the sign of negativity .
maxGap ({-54,37,0,64,640,0,-15}) //return (576)
Explanation:
The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .
Note : Regardless the sign of negativity .
*/

function maxGap (numbers){
    let max = 0;
    numbers.sort((a,b) => a - b)
    for (let i = 1; i < numbers.length; i++) {
      const dif = numbers[i] - numbers[i-1];
      if (dif > max) max = dif
    }
    return max
  }