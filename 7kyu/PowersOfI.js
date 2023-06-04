/*
i is the imaginary unit, it is defined by i² = −1
Therefore it is a solution to x² + 1 = 0
Your Task
Complete the function pofi that returns i to the power of a given non-negative integer in its simplest form, as a string (answer may contain i).
*/

function pofi(n){
    switch (n % 4) {
        case 0 : return '1';
        case 1 : return 'i';
        case 2 : return '-1';
        case 3 : return '-i'
    }
  }