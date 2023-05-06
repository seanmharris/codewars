/*
Some people just have a first name; some people have first and last names and some people have first, middle and last names.
You task is to initialize the middle names (if there is any).
Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

const initializeNames = name => name.split(' ').map((el, idx, arr) => idx === 0 || idx === arr.length - 1 ? el : el[0] + '.').join(' ')