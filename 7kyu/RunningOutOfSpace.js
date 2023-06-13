/*
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
*/


const spacey = array => array.map((_,i,a) => a.slice(0, i+1).join(''))

/*
possibly better performance alternate solution? simpler iterative approach, no slicing / joining so likely better on both time & space, but less concise

function spacey(array){
  let res = [], str = '';
  array.forEach(e => {
    str += e
    res.push(str)
  })
  return res
}
*/