/*
In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetically,
with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.
Example
alphaSeq("ZpglnRxqenU") -> 
"Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"
Technical Details:
The string will include only letters.
The first letter of each sequence is uppercase followed by n-1 lowercase.
Each sequence is separated with a comma.
Return value needs to be a string.
*/

const alphaSeq = str => [...str].sort((a,b) => a.localeCompare(b)).map(letter => letter.toUpperCase() + letter.toLowerCase().repeat(letter.toUpperCase().charCodeAt() - 65)).join(',')

/* solution can be more concise if you make the whole string lowercase before spreading into the array:

const alphaSeq = s => [...s.toLowerCase()].sort().map(c => c.toUpperCase() + c.repeat(c.charCodeAt() - 97)).join(',');

benefits: 
1. no need to define a sort function using localeCompare; you're guaranteed to only have letters and the default .sort() compares raw ascii values. 
   so, making the whole string lowercase ensures all letters are sorted alphabetically
2. since characters are already lowercase, you only need to make the one outlier upppercase in the map function; then the rest can just be a raw repeat of the charcode - 97 (0 for a, 25 for z)
*/