/*
Create a function that returns a villain name based on the user's birthday.
The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need to worry about converting strings to dates.
The first name will come from the month, and the last name will come from the last digit of the date, corresponding with provided arrays m & d.
Prefix all villain names with 'The '. For example a birthday of May 3 would return 'The Despicable Raisin' rather than just 'Despicable Raisin'
*/

function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
    return `The ${m[birthday.getMonth()]} ${d[birthday.getDate() % 10]}`
  }