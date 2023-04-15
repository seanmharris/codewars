/*
The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant.
The association is funded through financial donations from generous benefactors.
John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15]
He wants to know how much the next benefactor should give to the association so that the average of the
first n + 1 donations should reach an average of 30. After doing the math he found 149. 
He thinks that he could have made a mistake.
if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149
Could you help him?
Task: The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.
Should the last donation be a non positive number (<= 0) John wants us to throw an error
So, he will clearly see that his expectations are not great enough.
Notes:
all donations and navg are numbers (integers or floats), arr can be empty.
new_avg([14, 30, 5, 7, 9, 11, 15], 92) should return 645
new_avg([14, 30, 5, 7, 9, 11, 15], 2) should throw an error
*/

function newAvg(arr, newavg) {
    const totalNeeded = newavg * (arr.length + 1)
    const res = Math.ceil(totalNeeded - arr.reduce((a,b) => a + +b, 0))
    if (res <= 0){
      throw new Error('Expected New Average is too low')
    }
    return res;
  }