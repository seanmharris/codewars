/*
A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. 
The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity 
of books of this code in stock.

For example an extract of a stocklist could be:

L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]

You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

M = ["A", "B", "C", "W"]

and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string:

(A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 
50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

If L or M are empty return string is "" 

Notes:
In the result codes and their values are in the same order as in M.
*/

function stockList(listOfArt, listOfCat){
  if (listOfArt.length == 0 || listOfCat.length == 0) return ''
  let res = []
  let codes = listOfArt.map(element => element.split(' ')).flat()
  listOfCat.forEach(category => {
    let amount = 0
    for(let i = 0; i < codes.length; i+=2) {
      if(codes[i][0] == category) {
        amount += Number(codes[i+1])
      }
    }
    res.push(`(${category} : ${amount})`) 
  })
  return res.join(' - ')
}