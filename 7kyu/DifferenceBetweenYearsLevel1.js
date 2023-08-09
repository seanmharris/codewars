/*
Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD.
Your job is: Take the years and calculate the difference between them.
Examples:
'1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18 
'2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18
At this level, you don't need validate months and days to calculate the difference.
*/

var howManyYears = function(date1, date2){
    let a = date1.split('/')[0],
        b = date2.split('/')[0]
    return Math.abs(a - b)
  }

  // better (or at least DRYer) with a helper function, as below:

function yearsApart(firstDate, secondDate) {
    const getYear = str => str.split('/')[0]
    return Math.abs(getYear(firstDate) - getYear(secondDate))
}