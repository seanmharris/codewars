/*
You will be given a string of English digits "stuck" together, like this:
"zeronineoneoneeighttwoseventhreesixfourtwofive"
Your task is to split the string into separate digits:
"zero nine one one eight two seven three six four two five"
Examples
"three"              -->  "three"
"eightsix"           -->  "eight six"
"fivefourseven"      -->  "five four seven"
"ninethreesixthree"  -->  "nine three six three"
"fivethreefivesixthreenineonesevenoneeight"  -->  "five three five six three nine one seven one eight"
*/

function uncollapse(digits){
    let splits = ['zero','one','two','three','four','five','six','seven','eight','nine'],
        arr = [...digits],
        res = [],
        c = 0;
  
    for (let i = 0; i <= arr.length; i++) {
      if (splits.includes(digits.slice(c,i))) {
        res.push(digits.slice(c,i))
        c = i
      }
    }
    return res.join(' ')
  }