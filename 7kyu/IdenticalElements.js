/*
Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.
Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).
*/

function duplicateElements(m, n) {
    for (let i = 0; i < m.length; i++) {
      if (n.includes(m[i])) return true
    }
    return false
  }