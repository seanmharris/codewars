/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa).
Leave any incidence of c untouched.
Example:
'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x){
    let step1 = x.replaceAll('b','d')
    let step2 = step1.replaceAll('a','b')
    return step2.replaceAll('d','a')
  }