/*
You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.
You need to find out if the cat can catch the mouse from it's current position. The cat can jump (j) characters.
Also, the cat cannot jump over the dog.
So:
if j = 5:
..C.....mD. returns 'Caught!' <-- not more than j characters between
..D...C............m...... returns 'Escaped!' <-- as there are more than j characters between the two, the cat can't jump far enough
if j = 10:
...m.........C...D returns 'Caught!' <--Cat can jump far enough and jump is not over dog
...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse
Finally, all three animals must be present. If any is missing, return 'boring without all three'
..m..C.... returns 'boring without all three' <-- cat would catch mouse, however without the dog in the string at all, it's rather boring.
*/

function catMouse(x, j){
    let cat = x.indexOf('C'),
        mou = x.indexOf('m'),
        dog = x.indexOf('D'),
        lame = cat === -1 || mou === -1 || dog === -1,
        jump = Math.abs(cat - mou) <= j,
        block = (Math.max(cat, mou, dog) !== dog && Math.min(cat,mou,dog) !== dog);
    return lame ? 'boring without all three' : jump ? block ? 'Protected!' : 'Caught!' : 'Escaped!' 
  }