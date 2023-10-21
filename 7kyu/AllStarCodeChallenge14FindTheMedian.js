/*
Your non-profit company has assigned you the task of calculating some simple statistics on donations.
You have an array of integers, representing various amounts of donations your company has been given.
In particular, you're interested in the median value for donations.
The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.
Write a function that takes an array of integers as an argument and returns the median of those integers.
Notes:
The sorting step is vital.
Input arrays are non-empty.
Examples
Median of [33,99,100,30,29,50] is 41.5.
Median of [3,2,1] is 2.
*/


function median(arr) {
    arr.sort((a,b) => a - b)
    let len = arr.length,
        mid = len / 2
    return len % 2 ? arr[Math.floor(mid)] : (arr[mid] + arr[mid - 1]) / 2
}    

/*
no sort method:

function median(arr) {
    let max, min;
    while(arr.length > 2) {
        max = arr.indexOf(Math.max(...arr))
        min = arr.indexOf(Math.min(...arr))
        arr = arr.filter((_,i) => i !== max && i !== min)
    }  

    return arr.length == 1 ? arr[0] : (arr[0] + arr[1]) / 2
}
    */