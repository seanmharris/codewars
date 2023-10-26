/*
In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that it has x number of mating pairs of bears.
Task:
You must check within a string (s) to find all of the mating pairs, returning a list/array of the string containing valid mating pairs and a boolean indicating
whether the total number of bears is greater than or equal to x.
Rules for a 'valid' mating pair:
Bears are either 'B' (male) or '8' (female),
Bears must be together in male/female pairs 'B8' or '8B',
Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).
Return an array containing a string of the valid mating pairs available (empty string if there are no pairs),
and a boolean indicating whether the total number of bears is greater than or equal to x. , e.g:
(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false]; in this example, the number of bears(=4) is lesser than the given value of x(=6)
*/

function bears(x, s){
    let str = ''
    for (let i = 0; i < s.length; i++) {
      if ((s[i] === 'B' && s[i+1] === '8') || (s[i] === '8' && s[i+1] === 'B')) {
        str += s.slice(i, i+2)
        i++
      } 
    }
    
    // the description is wrong. it explicitly says total number of bears, total is even in bold. It's not asking for total PAIRS of bears...
    // still, with just checking str.length >= x below, my code failed. adding the * 2 was my hack to effectively check pairs of bears, and it suddenly passed.
  
    return [str, str.length >= x * 2]
  }