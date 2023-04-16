/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
Find the number of Friday 13th in the given year.
Input: Year in Gregorian calendar as integer.
Output: Number of Black Fridays in the year as an integer.
Examples:
unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

/*
Googled info lol:
IN NORMAL YEARS                             IN LEAP YEARS
Jan. 1 falls on:    # of Friday the 13ths	Jan. 1 falls on:	# of Friday the 13ths
Sunday	            2                       Sunday              3
Monday              2                       Monday              2
Tuesday             2                       Tuesday             1
Wednesday           1                       Wednesday           2
Thursday            3                       Thursday            2
Friday              1                       Friday              1
Saturday            1                       Saturday            1

*/

function unluckyDays(year){
    const dateObj = new Date(`January 1, ${year} 00:00:00`)
    const firstWeekDay = dateObj.getDay()
    const leapYear = year % 4 === 0
    if (leapYear) {
      switch(firstWeekDay) {
          case 0 :
          return 3;
          case 1 :
          case 3 :
          case 4 :
          return 2;
          default :
          return 1;
      }
    }
    switch(firstWeekDay) {
          case 4 :
          return 3;
          case 0 :
          case 1 :
          case 2 :
          return 2;
          default :
          return 1;
      }
  }