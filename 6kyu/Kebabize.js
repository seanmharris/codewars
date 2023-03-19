/*
Modify the kebabize function so that it converts a camel case string into a kebab case.
"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:
the returned string should only contain lowercase letters
*/

function kebabize(str) {
    let sanitized = str.replace(/[0-9]/g, '')
    let result = '';
    for (let char of sanitized) {
      if (char.toLowerCase() === char) {
        result += char
      } else result += `-${char.toLowerCase()}`
    }
    return result[0] === '-' ? result.slice(1) : result
  }