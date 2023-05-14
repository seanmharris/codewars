/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?
If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".
Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

function balance(left,right){
    function getWeight(string) {
      let weight = 0
      for (let char of string) {
        if (char === '!') {
          weight += 2
        } else if (char === '?') {
          weight += 3
        }
      }
      return weight;
    }
    
    const weights = [getWeight(left), getWeight(right)]
    
    return weights[0] > weights[1] ? 'Left' : weights[0] < weights[1] ? 'Right' : 'Balance'
    
  }