/*
Given an integer n and two other values, build an array of size n filled with these two values alternating.
Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
*/

function alternate(n, firstValue, secondValue) {
    let res = []
    while(res.length < n) {
        res.push(firstValue)
        if (res.length < n) res.push(secondValue)
    }
    return res
}

// alt version 

function alternate(n, firstValue, secondValue) {
    let res = new Array(n).fill(firstValue)
    for (let i = 1; i < res.length; i += 2) {
        res[i] = secondValue
    }
    return res
}