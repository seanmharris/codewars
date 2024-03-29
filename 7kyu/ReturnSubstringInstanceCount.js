/*
Complete the solution so that it returns the number of times the search_text is found within the full_text.
Usage example:
solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1
*/

function solution(fullText, searchText){
    let copy = fullText.slice(),
        count = 0;
    while(copy.length >= searchText.length) {
      let idx = copy.indexOf(searchText)
      if (idx > -1) {
        count ++
        copy = copy.slice(idx + 1) 
      } else return count
    }
    return count
  }