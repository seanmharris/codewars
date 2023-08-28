/*
You are developing an image hosting website.
You have to create a function for generating random and unique image filenames.
Create a function for generating a random 6 character string which will be used to access the photo URL.
To make sure the name is not already in use, you are given access to an PhotoManager object.
You can call it like so to make sure the name is unique
// at this point, the website has only one photo, hosted on the 'ABCDEF' url
photoManager.nameExists('ABCDEF'); // returns true
photoManager.nameExists('BBCDEF'); // returns false
Note: We consider two names with same letters but different cases to be unique.
*/

function generateName() {
    let name = undefined
    while(!name) {
      let id = new Array(6).fill(0).map(_ => String.fromCharCode(Math.floor(Math.random() * 26) + 65)).join('')
      if (!photoManager.nameExists(id)) name = id
    }
    return name
  }

// really hated this prompt. not an overly difficult challenge, but the only examples given contain exclusively uppercase letters, 
// hence my relatively restrictive 'random' only ever giving uppercase letters. Realized later via line 10, they would accept lowercase as well, but no telling if that's all.
// Are punctuation or numbers fair game? Who knows.