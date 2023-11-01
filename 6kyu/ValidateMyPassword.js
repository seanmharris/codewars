/*
I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.
Passwords must abide by the following requirements:
More than 3 characters but less than 20.
Must contain only alphanumeric characters.
Must contain letters and numbers.
*/

function validPass(password){
    const abc = password.match(/[a-z]/gi),
          num = password.match(/[0-9]/g),
          len = password.length, 
          ok = len > 3 && len < 20
    
    return abc && num && ok && ([...abc,...num].length === len) ? 'VALID' : 'INVALID'
  }