/*
Given 2 string parameters, show a concatenation of:
the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 
*/

function reverseAndMirror(s1,s2) {
    const inverter = str => [...str].map((a, i) => a === str[i].toLowerCase() ? a.toUpperCase() : a.toLowerCase())
                                    .reverse()
                                    .join(''),
          first = inverter(s1);
    
    return `${inverter(s2)}@@@${first}${[...first].reverse().join('')}`
  }