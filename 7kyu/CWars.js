/*
Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.
Similar to those kinda names we need to initialize the names.
See the pattern below:
initials('code wars') => returns C.Wars 
initials('Barack Hussain obama') => returns B.H.Obama 
Complete the function initials.
Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.
*/

function initials(n){
    return n.split(' ')
            .map((e,i,a) => i === a.length - 1 ? e[0].toUpperCase() + e.slice(1) : e[0].toUpperCase())
            .join('.')
  }